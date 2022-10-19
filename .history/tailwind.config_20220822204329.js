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
            'wh' : 'rgba(255, 255, 255, 0.1)',
            'white' : '#fff',
            'yellowcustom': '#ffc107',
            'graycustom':'#bcc1cd'
        }
    },
    plugins: [],
}