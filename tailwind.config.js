/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "custom-500": "500px",
        "custom-900": "900px",
        "custom-500": "500px",
        "custom-940": "940px",
        "custom-1150": "1150px",
      }
    },
  },
  plugins: [],
}

