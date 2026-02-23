import type {Metadata} from 'next';
import Image from 'next/image';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Main from '@/components/layout/Main';
import React from "react";

export const metadata: Metadata = {
	title: 'About Us',
	description: 'Learn about the team and mission behind Temper MC — Rust-powered Minecraft server software.',
};

// ─── Config ──────────────────────────────────────────────────
const REPO_OWNER = 'temper-mc';
const REPO_NAME = 'temper';

// ─── Types ───────────────────────────────────────────────────
interface GitHubContributor {
	login: string;
	avatar_url: string;
	html_url: string;
	contributions: number;
	type: string;
}

// ─── Data fetch (runs at build time / ISR) ────────────────────
async function getContributors(): Promise<GitHubContributor[]> {
	try {
		const res = await fetch(
			`https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contributors?anon=false`,
			{
				headers: {
					Accept: 'application/vnd.github+json',
				},
				next: {revalidate: 3600},
			}
		);
		if (!res.ok) throw new Error(`GitHub API ${res.status}`);
		const data: GitHubContributor[] = await res.json();
		return data.filter((c) => c.type !== 'Bot');
	} catch (err) {
		console.error('Failed to fetch contributors:', err);
		return [];
	}
}

// ─── Static data ─────────────────────────────────────────────
const stats = [
	{value: 'XXX', label: 'Aliquam faucibus'},
	{value: 'XXX', label: 'Quisque hendrerit ex'},
	{value: 'XXX', label: 'Etiam venenatis'},
	{value: 'XXX', label: 'In ultrices'},
];

const techStack = [
	{name: 'Aliquam', desc: 'Sed eget dolor sed mauris luctus faucibus.'},
	{name: 'Quisque', desc: 'Fusce efficitur ipsum lectus, ac finibus felis pulvinar ac.'},
	{name: 'Phasellus', desc: 'Vestibulum tincidunt quam ac risus blandit rutrum.'},
	{name: 'Donec', desc: 'Vestibulum pretium sagittis lectus ut porttitor.'},
];

