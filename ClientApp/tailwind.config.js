/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}", "../Views/**/*.{razor,cshtml}"],
    corePlugins: {
        preflight: true
    },
    theme: {
        extend: {
            colors: {
                "international-orange": '#FF4F00',
                primary: {
                    DEFAULT: '#FF4F00'
                }
            },
            screens: {
                sm: "640px",
                md: "768px",
                lg: "1024px",
                "2xl": "1536px"
            }
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/line-clamp')
    ],
};
