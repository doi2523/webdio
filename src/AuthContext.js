import React, { createContext, useContext, useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './Firebase/firebase';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isVerified, setIsVerified] = useState(false); // Thêm trạng thái xác minh email

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        setIsVerified(currentUser.emailVerified); // Kiểm tra trạng thái xác minh
      } else {
        setUser(null);
        setIsVerified(false);
      }
      setLoading(false); // Khi có thông tin user thì dừng loading
    });

    return () => {
      setLoading(true);
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading, isVerified }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
