import type {Metadata} from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Main from '@/components/layout/Main';

export const metadata: Metadata = {
	title: 'Home', description: 'Crafting exceptional digital experiences with creativity and passion',
};

export default function Home() {
	return (<div className="min-h-screen">
			<Header/>

			<Main>
				{/* Hero Section */}
				<section className="mb-20 animate-fade-in">
					<div className="text-center max-w-4xl mx-auto">
						<h1 className="hero-header mb-6 animate-slide-up" style={{textShadow: 'var(--shadow-xl)'}}>
							A stupidly fast Minecraft server, hand-crafted in Rust.
						</h1>
						<p className="text-xl md:text-2xl  mb-8 leading-relaxed animate-slide-up animate-delay-100">
							Combining cutting-edge performance with a vibrant community, we push the absolute limits of
							what a Minecraft server can be. Join us on this exciting journey and experience the future
							of Minecraft hosting today!
						</p>
						<div
							className="flex flex-wrap items-center justify-center gap-4 animate-slide-up animate-delay-200">
							<a href="/getting-started">
								<button className="btn-primary">Install Now</button>
							</a>
							<a href="https://docs.temper-mc.com">
								<button className="btn-secondary">Documentation</button>
							</a>
						</div>
					</div>
				</section>

				{/* Feature Cards */}
				<section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">

					{/* Card 1 — Lightning Fast */}
					<div className="card group cursor-pointer animate-slide-up">
						<div
							className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300"
							style={{background: 'linear-gradient(to bottom right, var(--color-accent), var(--color-primary))'}}
						>
							<svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
								      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
							</svg>
						</div>
						<h3 className="font-display font-semibold text-2xl mb-3 text-primary group-hover:text-primary transition-colors">
							Modern
						</h3>
						<p className="text-muted leading-relaxed">
							Temper uses Rust&#39;s advanced features and up to date design patterns to deliver a
							lighting fast Minecraft server that leaves the competition in the dust.
						</p>
					</div>

					{/* Card 2 — Easy to Set up */}
					<div className="card group cursor-pointer animate-slide-up animate-delay-100">
						<div
							className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300"
							style={{background: 'linear-gradient(to bottom right, var(--color-primary), var(--color-surface))'}}
						>
							<svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
								      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
							</svg>
						</div>
						<h3 className="font-display font-semibold text-2xl mb-3 text-primary group-hover:text-primary transition-colors">
							Quality code
						</h3>
						<p className="text-muted leading-relaxed">
							No decompiled Java porting, AI slop or barely functioning hacks, just clean, well-structured
							Rust code that is easy to read, understand and modify.
						</p>
					</div>

					{/* Card 3 — Ahead of Others */}
					<div className="card group cursor-pointer animate-slide-up animate-delay-200">
						<div
							className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300"
							style={{background: 'linear-gradient(to bottom right, var(--color-surface), var(--color-secondary))'}}
						>
							<svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
								      d="M13 10V3L4 14h7v7l9-11h-7z"/>
							</svg>
						</div>
						<h3 className="font-display font-semibold text-2xl mb-3 text-primary group-hover:text-surface transition-colors">
							Unreasonably Fast
						</h3>
						<p className="text-muted leading-relaxed">
							Using modern techniques such as ECS architecture, async networking, massive parallelism and
							more, we push the limits of performance to deliver an unreasonably fast Minecraft server
							that can handle even the most demanding workloads with ease.
						</p>
					</div>
				</section>

				{/* CTA Section */}
				<section className="relative overflow-hidden rounded-3xl border border-border-hover p-12 text-center">

					{/* Subtle tinted background — low opacity so text always reads cleanly */}
					<div
						className="absolute inset-0 -z-10"
						style={{background: 'linear-gradient(135deg, color-mix(in srgb, var(--color-bg-gradient-start) 25%, var(--color-bg-secondary)), color-mix(in srgb, var(--color-bg-gradient-end) 20%, var(--color-bg-secondary)))'}}
					/>

					{/* Soft radial glow at top — very subtle */}
					<div
						className="absolute inset-0 -z-10 pointer-events-none"
						style={{background: 'radial-gradient(ellipse at 50% -20%, color-mix(in srgb, var(--color-info) 20%, transparent), transparent 65%)'}}
					/>

					{/* Decorative corner orbs */}
					<div
						className="absolute -top-12 -left-12 w-40 h-40 rounded-full blur-3xl opacity-20 pointer-events-none -z-10"
						style={{background: 'var(--color-secondary)'}}
					/>
					<div
						className="absolute -bottom-12 -right-12 w-40 h-40 rounded-full blur-3xl opacity-20 pointer-events-none -z-10"
						style={{background: 'var(--color-accent)'}}
					/>

					<div className="relative">
						<h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-primary">
							Want more details?
						</h2>
						<p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-secondary">
							Join our Discord community to learn more about our software or even contribute!
						</p>
						<div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
							<a
								href="https://discord.gg/6QPZgUy4sA"
								target="_blank"
								rel="noopener noreferrer"
								className="btn-cta-primary w-full sm:w-auto"
							>
								Join the Discord
							</a>
							<a
								href="https://github.com/temper-mc/temper"
								target="_blank"
								rel="noopener noreferrer"
								className="btn-cta-outline w-full sm:w-auto"
							>
								View on GitHub
							</a>
						</div>
					</div>
				</section>
			</Main>

			<Footer/>
		</div>);
}