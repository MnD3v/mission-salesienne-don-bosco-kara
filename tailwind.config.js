/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#003f6b',
                    light: '#005baa',
                    dark: '#002a4d',
                },
                secondary: {
                    DEFAULT: '#ffd700',
                    dark: '#e6c200',
                },
                accent: '#0072ce',
                danger: '#b71c1c',
            },
            fontFamily: {
                sans: ['Google Sans', 'sans-serif'],
                serif: ['Playfair Display', 'serif'],
            },
        },
    },
    plugins: [],
}
