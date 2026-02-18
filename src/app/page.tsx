import type {Metadata} from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Main from '@/components/layout/Main';

export const metadata: Metadata = {
	title: 'Home | Temper MC',
	description: 'Crafting exceptional digital experiences with creativity and passion',
};

export default function Home() {
	return (
		<div className="min-h-screen">
			<Header/>

			<Main>
				{/* Hero Section */}
				<section className="mb-20 animate-fade-in">
					<div className="text-center max-w-4xl mx-auto">
						<h1 className="hero-header mb-6 animate-slide-up" style={{textShadow: 'var(--shadow-xl)'}}>
							Lorem ipsum dolor sit amet
						</h1>
						<p className="text-xl md:text-2xl text-text-secondary mb-8 leading-relaxed animate-slide-up animate-delay-100">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu lorem in risus ultrices
							aliquet vel quis sapien. Nullam vitae sagittis lacus. Nam id ex sit amet nisl porttitor
							fermentum.
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
						<h3 className="font-display font-semibold text-2xl mb-3 text-text-primary group-hover:text-primary transition-colors">
							Ut fringilla lorem leo
						</h3>
						<p className="text-text-muted leading-relaxed">
							Praesent dignissim porta ultrices. Phasellus a ornare nunc, id mollis magna. Donec porttitor
							nisi at luctus molestie.
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
						<h3 className="font-display font-semibold text-2xl mb-3 text-text-primary group-hover:text-primary transition-colors">
							Nunc arcu purus
						</h3>
						<p className="text-text-muted leading-relaxed">
							am malesuada, purus ut porta fringilla, sapien libero venenatis enim, sit amet congue dolor
							dolor et neque.
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
						<h3 className="font-display font-semibold text-2xl mb-3 text-text-primary group-hover:text-surface transition-colors">
							Aliquam maximus justo sit
						</h3>
						<p className="text-text-muted leading-relaxed">
							Nunc gravida libero nulla, nec vulputate sapien ultricies at. Nulla vel imperdiet tellus.
							Nam orci diam, commodo id sapien eu, porta lacinia leo. </p>
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
						<h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-text-primary">
							Want more details?
						</h2>
						<p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-text-secondary">
							Join our Discord community to learn more about our software or even contribute!
						</p>
						<div className="flex flex-wrap items-center justify-center gap-4">
							<button className="btn-cta-primary">Join Discord</button>
							<button className="btn-cta-outline">GitHub</button>
						</div>
					</div>
				</section>
			</Main>

			<Footer/>
		</div>
	);
}