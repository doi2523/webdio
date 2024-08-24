import React from "react";
import { useNavigate } from "react-router-dom";
import { HandPointingLeftIcon } from "../../../Icons";
import "./service.css";

const Service = () => {
  const navigate = useNavigate();

  const handleLearnMoreClick = (serviceId) => {
    navigate(`/services/${serviceId}`);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-gray-100 dark:bg-gray-900 pt-16">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">
          My Services
        </h1>
        <p className="text-gray-600 dark:text-gray-300">
          Me offer a variety of services to meet your needs.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Service 1 */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2">
            Đăng Ký Bảo Hành
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Đăng ký phiếu bảo hành khi mua.
          </p>
          <div className="mt-4 flex items-center">
            <button
              onClick={() => handleLearnMoreClick("create/warranty")}
              className="px-4 py-2 bg-blue-600 dark:bg-blue-500 text-white rounded-md hover:bg-blue-700 dark:hover:bg-blue-400 transition-colors duration-200"
            >
              Tìm hiểu thêm
            </button>
            <div className="ml-4 mr-6 pointing-animation">
              <HandPointingLeftIcon />
            </div>
          </div>
        </div>

        {/* Service 2 */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2">
            Hướng Dẫn
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Hướng dẫn chi tiết cách crack Locket.
          </p>
          <div className="mt-4 flex items-center">
            <button
              onClick={() => handleLearnMoreClick("locketgold/guide")}
              className="px-4 py-2 bg-blue-600 dark:bg-blue-500 text-white rounded-md hover:bg-blue-700 dark:hover:bg-blue-400 transition-colors duration-200"
            >
              Tìm hiểu thêm
            </button>
            <div className="ml-4 mr-6 pointing-animation">
              <HandPointingLeftIcon />
            </div>
          </div>
        </div>

        {/* Service 3 */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2">
            Tra Cứu Bảo Hành
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Tra cứu thông tin bảo hành.
          </p>
          <div className="mt-4 flex items-center">
            <button
              onClick={() => handleLearnMoreClick("find/warranty")}
              className="px-4 py-2 bg-blue-600 dark:bg-blue-500 text-white rounded-md hover:bg-blue-700 dark:hover:bg-blue-400 transition-colors duration-200"
            >
              Tìm hiểu thêm
            </button>
            <div className="ml-4 mr-6 pointing-animation">
              <HandPointingLeftIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
