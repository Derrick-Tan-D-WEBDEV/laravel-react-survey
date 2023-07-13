/* @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
    content: ["./src/**/*.{js,ts,jsx,tsx,html}", "./index.html"],
    theme: {
        extend: {},
    },
    plugins: [require("@tailwindcss/forms")],
});
