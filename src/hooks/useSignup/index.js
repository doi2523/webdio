import { useState } from 'react';
import {
  auth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signOut,
} from '../../Firebase/firebase'; // Đảm bảo đường dẫn đúng
import { getDatabase, ref, set } from 'firebase/database'; // Import Realtime Database functions
import Swal from 'sweetalert2';
import { getErrorMessage } from '../useError';

const useSignup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [role, setRole] = useState('user'); // Thêm trạng thái để lưu vai trò

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      Swal.fire({
        icon: 'error',
        title: 'Đăng ký thất bại',
        text: 'Mật khẩu không khớp.',
      });
      return;
    }

    if (!termsAccepted) {
      Swal.fire({
        icon: 'error',
        title: 'Đăng ký thất bại',
        text: 'Bạn phải chấp nhận các điều khoản và điều kiện.',
      });
      return;
    }

    try {
      // Tạo người dùng với email và mật khẩu
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Gửi email xác minh
      await sendEmailVerification(user);

      // Lưu thông tin người dùng vào Realtime Database với uid là khóa chính
      const db = getDatabase(); // Initialize Realtime Database
      await set(ref(db, 'users/' + user.uid), {
        email: email,
        createdAt: new Date().toISOString(), // Thời gian đăng ký tài khoản
        role: role, // Vai trò của người dùng
        lastLogin: null, // Thời gian đăng nhập lần cuối
        lastLogout: null, // Thời gian đăng xuất lần cuối
      });

      // Đăng xuất người dùng ngay sau khi đăng ký
      await signOut(auth);

      Swal.fire({
        icon: 'success',
        title: 'Tạo tài khoản thành công!',
        text: 'Vui lòng kiểm tra email của bạn để xác minh.',
      });
    } catch (error) {
      const errorMessage = getErrorMessage(error.code); // Sử dụng hàm xử lý lỗi

      Swal.fire({
        icon: 'error',
        title: 'Đăng ký thất bại',
        text: errorMessage,
      });
    }
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    termsAccepted,
    setTermsAccepted,
    role,
    setRole,
    handleSubmit,
  };
};

export default useSignup;
