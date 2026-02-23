import type {Metadata} from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Main from '@/components/layout/Main';
import BenchmarkCharts from '@/components/BenchmarkCharts';

export const metadata: Metadata = {
	title: 'Benchmarks',
	description: 'Performance benchmarks comparing Temper MC against Vanilla, Paper, and Purpur.',
};

const SERVERS: Server[] = []

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