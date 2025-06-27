import type { NextConfig } from "next";


const nextConfig: NextConfig = {
  webpack(config) {
    // Find the existing rule for SVG files
    const fileLoaderRule = config.module.rules.find((rule: any) =>
      rule.test?.test?.('.svg')
    );

    // Modify it to ignore .svg
    fileLoaderRule.exclude = /\.svg$/;

    // Add a new rule for importing SVG as React component
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};

export default nextConfig;
