/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        // light theme
        paladiumBlue: "#C4DFDF",
        spanishMoss: "#D2E9E9",
        airPlant: "#E3F4F4",
        sand: "#F2F3F3",
        pureWhite: "#FFFFFF",
        purple: "#982176",
        gold: "#F1C93B",
        // dark theme
        cyberspace: "#272829",
        ambiguous: "#61677A",
        agreeableGray: "#D8D9DA",
        custard: "#FFF6E0",
      },
      backgroundImage: theme => ({
        "gradient-rainbow-light":
          "linear-gradient(90deg, #F2F3F3 44%, #FFFFFF 77%)",
        "gradient-rainbow-dark":
          "linear-gradient(74.44deg, #046582 9%,#6E7582 20%,#BB8082 37%, #F39189 44%)",
      }),
      fontFamily: {
        Franklin: ["Libre Franklin", "sans-serif"],
        Bodini: ["Bodini Moda", "serif"],
      },
      content: {
        digitalSerious: "url('./assets/front-left-serious.jpg')",
        digitalSmile: "url('./assets/front-left-smile.jpg')",
        cowboyFront: "url('./assets/cowboy-front-serious.jpg')",
        cowboyLeft: "url('./assets/cowboy-left-serious.jpg')",
        bomber: "url('./assets/bomber-serious.jpg')",
        blueShirt: "url('./assets/blue-shirt-pensive.jpg')",
        person1: "url('./assets/person-1.png')",
        person2: "url('./assets/person-2.png')",
        person3: "url('./assets/person-3.png')",
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [],
}
