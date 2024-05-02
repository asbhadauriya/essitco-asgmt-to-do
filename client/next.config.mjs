/** @type {import('next').NextConfig} */
const nextConfig = {
    devServer: {
        // Proxy requests
        proxy: {
          '/api': {
            target: 'http://localhost:3008', // Your API server address
            pathRewrite: { '^/api': '' }, // Remove '/api' from request path
            changeOrigin: true,
          },
        },
      },
};

export default nextConfig;
