/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'lmjlpucdyjznsdnewoic.supabase.co',
      },
    ],
  },
  // Re-enable webpack if the user's scripts require it, 
  // though Next.js 15+ usually uses Turbopack or default webpack.
  // The package.json scripts use --webpack, so we keep it compatible.
  webpack: (config) => {
    return config;
  },
};

export default nextConfig;
