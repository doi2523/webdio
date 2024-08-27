// src/hooks/useLogin.js

import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Firebase/firebase"; // Đảm bảo đường dẫn đúng
import Swal from "sweetalert2";
import { getErrorMessage } from "../useError";

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
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      // Kiểm tra xem email đã được xác minh chưa
      if (!user.emailVerified) {
        throw new Error("Vui lòng xác minh email của bạn trước khi đăng nhập.");
      }

      setSuccess("Đăng nhập thành công!");

      // Hiển thị thông báo thành công
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          // toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        }
      });
      Toast.fire({
        icon: "success",
        title: "Login in successfully"
      });

      // Chuyển hướng sau khi đăng nhập thành công
      // navigate('/auth');
    } catch (error) {
      const errorMessage = getErrorMessage(error.code); // Sử dụng hàm xử lý lỗi

      setError(errorMessage);
      Swal.fire({
        icon: "error",
        title: "Đăng nhập thất bại",
        text: errorMessage,
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
