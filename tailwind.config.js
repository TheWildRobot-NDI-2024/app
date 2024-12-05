const {
    iconsPlugin,
    getIconCollections
} = require('@egoist/tailwindcss-icons');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js,css}'],
    theme: {
        extend: {}
    },
    plugins: [
        iconsPlugin({
            collections: getIconCollections(['heroicons'])
        })
    ]
};
