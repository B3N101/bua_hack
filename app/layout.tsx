import "./globals.css";

export const metadata = {
	title: "HACK BUA",
	description:
		"BUA Hackathon project by Ben Feuer, Patrick Lu, and Tem Taepaisitphongse",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className="bg-white text-black dark:bg-stone-950 dark:text-white">
				{children}
			</body>
		</html>
	);
}
