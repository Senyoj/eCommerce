// tailwind.config.js

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#17193B',
        secondary: {
          100: '#EEB28D', 
          200: '#EC5937', 
        },

        less :'#CCCCCC',
        textColor:'#333333',
        stroke:'#E99517'
       
      },
    },
  },
  plugins: [],
};
