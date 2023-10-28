import { join } from 'path';

// 1. Import the Skeleton plugin
import { skeleton } from '@skeletonlabs/tw-plugin';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './src/**/*.{html,js,svelte,ts}',
        'node_modules/preline/dist/*.js',
        join(require.resolve(
                '@skeletonlabs/skeleton'),
            '../**/*.{html,js,svelte,ts}'
        )
    ],

    theme: {

        extend: {
            animation: {
                'infinite-scroll': 'infinite-scroll 45s linear infinite',
                loader: 'loader 0.6s infinite alternate',
            },
            keyframes: {
                'infinite-scroll': {
                    from: { transform: 'translateX(0)' },
                    to: { transform: 'translateX(-100%)' },
                },
                loader: {
                    to: {
                        opacity: 0.1,
                        transform: 'translate3d(0, -1rem, 0)',
                    },
                },
            },
            "colors": {
                "jip": {
                    50: "#EEF9FB",
                    100: "#DDF3F8",
                    200: "#BCE6F1",
                    300: "#96D8E8",
                    400: "#74CBE1",
                    500: "#53C0DA",
                    600: "#2AA6C5",
                    700: "#207C93",
                    800: "#165565",
                    900: "#0B2A32",
                    950: "#051519"
                }
            }
        }
    },

    plugins: [
        require('preline/plugin'),
        require("daisyui"),

        skeleton
    ]
};
