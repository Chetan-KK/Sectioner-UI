const nextra = require('nextra');

/** @type {import('next').NextConfig} */
const nextConfig = {};

const withNextra = nextra(
    {
        theme: 'nextra-theme-docs',
        themeConfig: './theme.config.tsx'
    }
);

module.exports = withNextra(nextConfig);
