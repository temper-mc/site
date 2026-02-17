import type {Metadata} from "next";
import "./globals.css";
import React from "react";
import Head from "next/head";

const SITE_NAME = "Temper MC";
const SITE_URL = "https://temper-mc.com";
const SITE_DESCRIPTION =
	"Temper MC is a Minecraft Server Software running on Rust, optimizing many problems that come with Java";

export const metadata: Metadata = {
	metadataBase: new URL(SITE_URL),
	title: {
		template: `%s | ${SITE_NAME}`,
		default: SITE_NAME,
	},
	description: SITE_DESCRIPTION,
	keywords: [
		"Minecraft",
		"Minecraft Server",
		"Rust",
		"Server",
		"Server Software",
		"Performance",
	],
	authors: [
		{
			name: "Temper MC",
			url: SITE_URL,
		},
	],
	creator: "Temper MC",
	publisher: SITE_NAME,
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-image-preview": "large",
			"max-snippet": -1,
			"max-video-preview": -1,
		},
	},
	alternates: {
		canonical: SITE_URL,
	},
	openGraph: {
		type: "website",
		locale: "en_US",
		url: SITE_URL,
		siteName: SITE_NAME,
		title: SITE_NAME,
		description: SITE_DESCRIPTION,
		images: [
			{
				url: "/og-image.png",
				width: 1200,
				height: 630,
				alt: SITE_NAME,
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: SITE_NAME,
		description: SITE_DESCRIPTION,
		images: ["/og-image.png"],
		creator: "@temper-mc",
	},
	icons: {
		icon: "/favicon.ico",
		shortcut: "/favicon.webp",
		apple: "/favicon.webp",
	},
	category: "technology",
};

export default function RootLayout({
	                                   children,
                                   }: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
		<Head>
			<link rel="preconnect" href="https://fonts.googleapis.com"/>
			<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={""}/>
		</Head>
		<body className="antialiased">
		{children}
		</body>
		</html>
	);
}
