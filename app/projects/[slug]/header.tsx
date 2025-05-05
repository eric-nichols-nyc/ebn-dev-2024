"use client";
import { ArrowLeft, Eye, Github, Twitter } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { GradientText } from "@/components/GradientText";

type Props = {
	project: {
		url?: string;
		title: string;
		description: string;
		repository?: string;
		tags?: string[];
	};
};
export const Header: React.FC<Props> = ({ project }) => {
	const ref = useRef<HTMLElement>(null);
	const [isIntersecting, setIntersecting] = useState(true);

	const links: { label: string; href: string }[] = [];
	if (project.repository) {
		links.push({
			label: "GitHub",
			href: `https://github.com/${project.repository}`,
		});
	}
	if (project.url) {
		links.push({
			label: "Website",
			href: project.url,
		});
	}
	useEffect(() => {
		if (!ref.current) return;
		const observer = new IntersectionObserver(([entry]) =>
			setIntersecting(entry.isIntersecting),
		);

		observer.observe(ref.current);
		return () => observer.disconnect();
	}, []);

	return (
		<header
			ref={ref}
			className="relative overflow-hidden w-full h-full bg-gradient-to-br from-zinc-900 to-black"
		>
			<div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(0,0,255,.15),rgba(255,255,255,0))]"></div>
			<div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(0,0,255,.15),rgba(255,255,255,0))]"></div>
			<div
				className={`inset-x-0 top-0 z-50 backdrop-blur lg:backdrop-blur-none duration-200 border-b lg:bg-transparent ${
					isIntersecting
						? "bg-zinc-900/0 border-transparent"
						: "bg-white/10  border-zinc-200 lg:border-transparent"
				}`}
			>
				<div className="container flex flex-row-reverse items-center justify-between p-6 mx-auto">
					<div className="flex justify-between gap-8">
						{/* Removed empty span element */}
						<Link target="_blank" href="https://twitter.com/chronark_">
							<Twitter
								className={`w-6 h-6 duration-200 hover:font-medium ${
									isIntersecting
										? "text-zinc-400 hover:text-zinc-100"
										: "text-zinc-600 hover:text-zinc-900"
								}`}
							/>
						</Link>
						<Link target="_blank" href="https://github.com/chronark">
							<Github
								className={`w-6 h-6 duration-200 hover:font-medium ${
									isIntersecting
										? " text-zinc-400 hover:text-zinc-100"
										: "text-zinc-600 hover:text-zinc-900"
								} `}
							/>
						</Link>
					</div>

					<Link
						href="/projects"
						className={`duration-200 hover:font-medium z-10 ${
							isIntersecting
								? " text-zinc-400 hover:text-zinc-100"
								: "text-zinc-600 hover:text-zinc-900"
						} `}
					>
						<ArrowLeft className="w-6 h-6" />
					</Link>
				</div>
			</div>
			<div className="container mx-auto relative isolate overflow-hidden  py-16 sm:py-16">
				<div className="mx-auto max-w-7xl px-6 lg:px-8 text-center flex flex-col items-center">
					<div className="mx-auto max-w-2xl lg:mx-0">
						<GradientText
							colors={["#A07CFE", "#FFFFFF", "#FFBE7B"]}
							className="text-4xl font-bold tracking-tight text-white sm:text-6xl font-display"
						>
							{project.title}
						</GradientText>
						<p className="mt-6 text-lg leading-8 text-zinc-300">
							{project.description}
						</p>
						{project.tags && (
							<div className="mt-4 flex flex-wrap justify-center gap-2">
								{project.tags.map((tag, index) => (
									<span key={index} className="px-3 py-1 text-sm font-medium text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-sm">
										{tag}
									</span>
								))}
							</div>
						)}
					</div>

					<div className="mx-auto mt-8 max-w-2xl lg:mx-0 lg:max-w-none">
						<div className="grid grid-cols-1 gap-y-6 gap-x-8 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
							{links.map((link) => (
								<Link target="_blank" key={link.label} href={link.href}>
									{link.label} <span aria-hidden="true">&rarr;</span>
								</Link>
							))}
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};
