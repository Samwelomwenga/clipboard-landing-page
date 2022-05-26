module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    
    extend: {
      fontfamily:{
        primary: ['BaiJamjuree']
      },
      colors:{
'primary-strong-cyan' :'hsl(171, 66%, 44%)',
'primary-light-blue':'hsl(233, 100%, 69%)',
'neutral-dark-grayish-blue':'hsl(210, 10%, 33%)',
'neutral-grayish-blue':'hsl(201, 11%, 66%)',
      },
      screens:{
        mm:'375px',
      },
    },
  },
  variants:{
    fill: ['hover','focus'],
  },
  plugins: [],
}


