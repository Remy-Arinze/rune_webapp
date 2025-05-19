import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
	title: "Play Rune",
	description:
		"Play Rune – A blockchain-powered strategy game with real rewards.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`antialiased`}>
					
					<div className="mt-[6%]">
					<Providers>{children}</Providers>

					</div>
			</body>
		</html>
	);
}
