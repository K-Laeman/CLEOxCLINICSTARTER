/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: { white: "#fff", black: "#000", deeppink: "#ff0070" },
      fontFamily: {
        "line-seed-sans-th": "'LINE Seed Sans TH'",
        
      },
      borderRadius: { "11xl": "30px", xl: "20px" },
    },
    fontSize: {
      "5xl": "24px",
      "77xl": "96px",
      "131xl": "150px",
      "29xl": "48px",
    },
  },
  corePlugins: { preflight: false },
  plugins: [],
}
