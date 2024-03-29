/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'blog.cap.devink.site',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

export default nextConfig
