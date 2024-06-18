import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1rem",
      },
      colors: {
        current: "currentColor",
        transparent: "transparent",
        secondaryWhite: "#EEF5FF",
        white: "#FFFFFF",
        mainBlack: "#111",
        primaryBlack: "#000",
        secondaryBlack: "#212227",
        black: "#090E34", // sidebar dash
        dark: "#213555", // center dash
        headerDark: "#16205C", // header dash
        footer: "#222222",
        primary: "#FB607F",
        primary2: "#ff2c57",
        secondary: "#3D5579",
        background: "#F0F0F0",
        inputBackground: "#DCDDE0",
        "body-color": "#2F4858",

        yellow: "#FBB040",
        boxdark: "#24303F",
        "boxdark-2": "#1A222C",
        strokedark: "#2E3A47",
        gray: "#EFF4FB",
        graydark: "#333A48",
        error: "#b14040",
        // candidate interview
        interBack: "#ffffff",
        interCard: "#f7faf7",
        interFullCard: "FFFFFF",
        interAnswer: "#FFFFFF",
        interText: "#5d1426",
        interAnswerText: "#5d1426",
        interIconColor: "#FB607F",
        red: "#d12c2c",
      },
      minWidth: {
        22.5: "5.625rem",
        42.5: "10.625rem",
        47.5: "11.875rem",
        75: "18.75rem",
      },
      fontSize: {
        vvs: "8px",
        vs: "10px",
        xs: "0.75rem",
        sm: "0.875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
        "5xl": "3rem",
        "6xl": "4rem",
      },
      zIndex: {
        999999: "999999",
        99999: "99999",
        9999: "9999",
        999: "999",
        99: "99",
        9: "9",
        1: "1",
      },
      boxShadow: {
        default: "0px 8px 13px -3px rgba(0, 0, 0, 0.07)",
        card: "0px 1px 3px rgba(0, 0, 0, 0.12)",
        "card-2": "0px 1px 2px rgba(0, 0, 0, 0.05)",
        switcher:
          "0px 2px 4px rgba(0, 0, 0, 0.2), inset 0px 2px 2px #FFFFFF, inset 0px -1px 1px rgba(0, 0, 0, 0.1)",
        "switch-1": "0px 0px 5px rgba(0, 0, 0, 0.15)",
        1: "0px 1px 3px rgba(0, 0, 0, 0.08)",
        2: "0px 1px 4px rgba(0, 0, 0, 0.12)",
        3: "0px 1px 5px rgba(0, 0, 0, 0.14)",
        4: "0px 4px 10px rgba(0, 0, 0, 0.12)",
        5: "0px 1px 1px rgba(0, 0, 0, 0.15)",
        6: "0px 3px 15px rgba(0, 0, 0, 0.1)",
        7: "-5px 0 0 #313D4A, 5px 0 0 #313D4A",
        8: "1px 0 0 #313D4A, -1px 0 0 #313D4A, 0 1px 0 #313D4A, 0 -1px 0 #313D4A, 0 3px 13px rgb(0 0 0 / 8%)",
      },
      dropShadow: {
        1: "0px 1px 0px #E2E8F0",
        2: "0px 1px 4px rgba(0, 0, 0, 0.12)",
      },
      keyframes: {
        rotating: {
          "0%, 100%": { transform: "rotate(360deg)" },
          "50%": { transform: "rotate(0deg)" },
        },
        scale: {
          "0%, 100%": { transform: "scale(.9)", color: "#000000" },
          "50%": { transform: "scale(1.05)" },
        },
        scale2: {
          "0%, 100%": { transform: "scale(.9)" },
          "50%": { transform: "scale(1.05)" },
        },
      },
      animation: {
        "ping-once": "ping 5s cubic-bezier(0, 0, 0.2, 1)",
        rotating: "rotating 30s linear infinite",
        scale: "scale 1s infinite",
        scale2: "scale2 2s infinite",
        "spin-1.5": "spin 1.5s linear infinite",
        "spin-2": "spin 2s linear infinite",
        "spin-3": "spin 3s linear infinite",
      },
      // opacity: {
      //   65: ".65",
      // },
      screens: {
        "2xsm": "375px",
        xsm: "425px",
        xs: "450px",
        // => @media (min-width: 450px) { ... }

        sm: "575px",
        // => @media (min-width: 576px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "992px",
        // => @media (min-width: 992px) { ... }

        xl: "1200px",
        // => @media (min-width: 1200px) { ... }

        "2xl": "1400px",
        // => @media (min-width: 1400px) { ... }
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
