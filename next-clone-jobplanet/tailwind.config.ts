import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        colors: {
            'gray-3': '#323438',
            'gray-2': '#85878C',
            'gray-1': '#E5E6E9',
            white: '#ffffff',
            green: '#00C362',
            blue: '#2196F3',
        },
        extend: {
            boxShadow: {
                gray: '0px 1px 4px 0px rgba(30, 40, 58, 0.04)',
            },
            maxWidth: {
                '238.5': '59.625rem',
            },
            lineHeight: {
                '150%': '1.5',
            },
            borderRadius: {
                '2sm': '0.25rem',
            },
        },
    },
    plugins: [],
};
export default config;
