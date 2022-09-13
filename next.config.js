// const nextConfig = {
//   reactStrictMode: true,
// }

// module.exports = nextConfig

const withPWA = require('next-pwa');

module.export = withPWA({
    pwa: {
        dest: 'public',
        register: true,
        mode: 'production',
        disable: false,
    },
    reactStrictMode: true,
    images: {
        domains: [
            'placeimg.com', 
            'api.lorem.space', 
            'upload.wikimedia.org',
            'images.pexels.com',
        ],
    },
});

