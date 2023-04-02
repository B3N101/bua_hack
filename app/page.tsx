import Image from "next/image";
import { Inter } from "next/font/google";
import {
	LoginButton,
	RegisterButton,
	LogoutButton,
	ProfileButton,
} from "@/components/authButtons";

import { authOptions } from "./api/auth/[...nextauth]/route";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<main
			style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				height: "70vh",
			}}>
			<div>
				<LoginButton />
				<RegisterButton />
				<LogoutButton />
				<ProfileButton />
			</div>
		</main>
	);
}
