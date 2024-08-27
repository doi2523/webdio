import React, { createContext, useContext, useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { ref, onValue } from 'firebase/database'; // Import thêm các hàm cần thiết từ Firebase Database
import { auth, database } from './Firebase/firebase'; // Đảm bảo rằng bạn đã cấu hình firebase

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isVerified, setIsVerified] = useState(false);
  const [role, setRole] = useState(null); // Thêm trạng thái role

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        setIsVerified(currentUser.emailVerified);

        // Lấy thông tin role từ Firebase Realtime Database
        const userRef = ref(database, `users/${currentUser.uid}`);
        onValue(userRef, (snapshot) => {
          const data = snapshot.val();
          setRole(data?.role || 'user'); // Lưu trữ role của người dùng, mặc định là 'user'
        });

      } else {
        setUser(null);
        setIsVerified(false);
        setRole(null); // Reset lại role khi user đăng xuất
      }
      setLoading(false); // Dừng loading khi có thông tin user
    });

    return () => {
      setLoading(true);
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading, isVerified, role }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
