/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
           
        },
        colors:{
            'wh' : 'rgba(255, 255, 255, 0.75)',
            'wh1' : 'rgba(255, 255, 255, 0.1)',
            'white' : '#fff',
            'yellowcustom': '#ffc107',
            'graycustom':'#bcc1cd',
            'shadowColor': '0px 0px 16px rgb(0 42 61 / 16%)'
        }
    },
    plugins: [],
}