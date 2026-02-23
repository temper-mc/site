import type {Metadata} from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Main from '@/components/layout/Main';
import FaqAccordion from '@/components/FAQAccordion';
import {FaqCategory, FaqItem} from '@/types/faq';
import {IoMdCog} from "react-icons/io";
import {GiFocusedLightning} from "react-icons/gi";

export const metadata: Metadata = {
	title: 'FAQ',
	description: 'Frequently asked questions.',
};

// ─── FAQ data ─────────────────────────────────────────────────

const FAQ_CATEGORIES: FaqCategory[] = [
	{
		label: 'Lorem ipsum dolor',
		gradient: 'linear-gradient(to right, var(--color-info), var(--color-primary))',
		icon: <IoMdCog/>,
		items: [
			{
				question: 'Lorem ipsum dolor sit amet?',
				answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget justo sagittis, suscipit massa nec, varius dolor. ',
			},
			{
				question: 'Lorem ipsum dolor sit amet?',
				answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget justo sagittis, suscipit massa nec, varius dolor. ',
			},
			{
				question: 'Lorem ipsum dolor sit amet?',
				answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget justo sagittis, suscipit massa nec, varius dolor. ',
			},
			{
				question: 'Lorem ipsum dolor sit amet?',
				answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget justo sagittis, suscipit massa nec, varius dolor. ',
			},
		] satisfies FaqItem[],
	},
	{
		label: 'Lorem ipsum dolor',
		gradient: 'linear-gradient(to right, var(--color-primary), var(--color-surface))',
		icon: <GiFocusedLightning/>,
		items: [
			{
				question: 'Lorem ipsum dolor sit amet?',
				answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget justo sagittis, suscipit massanec, varius dolor.'

			},
			{
				question: 'Lorem ipsum dolor sit amet?',
				answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget justo sagittis, suscipit massa nec, varius dolor. ',
			},
			{
				question: 'Lorem ipsum dolor sit amet?',
				answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget justo sagittis, suscipit massa nec, varius dolor. ',
			},
			{
				question: 'Lorem ipsum dolor sit amet?',
				answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget justo sagittis, suscipit massa nec, varius dolor. ',
			},
		] satisfies FaqItem[],
	},
];

// ─── Page ─────────────────────────────────────────────────────
export default function FaqPage() {
	const totalQuestions = FAQ_CATEGORIES.reduce((sum, c) => sum + c.items.length, 0);

	return (
		<div className="min-h-screen">
			<Header/>

			<Main>

				{/* ── Hero ── */}
				<section className="mb-16 text-center animate-fade-in">
					<p
						className="inline-block text-sm font-display font-semibold tracking-widest uppercase mb-4 px-4 py-1.5 rounded-full border border-[var(--color-border-hover)]"
						style={{color: 'var(--color-info)'}}
					>
						Quaestiones Frequentes
					</p>
					<h1 className="hero-header mb-4 animate-slide-up">
						Quaestiones frequentius interrogatae
					</h1>
					<p className="text-lg text-text-secondary max-w-xl mx-auto animate-slide-up animate-delay-100">
						{totalQuestions} responsa per {FAQ_CATEGORIES.length} themata. Non invenisti quod quaeris?{' '}
						<a
							href="https://discord.gg/6QPZgUy4sA"
							target="_blank"
							rel="noopener noreferrer"
							className="underline hover:text-primary transition-colors"
						>
							Roga in Discord.
						</a>
					</p>
				</section>


				{/* ── Categories ── */}
				<div className="space-y-12">
					{FAQ_CATEGORIES.map((cat: FaqCategory, ci: number) => (
						<section
							key={cat.label}
							id={cat.label.toLowerCase().replace(/[\s&]+/g, '-')}
							className="scroll-mt-28 animate-slide-up"
							style={{animationDelay: `${ci * 60}ms`}}
						>
							<div className="flex items-center gap-3 mb-5">
								<div className="w-1 h-6 rounded-full shrink-0" style={{background: cat.gradient}}/>
								<h2 className="font-display font-semibold text-xl text-[var(--color-text-primary)] flex items-center gap-2">
									<span>{cat.icon}</span>
									{cat.label}
								</h2>
							</div>

							<FaqAccordion items={cat.items}/>
						</section>
					))}
				</div>

				{/* ── CTA ── */}
				<section
					className="relative overflow-hidden rounded-3xl border border-[var(--color-border-hover)] p-10 text-center mt-16">
					<div
						className="absolute inset-0 -z-10"
						style={{background: 'linear-gradient(135deg, color-mix(in srgb, var(--color-bg-gradient-start) 25%, var(--color-bg-secondary)), color-mix(in srgb, var(--color-bg-gradient-end) 20%, var(--color-bg-secondary)))'}}
					/>
					<div
						className="absolute -top-10 -left-10 w-36 h-36 rounded-full blur-3xl opacity-20 pointer-events-none -z-10"
						style={{background: 'var(--color-secondary)'}}/>
					<div
						className="absolute -bottom-10 -right-10 w-36 h-36 rounded-full blur-3xl opacity-20 pointer-events-none -z-10"
						style={{background: 'var(--color-accent)'}}/>

					<h2 className="text-2xl md:text-3xl font-display font-bold mb-3 text-[var(--color-text-primary)]">
						Still have questions?
					</h2>
					<p className="text-[var(--color-text-secondary)] mb-8 max-w-md mx-auto">
						The community and core team are active on Discord. Drop a message and we'll get back to you.
					</p>
					<div className="flex flex-wrap items-center justify-center gap-4">
						<a href="https://discord.gg/6QPZgUy4sA" target="_blank" rel="noopener noreferrer"
						   className="btn-cta-primary">
							Join Discord
						</a>
						<a href="https://github.com/temper-mc/temper/issues" target="_blank" rel="noopener noreferrer"
						   className="btn-cta-outline">
							Open an issue
						</a>
					</div>
				</section>

			</Main>

			<Footer/>
		</div>
	);
}