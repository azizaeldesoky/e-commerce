/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  safelist: [
    {
      pattern: /text-\[.*?\]/, // يسمح بـ text-[...] بأي رقم
      variants: ["md"], // يسمح باستخدامه مع md:
    },
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
