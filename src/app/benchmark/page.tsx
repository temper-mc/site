import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Main from '@/components/layout/Main';
import BenchmarkCharts from '@/components/BenchmarkCharts';
import React from "react";

export const metadata: Metadata = {
	title: 'Benchmarks',
	description: 'Performance benchmarks comparing Temper MC against Vanilla, Paper, and Purpur.',
};

// The Data here, DOES NOT represent actual data and only exists as Demo Data for testing.
const SERVERS: Server[] = [
	{
		key: 'temper',
		label: 'Temper',
		color: '#6366f1',
		start_up_time: 0.15,
		memory_usage: 23.9,
		chunks: 4166,
		cpu: 2.5,
		capacity: 450,
		tps: [
			{ players: 0, tps_value: 20.0 },
			// { players: 10, tps_value: 20.0 },
			{ players: 100, tps_value: 20.0 },
			{ players: 200, tps_value: 20.0 },
			{ players: 500, tps_value: 15.2 },
		],
	},
	{
		key: 'paper',
		label: 'Paper',
		color: '#2b7fff',
		start_up_time: 28.4,
		memory_usage: 1462.5,
		chunks: 121.5,
		cpu: 12.2,
		capacity: 180,
		tps: [
			{ players: 0, tps_value: 20.0 },
			// { players: 10, tps_value: 20.0 },
			{ players: 100, tps_value: 20.0 },
			{ players: 200, tps_value: 15.6 },
			{ players: 200, tps_value: 0.6 },
		],
	},
	{
		key: 'purpur',
		label: 'Purpur',
		color: '#392955',
		start_up_time: 29.0,
		memory_usage: 2105.3,
		chunks: 182,
		cpu: 11.4,
		capacity: 175,
		tps: [
			{ players: 0, tps_value: 20.0 },
			// { players: 10, tps_value: 20.0 },
			{ players: 100, tps_value: 20.0 },
			{ players: 200, tps_value: 10.37 },
			{ players: 500, tps_value: 1.31 },
		],
	},
];

// Summary stats shown in the hero
const HERO_STATS = [
	{ value: '19X', label: 'Times faster chunk generation', sub: 'Than paper' },
	{ value: '<25MB', label: 'Memory usage', sub: 'With 10 online players' },
	{ value: '25X', label: 'TPS under heavy load', sub: '15.2 TPS with 500 players vs 0.6 on Paper' },
	{ value: '0.025s', label: 'Startup Time', sub: 'Without initial chunk generation' },
];

// Test environment details
const TEST_ENV = [
	{ label: 'CPU', value: 'Ryzen 9 7950X3D (16 cores, 32 threads)' },
	{ label: 'RAM', value: '64GB DDR5 (2x32GB Corsair Vengeance)' },
	{ label: 'Storage', value: '2TB NVMe SSD (Crucial P3 Plus)' },
	{ label: 'OS', value: 'Windows 11' },
	{ label: 'Plugins', value: 'Chunky' },
	{ label: 'Java', value: 'openjdk 25.0.2 (Adoptium)' },
	{ label: 'Rust Compiler', value: '1.93.1' },
	{ label: 'Player count benchmarker', value: 'SoulFire 2.5.4' },
];

// ─── Page ─────────────────────────────────────────────────────
export default function BenchmarkPage() {
	return (
		<div className="min-h-screen">
			<Header />
			<Main>

				{/* ── Hero ── */}
				<section className="mb-20 animate-fade-in">
					<div className="max-w-3xl mx-auto text-center mb-14">
						<p
							className="inline-block text-sm font-display font-semibold tracking-widest uppercase mb-4 px-4 py-1.5 rounded-full border border-border-hover"
							style={{ color: 'var(--color-info)' }}
						>
							Performance
						</p>
						<h1 className="hero-header mb-5 animate-slide-up">
							Benchmarks vs Paper and Purpur
						</h1>
						<p className="text-lg text-text-secondary leading-relaxed animate-slide-up animate-delay-100">
							Here's the numbers to back up our claims. We ran Temper MC, Paper, and Purpur through a series of rigorous benchmarks to compare their performance across various metrics. From startup time to memory usage, TPS under load, and chunk generation speed, see how Temper stacks up against the competition.
						</p>
					</div>

					{/* Hero stat cards */}
					<div className="grid grid-cols-2 lg:grid-cols-4 gap-4 animate-slide-up animate-delay-200">
						{HERO_STATS.map((stat) => (
							<div key={stat.label} className="card text-center group">
								<p
									className="font-display font-bold text-4xl md:text-5xl mb-1 group-hover:scale-105 transition-transform duration-300 inline-block"
									style={{ color: 'var(--color-primary)' }}
								>
									{stat.value}
								</p>
								<p className="text-sm font-display font-medium text-text-primary">
									{stat.label}
								</p>
								<p className="text-xs text-text-muted mt-0.5">
									{stat.sub}
								</p>
							</div>
						))}
					</div>
				</section>

				{/* ── Charts (client component) ── */}
				<BenchmarkCharts servers={SERVERS} />

				{/* ── Test environment ── */}
				<section className="mt-16 animate-slide-up">
					<div className="flex items-center gap-3 mb-6">
						<div
							className="w-1 h-6 rounded-full"
							style={{ background: 'linear-gradient(to bottom, var(--color-surface), var(--color-secondary))' }}
						/>
						<h2 className="font-display font-semibold text-xl text-text-primary">
							Test Environment
						</h2>
					</div>

					<div className="card">
						<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
							{TEST_ENV.map((row) => (
								<div
									key={row.label}
									className="flex items-start gap-3 py-2 border-b last:border-0 sm:nth-last-2:border-0"
									style={{ borderColor: 'var(--color-border)' }}
								>
									<span
										className="text-xs font-display font-semibold uppercase tracking-wider w-20 shrink-0 pt-0.5"
										style={{ color: 'var(--color-info)' }}
									>
										{row.label}
									</span>
									<span className="text-sm font-mono text-text-secondary">
										{row.value}
									</span>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* ── Disclaimer ── */}
				<p className="text-xs text-text-muted text-center mt-10 max-w-2xl mx-auto leading-relaxed">
					These benchmarks are very unfair, as Paper and Purpur implement the entire Minecraft server logic in Java, while Temper MC is no-where near feature complete and currently doesn't implement as many features of the Minecraft server as Paper and Purpur, so these numbers should be taken with a grain of salt. However, they do demonstrate the potential of our approach and the significant performance improvements that can be achieved by rethinking how Minecraft servers are built.
					<br />
					Some of the numbers don't look right? Come have a chat in our Discord, it's more than likely that we just haven't remembered to update them in a while. Keep in mind that these benchmarks were taken on a high end machine and your mileage may vary based on your hardware and the specific workload, but we hope they give you a good idea of the performance benefits that Temper MC can offer.
				</p>

			</Main>

			<Footer />
		</div>
	);
}