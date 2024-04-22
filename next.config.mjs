import nextra from 'nextra'

/** @type {import('next').NextConfig} */
const nextConfig = {};

const withNextra = nextra(
    {
        theme: 'nextra-theme-docs',
        themeConfig: './theme.config.tsx',
        unstable_flexsearch: true,
        unstable_staticImage: true,
    }
);

export default withNextra(nextConfig);