// ─── Page ─────────────────────────────────────────────────────
export default async function AboutPage() {
	const contributors = await getContributors();

	return (
		<div className="min-h-screen">
			<Header/>

			<Main>

				{/* ── Hero ── */}
				<section className="mb-24 animate-fade-in">
					<div className="max-w-3xl mx-auto text-center">
						<p
							className="inline-block text-sm font-display font-semibold tracking-widest uppercase mb-4 px-4 py-1.5 rounded-full border border-border-hover"
							style={{color: 'var(--color-info)'}}
						>
							Our Story
						</p>
						<h1 className="hero-header mb-6 animate-slide-up">
							Lorem ipsum dolor sit amet, <br/>consectetur adipiscing elit.
						</h1>
						<p className="text-xl text-text-secondary leading-relaxed animate-slide-up animate-delay-100">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget justo sagittis, suscipit
							massa nec, varius dolor. Morbi lacinia ante id massa interdum feugiat.
						</p>
					</div>
				</section>

				{/* ── Stats ── */}
				<section className="mb-24 animate-slide-up animate-delay-100">
					<div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
						{stats.map((stat) => (
							<div key={stat.label} className="card text-center group">
								<p
									className="font-display font-bold text-4xl md:text-5xl mb-1 group-hover:scale-105 transition-transform duration-300 inline-block"
									style={{color: 'var(--color-primary)'}}
								>
									{stat.value}
								</p>
								<p className="text-sm text-text-muted font-display">
									{stat.label}
								</p>
							</div>
						))}
					</div>
				</section>

				{/* ── Mission ── */}
				<section className="mb-24">
					<div
						className="relative overflow-hidden rounded-3xl p-10 md:p-16"
						style={{background: 'linear-gradient(135deg, color-mix(in srgb, var(--color-bg-gradient-start) 20%, var(--color-bg-secondary)), color-mix(in srgb, var(--color-bg-gradient-end) 15%, var(--color-bg-secondary)))'}}
					>
						<div
							className="absolute -top-16 -right-16 w-48 h-48 rounded-full blur-3xl opacity-20 pointer-events-none"
							style={{background: 'var(--color-accent)'}}/>
						<div
							className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full blur-3xl opacity-20 pointer-events-none"
							style={{background: 'var(--color-surface)'}}/>

						<div className="relative max-w-2xl">
							<p className="text-sm font-display font-semibold tracking-widest uppercase mb-4"
							   style={{color: 'var(--color-info)'}}>
								Our Mission
							</p>
							<blockquote
								className="text-2xl md:text-3xl font-display font-semibold leading-snug text-text-primary mb-6">
								"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget justo sagittis,
								suscipit massa nec, varius dolor."
							</blockquote>
							<p className="text-text-secondary leading-relaxed">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget justo sagittis,
								suscipit massa nec, varius dolor. Morbi lacinia ante id massa interdum feugiat. Proin
								vitae lobortis nulla. In hac habitasse platea dictumst.
							</p>
						</div>
					</div>
				</section>

				{/* ── Tech Stack ── */}
				<section className="mb-24">
					<div className="text-center mb-12">
						<p className="text-sm font-display font-semibold tracking-widest uppercase mb-3"
						   style={{color: 'var(--color-info)'}}>
							Under the hood
						</p>
						<h2 className="font-display font-bold text-text-primary">
							How it's built
						</h2>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
						{techStack.map((tech, i) => (
							<div
								key={tech.name}
								className="card group flex items-start gap-4 animate-slide-up"
								style={{animationDelay: `${i * 75}ms`}}
							>
								<div
									className="w-10 h-10 rounded-xl shrink-0 flex items-center justify-center text-xs font-mono font-bold text-white group-hover:scale-110 transition-transform duration-300"
									style={{background: 'linear-gradient(135deg, var(--color-info), var(--color-primary))'}}
								>
									{tech.name.slice(0, 2)}
								</div>
								<div>
									<h4 className="font-display font-semibold text-text-primary mb-1">
										{tech.name}
									</h4>
									<p className="text-sm text-text-muted leading-relaxed">
										{tech.desc}
									</p>
								</div>
							</div>
						))}
					</div>
				</section>

				{/* ── Contributors Preview ── */}
				{contributors.length > 0 && (
					<section className="mb-24 animate-slide-up">
						{/* Header row */}
						<div className="flex items-end justify-between mb-8">
							<div>
								<p className="text-sm font-display font-semibold tracking-widest uppercase mb-1"
								   style={{color: 'var(--color-info)'}}>
									Open Source
								</p>
								<h2 className="font-display font-bold text-text-primary">
									Built together by {contributors.length} contributors
								</h2>
							</div>
						</div>

						{/* Contributor tiles */}
						<div
							className="rounded-3xl border border-border p-6"
							style={{backgroundColor: 'var(--color-bg-secondary)'}}
						>
							<div className="flex flex-wrap gap-2 content-center justify-center">
								{contributors.map((c) => (
									<a
										key={c.login}
										href={c.html_url}
										target="_blank"
										rel="noopener noreferrer"
										className="group flex flex-col items-center gap-1.5 w-20 p-2 rounded-2xl border border-transparent hover:border-border-hover transition-all duration-300"
										style={{'--hover-bg': 'color-mix(in srgb, var(--color-info) 5%, transparent)'} as React.CSSProperties}
										title={`${c.login} \n ${c.contributions} contributions`}
									>
										<div className="relative">
											<div
												className="absolute inset-0 rounded-full blur-sm opacity-0 group-hover:opacity-50 transition-opacity duration-300"
												style={{background: 'linear-gradient(135deg, var(--color-info), var(--color-primary))'}}
											/>
											<Image
												src={c.avatar_url}
												alt={c.login}
												width={48}
												height={48}
												className="relative rounded-full w-11 h-11 ring-2 ring-transparent group-hover:ring-border-hover transition-all duration-300"
											/>
										</div>
										<span
											className="text-xs text-text-muted group-hover:text-text-primary truncate w-full text-center transition-colors">
											{c.login}
										</span>
										<span
											className="text-xs font-mono opacity-50 group-hover:opacity-100 transition-opacity"
											style={{color: 'var(--color-info)'}}
										>
											{c.contributions}
										</span>
									</a>
								))}
							</div>
						</div>
					</section>
				)}

				{/* ── Open Source CTA ── */}
				<section
					className="relative overflow-hidden rounded-3xl border border-border-hover p-12 text-center mb-8">
					<div
						className="absolute inset-0 -z-10"
						style={{background: 'linear-gradient(135deg, color-mix(in srgb, var(--color-bg-gradient-start) 25%, var(--color-bg-secondary)), color-mix(in srgb, var(--color-bg-gradient-end) 20%, var(--color-bg-secondary)))'}}
					/>
					<div
						className="absolute -top-12 -left-12 w-40 h-40 rounded-full blur-3xl opacity-20 pointer-events-none -z-10"
						style={{background: 'var(--color-secondary)'}}/>
					<div
						className="absolute -bottom-12 -right-12 w-40 h-40 rounded-full blur-3xl opacity-20 pointer-events-none -z-10"
						style={{background: 'var(--color-accent)'}}/>

					<div className="relative">
						<p className="text-sm font-display font-semibold tracking-widest uppercase mb-4"
						   style={{color: 'var(--color-info)'}}>
							Open Source
						</p>
						<h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-text-primary">
							Want to contribute?
						</h2>
						<p className="text-lg mb-8 max-w-xl mx-auto text-text-secondary">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget justo sagittis, suscipit
							massa nec, varius dolor. Morbi lacinia ante id massa interdum feugiat. Proin vitae lobortis
							nulla. In hac habitasse platea dictumst. Aliquam et pellentesque magna.
						</p>
						<div className="flex flex-wrap items-center justify-center gap-4">
							<a
								href="https://github.com/temper-mc/temper"
								target="_blank"
								rel="noopener noreferrer"
								className="btn-cta-primary"
							>
								View on GitHub
							</a>
							<a
								href="https://discord.gg/6QPZgUy4sA"
								target="_blank"
								rel="noopener noreferrer"
								className="btn-cta-outline"
							>
								Join Discord
							</a>
						</div>
					</div>
				</section>

			</Main>

			<Footer/>
		</div>
	);
}