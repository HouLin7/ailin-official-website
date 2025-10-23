import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true }, // ✅ 禁用 next/image 优化，否则报错
  reactStrictMode: true,
  distDir: "build", // 可选，自定义输出目录
  trailingSlash: true // 可选，生成 /index.html 结构，方便 nginx
};

export default nextConfig;
