import type { Metadata } from "next";
import "./globals.css";
import Nav from "./components/Nav";
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
				<main className="min-h-screen">
					<Nav />
					<Providers>{children}</Providers>
				</main>
			</body>
		</html>
	);
}
