import React, { useState, useEffect } from "react";
import { IconTickBlue } from "../../../Icons";
import "./styles.css"

const About = () => {
  const [language, setLanguage] = useState("en"); // Trạng thái ngôn ngữ

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "vi" : "en"));
  };
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    "images/picab/1.png",
    "images/picab/2.png", // Thay bằng đường dẫn ảnh khác
    "images/picab/3.png", // Thay bằng đường dẫn ảnh khác
    "images/picab/4.png",
    "images/picab/5.png",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval); // Dọn dẹp interval khi component unmount
  }, [images.length]);
  return (
    <>
      {/* Tạo phần tử để cách header */}
      <div className="h-10" />
      <div className="min-h-screen bg-white text-gray-800 dark:bg-gray-900 dark:text-gray-100 flex items-center justify-center">
        <div className="container mx-auto px-4 py-12">
          {/* Nút đổi ngôn ngữ */}
          <button
            onClick={toggleLanguage}
            className="fixed bottom-4 right-4 px-4 py-2 bg-gray-800 text-white rounded-lg shadow hover:bg-gray-700"
          >
            {language === "en" ? "🇻🇳Tiếng Việt" : "🇬🇧English"}
          </button>

          {/* Grid để chia bố cục thành 2 nửa trên màn hình lớn */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Nửa trái: Avatar và giới thiệu */}
            <div className="text-center md:text-left flex flex-col items-center md:items-start">
            <div className="circle absolute" />
              <img
                src={images[currentImageIndex]}
                alt="Van Doi Avatar"
                className="w-32 h-32 relative z-10 rounded-full mb-4 shadow-lg shadow-gray-500/70 transition-transform duration-700 transform rotate-y-180"
                style={{ transform: `rotateY(${currentImageIndex * 180}deg)` }}
              />
              <h2 className="text-2xl font-semibold mb-2">
                {language === "en" ? "Dao Van Doi (Dio)" : "Đào Văn Đôi (Dio)"}
                <span className="pb-2 relative top-[-2px] pl-1">
                  <IconTickBlue />
                </span>
              </h2>
              <p className="text-lg mb-4">
                {language === "en"
                  ? "Software Engineer & Open-Source Contributor"
                  : "Kỹ sư phần mềm & Người đóng góp mã nguồn mở"}
              </p>
              <div className="flex justify-center md:justify-start space-x-4 mb-4">
                <a
                  href="https://facebook.com/daovandoi2003"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white"
                >
                  <i className="fab fa-facebook fa-2x"></i>
                </a>

                <a
                  href="https://instagram.com/_am.dio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white"
                >
                  <i className="fab fa-instagram fa-2x"></i>
                </a>

                <a
                  href="https://github.com/doi2523"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white"
                >
                  <i className="fab fa-github fa-2x"></i>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white"
                >
                  <i className="fab fa-linkedin fa-2x"></i>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white"
                >
                  <i className="fab fa-twitter fa-2x"></i>
                </a>
              </div>
              <div className="my-4 border-t border-gray-800 dark:border-gray-600 border-dashed max-w-xl w-full" />
              <p className="text-xl leading-relaxed max-w-xl">
                {language === "en"
                  ? "I'm Doi, a passionate software engineer who loves coding, technology, and open-source projects. My journey in the tech world began when I was in high school, and it has been an exciting ride ever since. I specialize in building web applications, creating interactive user experiences, and contributing to the open-source community."
                  : "Tôi là Đôi, một kỹ sư phần mềm đam mê yêu thích lập trình, công nghệ và các dự án mã nguồn mở. Hành trình của tôi trong thế giới công nghệ bắt đầu khi tôi còn học trung học, và đó là một hành trình thú vị từ đó. Tôi chuyên về xây dựng ứng dụng web, tạo trải nghiệm người dùng tương tác và đóng góp cho cộng đồng mã nguồn mở."}
              </p>
            </div>

            {/* Nửa phải: Kinh nghiệm và kỹ năng */}
            <div className="flex flex-col justify-center">
              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-8 shadow-lg mb-8">
                <h2 className="text-2xl font-semibold mb-4">
                  {language === "en" ? "Experience" : "Kinh nghiệm"}
                </h2>
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    {language === "en"
                      ? "Software Engineer at Dio Company"
                      : "Kỹ sư phần mềm tại Công ty Dio"}
                  </li>
                  <li>
                    {language === "en"
                      ? "Open-Source Contributor"
                      : "Người đóng góp mã nguồn mở"}
                  </li>
                  <li>
                    {language === "en"
                      ? "Freelance Web Developer"
                      : "Lập trình viên web tự do"}
                  </li>
                </ul>
              </div>
              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-8 shadow-lg">
                <h2 className="text-2xl font-semibold mb-4">
                  {language === "en" ? "Skills" : "Kỹ năng"}
                </h2>
                <ul className="list-disc list-inside space-y-2">
                  <li>JavaScript, TypeScript, Python</li>
                  <li>React, Node.js, Tailwind CSS</li>
                  <li>Git, Docker, AWS</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Phần bên dưới trên cả màn hình lớn và nhỏ: Thông tin thêm */}
          <div className="mt-12">
            <h2 className="text-2xl font-semibold mb-4">
              {language === "en" ? "More About Me" : "Thông tin thêm về tôi"}
            </h2>
            <p className="leading-relaxed max-w-3xl mx-auto">
              {language === "en"
                ? "I enjoy working on challenging projects that push my limits. When I'm not coding, you can find me exploring the latest tech trends, reading books on software design, or contributing to the open-source community. I'm always eager to learn and grow as a developer and as a person."
                : "Tôi thích làm việc với các dự án thử thách để đẩy giới hạn của mình. Khi không lập trình, bạn có thể tìm thấy tôi đang khám phá các xu hướng công nghệ mới nhất, đọc sách về thiết kế phần mềm, hoặc đóng góp cho cộng đồng mã nguồn mở. Tôi luôn háo hức học hỏi và phát triển như một nhà phát triển và một con người."}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
