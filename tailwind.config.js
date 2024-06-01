/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        custom_blue: "#4F46E5FF",
        bg_color: "#e0f0f9"
      }
    },
  },
  plugins: [],
}