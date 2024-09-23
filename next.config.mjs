/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
    trailingSlash: true,
    reactStrictMode: false,
    modularizeImports: {
        '@mui/material': {
            transform: '@mui/material/{{member}}',
        },
        '@mui/lab': {
            transform: '@mui/lab/{{member}}',
        },
    },
    webpack(config) {
        // config.module.rules.push({
        //   test: /\.node/,
        //   use: ['raw-loader'],
        // });
        config.resolve.alias.canvas = false;
        config.resolve.alias.encoding = false;
        return config;
    },
    output: 'standalone',
    experimental: {
        serverActions: true,
        appDir: true
    }
};

export default nextConfig;
