/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.html'
  ],
  theme: {
    extend: {
      fontFamily:{
        'sans':"'Solano', Arial, ssans-serif",
        'Zizou':'Zizou-Regular',
        'Public-Sans': 'Public-Sans'
      },
      colors:{
        'fap-background':'#F5F5F5',
        'fap-neutral':'#d9d9d9',
        'fap-base':'#191919',
        'fap-red':'#e50a17',
        'fap-blue':'#35158c',
        'fap-blue-dark':'#270b73',
        'fap-blue-light':'#bfe8ff'

        // 'fap-primary':'#35158c',
        // 'fap-blue':'#270b73',
        // 'fap-main':'#e50a17',
        // 'fap-main-bold':'#b70812',
        // 'fap-secondary':'#191919',   
        // 'fap-green':'#9de7d6',
        // 'fap-silver':'#f5f6fa',
        // 'fap-gray':'#f2f2f2'          
      },
      width:{
        '25':'100px'
      }
    },
  },
  plugins: [],
}

