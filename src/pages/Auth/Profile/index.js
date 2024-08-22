import React, { useEffect, useState } from "react";
import { auth, checkEmailVerified } from "../../../Firebase/firebase";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import Swal from 'sweetalert2'
import { IconLogout, IconEdit, IconTickBlue, IconTickGray, IconNote, IconUser, IconFavorite } from '../../../Icons'; // Sử dụng named imports

const Profile = () => {
  const [user, setUser] = useState(null);
  const [isEmailVerified, setIsEmailVerified] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUser(user);
        const emailVerified = await checkEmailVerified();
        setIsEmailVerified(emailVerified);
      } else {
        setUser(null);
        setIsEmailVerified(false);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      const result = await Swal.fire({
        title: "Bạn chắc chứ?",
        text: "Bạn không thể hoàn tác bước này!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Vâng, đồng ý!"
      });
  
      if (result.isConfirmed) {
        await signOut(auth);
        console.log("Đã đăng xuất thành công");
  
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
          }
        });
        Toast.fire({
          icon: "success",
          title: "Log out in successfully"
        });
  
        // Điều hướng đến trang đăng nhập
        navigate("/login");
      }
    } catch (error) {
      console.error("Lỗi khi đăng xuất:", error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        timer: 3000,
        timerProgressBar: true,
        showConfirmButton: false
      });
    }
  };
  return (
    <div className="max-w-2xl mx-4 mb-10 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-10 bg-white shadow-xl rounded-lg text-gray-900">
      <div className="rounded-t-lg h-32 overflow-hidden">
        <img
          className="object-cover object-top w-full"
          src="https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
          alt="Mountain"
        />
      </div>
      <div className="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
        <img
          className="object-cover object-center h-32"
          src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
          alt="Woman looking front"
        />
      </div>
      <div className="text-center mt-2">
        <h2 className="font-semibold">
          {user ? (
            <>
              {user.email}{" "}
              {isEmailVerified ? (
                <IconTickBlue/>
              ) : (
                <IconTickGray/>
              )}
            </>
          ) : (
            <span className="loading loading-spinner loading-xs"></span>
          )}
        </h2>

        <p className="text-gray-500">Freelance Web Designer</p>
      </div>
      <ul className="py-4 mt-2 text-gray-700 flex items-center justify-around">
        <li className="flex flex-col items-center justify-around">
          <IconFavorite/>
          <div>2k</div>
        </li>
        <li className="flex flex-col items-center justify-between">
          <IconUser/>
          <div>10k</div>
        </li>
        <li className="flex flex-col items-center justify-around">
          <IconNote/>
          <div>15</div>
        </li>
      </ul>
      <div className="p-4 border-t mx-8 mt-2 flex justify-between">
        <button className="w-1/2 flex items-center justify-center rounded-full bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-2 space-x-2">
        <IconEdit/>
          <span>Edit</span>
        </button>

        <button
          onClick={handleLogout}
          className="flex items-center w-1/2 mx-3 rounded-full bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-2"
        >
          Logout 
          <IconLogout className="ml-2"/>
        </button>
      </div>
    </div>
  );
};

export default Profile;
