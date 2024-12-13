import type { Metadata } from 'next';
import './globals.css';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';

const geistSans = GeistSans;
const geistMono = GeistMono;

export const metadata: Metadata = {
	title: 'Spot 2 Smoke',
	description:
		'Outdoor spots around the world handpicked by the internet that are perfect for a smoke break.',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				{children}
			</body>
		</html>
	);
}
