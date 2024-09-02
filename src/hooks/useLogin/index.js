import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, database } from "../../Firebase/firebase"; // Đảm bảo đường dẫn đúng
import Swal from "sweetalert2";
import { getErrorMessage } from "../useError";
import { ref, get } from "firebase/database";

const useLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e, navigate) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Kiểm tra xem email đã được xác minh chưa
      if (!user.emailVerified) {
        throw new Error("Vui lòng xác minh email của bạn trước khi đăng nhập.");
      }

      // Lấy thông tin vai trò của người dùng từ Realtime Database
      const userRef = ref(database, `users/${user.uid}`);
      const userSnap = await get(userRef);

      if (!userSnap.exists()) {
        throw new Error("Không tìm thấy thông tin người dùng.");
      }

      const userData = userSnap.val();
      const role = userData.role; // Giả sử thông tin vai trò được lưu trong trường 'role'

      setSuccess("Đăng nhập thành công!");

      // Hiển thị thông báo thành công
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseleave = Swal.resumeTimer;
        }
      });
      Toast.fire({
        icon: "success",
        title: "Login in successfully"
      });

      // Chuyển hướng dựa trên vai trò
      if (role === "admin") {
        navigate("/admin");
      } else if (role === "user") {
        navigate("/auth");
      } else {
        navigate("/");
      }
    } catch (error) {
      console.error("Lỗi đăng nhập:", error); // Log lỗi để kiểm tra
      const errorMessage = getErrorMessage(error.code); // Sử dụng hàm xử lý lỗi

      setError(errorMessage);
      Swal.fire({
        icon: "error",
        title: "Đăng nhập thất bại",
        // text: errorMessage,
        text: error,
      });
    }
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    rememberMe,
    setRememberMe,
    error,
    success,
    handleSubmit,
  };
};

export default useLogin;
