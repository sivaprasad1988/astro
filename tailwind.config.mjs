/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './src/**/*.{astro,html,js,jsx,md,mdx, ts,tsx}',
        './src/components/**/*.{astro,html,js,jsx,md,mdx, ts,tsx}',
    ],
    theme: {
        container: {
            center: true,
            padding: {
                DEFAULT: '0rem',
                sm: '2rem',
                md: 0,
            },
        },
        extend: {
            maxWidth: {
                '3/4': '75%',
            },
            colors: {
                primary: {
                    100: '#EFF0F0',
                    200: '#828281',
                    500: '#21201E',
                    900: '#071312',
                },
                secondary: {
                    100: '#FBDDA4',
                    500: '#FCBA0E',
                },
            },
            fontSize: {
                xs: ['0.75rem', { lineHeight: 1.2 }],
                sm: ['1.125rem', { lineHeight: 1.6 }],
                md: ['2rem', { lineHeight: 1.15, letterSpacing: '-0.022em' }],
                lg: [
                    '2.75rem',
                    { lineHeight: 1.15, letterSpacing: '-0.022em' },
                ],
                xl: ['3.5rem', { lineHeight: 1.15, letterSpacing: '-0.022em' }],
                xxl: [
                    '4.5rem',
                    { lineHeight: 0.95, letterSpacing: '-0.022em' },
                ],
            },
            fontFamily: {
                space: ['var(--font-space-grotesk)'],
                'space-bold': ['var(--font-space-grotesk-bold)'],
                gotham: ['var(--GothamXNarrow-Bold)'],
            },
        },
    },
    plugins: [],
}
