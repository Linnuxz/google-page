/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            boxShadow: {
                box: "0 1px 6px rgba(32, 33, 36, .28)",
                buttonbox: "0 1px 1px rgba(0,0,0,.1)",
            },
        },
    },
    plugins: [],
};
