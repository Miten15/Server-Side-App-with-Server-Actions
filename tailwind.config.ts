import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        hero: 'url("https://m.media-amazon.com/images/I/81JaBsE4XTL._AC_UF1000,1000_QL80_.jpg")',
      },
      backgroundSize: { // Add this section to set background size and padding
        'hero-padded': '100% calc(100% + 40px)', // Adjust the padding (40px in this case)
      },
    },
  },
  plugins: [],
};
export default config;
