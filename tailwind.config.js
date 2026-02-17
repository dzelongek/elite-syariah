/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./*.{js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {
            colors: {
                emerald: {
                    900: '#064E3B',
                },
                amber: {
                    600: '#D97706',
                },
                gray: {
                    50: '#F9FAFB',
                    100: '#F3F4F6',
                }
            },
            fontFamily: {
                montserrat: ['Montserrat', 'sans-serif'],
                lato: ['Lato', 'sans-serif'],
            }
        },
    },
    plugins: [],
}
