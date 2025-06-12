import type { NextConfig } from "next";
const path = require("path");

const nextConfig: NextConfig = {
  /* config options here */
  /*   output: "export", */
  images: {
    unoptimized: true,
    domains: [],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "src/styles")],
  },
  reactStrictMode: true,
};

export default nextConfig;
