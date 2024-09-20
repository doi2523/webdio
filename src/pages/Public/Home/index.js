import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      {/* Tạo phần tử để cách header */}
      <div className="h-10" />

      <div className="min-h-screen bg-white dark:bg-gray-900 flex flex-col items-center justify-center">
        {/* Introduction Section */}
        <section className="w-full py-16 text-center bg-white dark:bg-gray-900">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-5xl font-bold text-gray-900 dark:text-white">Hello, I'm Doi</h2>
            <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">A Software Engineer and Graphic Designer.</p>
            <Link to="/projects" className="mt-8 inline-block bg-blue-600 text-white px-6 py-3 rounded-full transition-transform transform hover:scale-105">
              View My Work
            </Link>
          </div>
        </section>

        {/* Projects Section */}
        <section className="w-full py-16 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white text-center">Projects</h3>
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Project Cards */}
              <div className="bg-white dark:bg-gray-700 shadow rounded-lg overflow-hidden">
                <img src="project1.jpg" alt="Project 1" className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Project 1</h4>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">Brief description of the project.</p>
                  <Link to="/projects/project1" className="mt-4 inline-block text-blue-600 dark:text-blue-400 hover:underline">
                    Read More
                  </Link>
                </div>
              </div>
              {/* Thêm các thẻ dự án khác tại đây */}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
