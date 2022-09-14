// const nextConfig = {
//   reactStrictMode: true,
// }

// module.exports = nextConfig

/**
 * @type {import('next').NextConfig}
 */

const withPWA = require('next-pwa')({
    dest: 'public',
    disable: process.env.NODE_ENV === 'development',
    register: true,
    // mode: 'production',
});

const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: [
            'placeimg.com', 
            'api.lorem.space', 
            'upload.wikimedia.org',
            'images.pexels.com',
        ],
    },
};

module.exports = withPWA(nextConfig);

