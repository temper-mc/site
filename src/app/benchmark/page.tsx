import type {Metadata} from 'next';
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
const SERVERS: Server[] =  [
	// {
	// 	key: 'temper',
	// 	label: 'Temper',
	// 	color: '#6366f1',
	// 	start_up_time: 4.2,
	// 	memory_usage: 820,
	// 	chunks: 510,
	// 	cpu: 38,
	// 	capacity: 520,
	// 	tps: [
	// 		{ players: 0,   tps_value: 20.0 },
	// 		{ players: 50,  tps_value: 19.8 },
	// 		{ players: 100, tps_value: 19.5 },
	// 		{ players: 150, tps_value: 19.1 },
	// 		{ players: 200, tps_value: 18.6 },
	// 		{ players: 250, tps_value: 18.0 },
	// 		{ players: 300, tps_value: 17.2 },
	// 	],
	// },
	// {
	// 	key: 'paper',
	// 	label: 'Paper',
	// 	color: '#10b981',
	// 	start_up_time: 7.1,
	// 	memory_usage: 1050,
	// 	chunks: 380,
	// 	cpu: 55,
	// 	capacity: 380,
	// 	tps: [
	// 		{ players: 0,   tps_value: 20.0 },
	// 		{ players: 50,  tps_value: 19.5 },
	// 		{ players: 100, tps_value: 18.8 },
	// 		{ players: 150, tps_value: 17.9 },
	// 		{ players: 200, tps_value: 16.5 },
	// 		{ players: 250, tps_value: 14.8 },
	// 		{ players: 300, tps_value: 12.1 },
	// 	],
	// },
	// {
	// 	key: 'spigot',
	// 	label: 'Spigot',
	// 	color: '#f59e0b',
	// 	start_up_time: 9.4,
	// 	memory_usage: 1280,
	// 	chunks: 290,
	// 	cpu: 72,
	// 	capacity: 220,
	// 	tps: [
	// 		{ players: 0,   tps_value: 20.0 },
	// 		{ players: 50,  tps_value: 19.0 },
	// 		{ players: 100, tps_value: 17.2 },
	// 		{ players: 150, tps_value: 14.5 },
	// 		{ players: 200, tps_value: 11.0 },
	// 		{ players: 250, tps_value: 7.8  },
	// 		{ players: 300, tps_value: 4.2  },
	// 	],
	// },
	// {
	// 	key: 'vanilla',
	// 	label: 'Vanilla',
	// 	color: '#ef4444',
	// 	start_up_time: 14.8,
	// 	memory_usage: 1420,
	// 	chunks: 180,
	// 	cpu: 91,
	// 	capacity: 120,
	// 	tps: [
	// 		{ players: 0,   tps_value: 20.0 },
	// 		{ players: 50,  tps_value: 17.5 },
	// 		{ players: 100, tps_value: 13.2 },
	// 		{ players: 150, tps_value: 8.9  },
	// 		{ players: 200, tps_value: 5.1  },
	// 		{ players: 250, tps_value: 2.4  },
	// 		{ players: 300, tps_value: 1.0  },
	// 	],
	// },
];

// Summary stats shown in the hero
const HERO_STATS = [
	{value: 'XXX', label: 'Speciess congregabo', sub: 'Speciess congregabo'},
	{value: 'XXX', label: 'Gloss manducare', sub: 'Speciess congregabo'},
	{value: 'XXX', label: 'Pess cadunt', sub: 'Speciess congregabo'},
	{value: 'XXX', label: 'Boreass experimentum', sub: 'Speciess congregabo'},
];

// Test environment details
const TEST_ENV = [
	{label: 'CPU', value: 'XXX'},
	{label: 'RAM', value: 'XXX'},
	{label: 'Storage', value: 'XXX'},
	{label: 'OS', value: 'XXX'},
	{label: 'World', value: 'XXX'},
	{label: 'Plugins', value: 'XXX'},
	{label: 'Java', value: 'XXX'},
	{label: 'Temper', value: 'XXX'},
];

// ─── Page ─────────────────────────────────────────────────────
export default function BenchmarkPage() {
	return (
		<div className="min-h-screen">
			<Header/>
			<Main>

				{/* ── Hero ── */}
				<section className="mb-20 animate-fade-in">
					<div className="max-w-3xl mx-auto text-center mb-14">
						<p
							className="inline-block text-sm font-display font-semibold tracking-widest uppercase mb-4 px-4 py-1.5 rounded-full border border-border-hover"
							style={{color: 'var(--color-info)'}}
						>
							Performance
						</p>
						<h1 className="hero-header mb-5 animate-slide-up">
							Lorem ipsum
						</h1>
						<p className="text-lg text-text-secondary leading-relaxed animate-slide-up animate-delay-100">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget justo sagittis, suscipit
							massa nec, varius dolor. Morbi lacinia ante id massa interdum feugiat. Proin vitae lobortis
							nulla.
						</p>
					</div>

					{/* Hero stat cards */}
					<div className="grid grid-cols-2 lg:grid-cols-4 gap-4 animate-slide-up animate-delay-200">
						{HERO_STATS.map((stat) => (
							<div key={stat.label} className="card text-center group">
								<p
									className="font-display font-bold text-4xl md:text-5xl mb-1 group-hover:scale-105 transition-transform duration-300 inline-block"
									style={{color: 'var(--color-primary)'}}
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
				<BenchmarkCharts servers={SERVERS}/>

				{/* ── Test environment ── */}
				<section className="mt-16 animate-slide-up">
					<div className="flex items-center gap-3 mb-6">
						<div
							className="w-1 h-6 rounded-full"
							style={{background: 'linear-gradient(to bottom, var(--color-surface), var(--color-secondary))'}}
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
									style={{borderColor: 'var(--color-border)'}}
								>
									<span
										className="text-xs font-display font-semibold uppercase tracking-wider w-20 shrink-0 pt-0.5"
										style={{color: 'var(--color-info)'}}
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
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget justo sagittis, suscipit massa nec,
					varius dolor.
				</p>

			</Main>

			<Footer/>
		</div>
	);
}