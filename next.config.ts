import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* config options here */
	images: {
		domains: ["airnfts.s3.amazonaws.com","source.unsplash.com","images.chesscomfiles.com", "images.pexels.com"], // Added Pexels domain
	},
};

export default nextConfig;