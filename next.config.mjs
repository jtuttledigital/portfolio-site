// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
    staleTimes: { dynamic: 0, static: 0 },
  },
};
export default nextConfig;
