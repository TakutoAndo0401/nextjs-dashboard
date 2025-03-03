"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function TestLayout({
	children,
}: { children: React.ReactNode }) {
	const pathname = usePathname();

	return (
		<>
			<header className="bg-gray-800 p-4 text-white">
				<nav className="flex justify-center space-x-4">
					<Link
						href="/verification"
						className={`px-3 py-2 ${pathname === "/verification" ? "bg-gray-700" : ""}`}
					>
						HOME
					</Link>
					<Link
						href="/verification/sample1"
						className={`px-3 py-2 ${pathname === "/verification/sample1" ? "bg-gray-700" : ""}`}
					>
						Sample1
					</Link>
					<Link
						href="/verification/sample2"
						className={`px-3 py-2 ${pathname === "/verification/sample2" ? "bg-gray-700" : ""}`}
					>
						Sample2
					</Link>
				</nav>
			</header>

			<main className="p-4">{children}</main>
		</>
	);
}
