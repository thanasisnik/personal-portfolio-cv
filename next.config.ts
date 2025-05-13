import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  env: {
        HUGGINGFACE_API_TOKEN: process.env.HUGGINGFACE_API_TOKEN,
    }
};

export default nextConfig;
