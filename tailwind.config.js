/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",  // Đảm bảo các tệp React trong thư mục src được bao gồm
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
}

