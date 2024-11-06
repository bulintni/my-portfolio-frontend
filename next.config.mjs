/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "dist",
  basePath: '/<my-portfolio-frontend>',
  images: {
    unoptimized: true,
  }
};

export default nextConfig;
