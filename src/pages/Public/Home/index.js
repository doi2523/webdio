import React from "react";
import { Link } from "react-router-dom";
import Wave from "react-wavify";

function Home() {
  return (
    <>
      {/* Tạo phần tử để cách header */}
      <div className="h-10" />

      <div className="min-h-screen bg-white dark:bg-gray-900 flex flex-col items-center justify-center">
        {/* Introduction Section */}
        <Wave mask="url(#mask)" fill="#1277b0" style={{ transform: "scaleY(-1)" }} className="">
  <defs>
    <linearGradient id="gradient" gradientTransform="rotate(90)">
      <stop offset="0" stopColor="white" className="dark:stopColor-gray-900" />
      <stop offset="0.5" stopColor="black" className="dark:stopColor-gray-900" />
    </linearGradient>
    <mask id="mask">
      <rect
        x="0"
        y="0"
        width="2000"
        height="300"
        fill="url(#gradient)"
      />
    </mask>
  </defs>
</Wave>


        <section className="w-full py-17 text-center bg-white dark:bg-gray-900">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-5xl font-bold text-gray-900 dark:text-white">
              Hello, I'm Doi
            </h2>
            <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
              A Software Engineer and Graphic Designer.
            </p>
            <Link
              to="/projects"
              className="mt-8 inline-block bg-blue-600 text-white px-6 py-3 rounded-full transition-transform transform hover:scale-105"
            >
              View My Work
            </Link>
          </div>
        </section>
        <Wave mask="url(#mask)" fill="#1277b0" className="">
          <defs>
            <linearGradient id="gradient" gradientTransform="rotate(90)">
              <stop offset="0" stopColor="white" />
              <stop offset="0.5" stopColor="black" />
            </linearGradient>
            <mask id="mask">
              <rect
                x="0"
                y="0"
                width="2000"
                height="300"
                fill="url(#gradient)"
              />
            </mask>
          </defs>
        </Wave>
        {/* Projects Section */}
        <section className="w-full py-16 bg-white dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white text-center">
              Projects
            </h3>
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Project Cards */}
              <div className="bg-white dark:bg-gray-700 shadow rounded-lg overflow-hidden">
                <img
                  src="/images/picproject/screencapture-project-react-chatapp-web-app-2024-09-24-14_12_12.png"
                  alt="Project 1"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Messaging Web App
                  </h4>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">
                    A real-time web application that allows users to send and
                    receive messages instantly. It includes features like user
                    authentication, group chats, file sharing, and message
                    notifications, providing a seamless communication experience
                    across devices.
                  </p>
                  <Link
                    to="/projects/project1"
                    className="mt-4 underline inline-block text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    Read More
                  </Link>
                </div>
              </div>
              {/* Thêm các thẻ dự án khác tại đây */}
              {/* Project Cards */}
              <div className="bg-white dark:bg-gray-700 shadow rounded-lg overflow-hidden">
                <img
                  src="/images/picproject/screencapture-user-inifanshop-web-app-login-html-2024-09-24-14_25_41.png"
                  alt="Project 1"
                  className="w-full h-48 object-cover overflow-hidden"
                />
                <div className="p-6">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Phone E-commerce Website
                  </h4>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">
                    An online platform for buying and selling smartphones. It
                    showcases a variety of phone models with detailed
                    descriptions, reviews, and pricing. Users can search,
                    filter, and compare products, with secure payment options
                    and a streamlined checkout process.
                  </p>
                  <Link
                    to="/projects/project1"
                    className="mt-4 underline inline-block text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    Read More
                  </Link>
                </div>
              </div>
              {/* Project Cards */}
              <div className="bg-white dark:bg-gray-700 shadow rounded-lg overflow-hidden">
                <img
                  src="/images/picproject/screencapture-localhost-3000-login-2024-09-24-17_49_13.png"
                  alt="Project 1"
                  className="w-full h-48 object-cover overflow-hidden"
                />
                <div className="p-6">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Personal Website Description
                  </h4>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">
                    A personal website is an online platform created by an
                    individual to showcase their personal brand, skills, and
                    experiences. It serves as a digital portfolio where users
                    can present their projects, share their thoughts through a
                    blog, and connect with potential employers or collaborators.
                  </p>
                  <Link
                    to="/projects/project1"
                    className="mt-4 underline inline-block text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
