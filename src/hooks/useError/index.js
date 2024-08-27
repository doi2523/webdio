// src/utils/errorMessages.js

export const getErrorMessage = (code) => {
    switch (code) {
      case 'auth/invalid-email':
        return 'Email không hợp lệ. Vui lòng kiểm tra lại.';
      case 'auth/user-not-found':
        return 'Email không được tìm thấy. Vui lòng kiểm tra lại.';
      case 'auth/wrong-password':
        return 'Mật khẩu không đúng. Vui lòng kiểm tra lại.';
      case 'auth/user-disabled':
        return 'Tài khoản của bạn đã bị vô hiệu hóa. Vui lòng liên hệ hỗ trợ.';
      case 'auth/too-many-requests':
        return 'Quá nhiều yêu cầu đăng nhập. Vui lòng thử lại sau.';
      case 'auth/email-already-in-use':
        return 'Email đã được sử dụng. Vui lòng chọn email khác.';
      case 'auth/weak-password':
        return 'Mật khẩu quá yếu. Vui lòng chọn mật khẩu mạnh hơn.';
      case 'auth/operation-not-allowed':
        return 'Đăng nhập bằng phương thức này không được phép. Vui lòng kiểm tra cài đặt.';
      case 'auth/account-exists-with-different-credential':
        return 'Tài khoản đã tồn tại với phương thức xác thực khác. Vui lòng kiểm tra lại.';
      case 'auth/credential-already-in-use':
        return 'Thông tin xác thực đã được sử dụng. Vui lòng thử với thông tin khác.';
      case 'auth/requires-recent-login':
        return 'Bạn cần đăng nhập lại để thực hiện hành động này.';
      case 'auth/invalid-credential':
        return 'Tài khoản hoặc mật khẩu không đúng. Vui lòng kiểm tra lại.';
      case 'auth/invalid-verification-code':
        return 'Mã xác minh không hợp lệ. Vui lòng kiểm tra lại.';
      case 'auth/invalid-verification-id':
        return 'ID xác minh không hợp lệ. Vui lòng kiểm tra lại.';
      default:
        return 'Đã xảy ra lỗi. Vui lòng thử lại sau.';
    }
  };
  