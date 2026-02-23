import type {Metadata} from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Main from '@/components/layout/Main';
import SectionLabel from "@/components/gettingstarted/SectionLabel";
import Divider from "@/components/gettingstarted/Divider";
import SectionHeading from "@/components/gettingstarted/SectionHeading";
import Step from "@/components/gettingstarted/Step";
import CodeBlock from "@/components/gettingstarted/CodeBlock";
import Note from "@/components/gettingstarted/Note";

export const metadata: Metadata = {
	title: 'Getting Started',
	description: 'Getting started with Temper MC. Install, configure, and run your server in minutes.',
};


// ─── Page ─────────────────────────────────────────────────────
export default function GettingStartedPage() {
	return (
		<div className="min-h-screen">
			<Header/>

			<Main>

				{/* ── Hero ── */}
				<section className="mb-20 animate-fade-in">
					<div className="max-w-3xl mx-auto text-center">
						<SectionLabel>Documentation</SectionLabel>
						<h1 className="hero-header mb-5 animate-slide-up">
							Lorem ipsum dolor sit amet
						</h1>
						<p className="text-lg text-[var(--color-text-secondary)] leading-relaxed animate-slide-up animate-delay-100">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget justo sagittis, suscipit
							massa nec, varius dolor.
						</p>

						{/* Quick jump */}
						<div
							className="flex flex-wrap items-center justify-center gap-3 mt-8 animate-slide-up animate-delay-200">
							<a
								href="#user"
								className="btn-secondary text-sm"
							>
								I'm a server owner
							</a>
							<a
								href="#dev"
								className="btn-primary text-sm"
							>
								I'm a developer
							</a>
						</div>
					</div>
				</section>

				{/* ── User guide ── */}
				<section id="user" className="mb-20 scroll-mt-28 animate-slide-up">
					<div className="flex items-center gap-3 mb-8">
						<Divider gradient="linear-gradient(to bottom, var(--color-surface), var(--color-secondary))"/>
						<div>
							<SectionLabel>Lorem ipsum</SectionLabel>
							<SectionHeading>Lorem ipsum</SectionHeading>
							<p className="text-[var(--color-text-muted)] text-sm">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							</p>
						</div>
					</div>

					<div className="card p-6 md:p-8">
						<Step number={0} title="Bad News">
							<p className="text-sm text-[var(--color-text-secondary)]">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/>
								Sed eget justo sagittis, suscipit massa nec, varius dolor.
							</p>
						</Step>
					</div>
				</section>

				{/* ── Dev guide ── */}
				<section id="dev" className="mb-16 scroll-mt-28 animate-slide-up animate-delay-100">
					<div className="flex items-center gap-3 mb-8">
						<Divider gradient="linear-gradient(to bottom, var(--color-info), var(--color-primary))"/>
						<div>
							<SectionLabel>Lorem ipsum</SectionLabel>
							<SectionHeading>Lorem ipsum</SectionHeading>
							<p className="text-[var(--color-text-muted)] text-sm">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							</p>
						</div>
					</div>

					<div className="card p-6 md:p-8">
						<Step number={1} title="Install prerequisites">
							<p className="text-sm text-text-secondary">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. <code
								className="font-mono text-xs bg-black/10 px-1 rounded">Lorem ipsum</code>:
							</p>
							<CodeBlock
								code="Lorem ipsum dolor sit amet, consectetur adipiscing elit. \nSed eget justo sagittis, suscipit massa nec, varius dolor."
								language="bash"
								comment="install rustup"
							/>
						</Step>

						<Step number={2} title="Clone the repository">
							<CodeBlock
								code="Lorem ipsum dolor sit amet, consectetur adipiscing elit. \nSed eget justo sagittis, suscipit massa nec, varius dolor."
								language="bash"
							/>
						</Step>

						<Step number={3} title="Build from source">
							<p className="text-sm text-[var(--color-text-secondary)]">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							</p>
							<CodeBlock
								code="Lorem ipsum"
								language="bash"
								comment="debug"
							/>
							<p className="text-sm text-[var(--color-text-secondary)]">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							</p>
							<CodeBlock
								code="Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
								language="bash"
								comment="release"
							/>
							<Note type="info">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. \nSed eget justo sagittis,
								suscipit massa nec, varius dolor. Morbi lacinia ante id massa interdum feugiat. Proin
								vitae lobortis nulla.
							</Note>
						</Step>

						<Step number={4} title="Run the dev server">
							<CodeBlock
								code="Lorem ipsum dolor sit amet"
								language="bash"
							/>
						</Step>

						<Step number={6} title="Open a pull request">
							<p className="text-sm text-text-secondary">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							</p>
							<CodeBlock
								code="Lorem ipsum dolor sit amet, consectetur adipiscing elit.\nSed eget justo sagittis, suscipit massa nec, varius dolor.\nMorbi lacinia ante id massa interdum feugiat.\nProin vitae lobortis nulla."
								language="bash"
								comment="CI checks"
							/>
							<p className="text-sm text-text-secondary">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit
							</p>
							<Note type="tip">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget justo sagittis,
								suscipit massa nec, varius dolor.
							</Note>
						</Step>
					</div>
				</section>

				{/* ── Need help CTA ── */}
				<section
					className="relative overflow-hidden rounded-3xl border border-[var(--color-border-hover)] p-10 text-center">
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
						Stuck? We've got you.
					</h2>
					<p className="text-[var(--color-text-secondary)] mb-8 max-w-md mx-auto">
						Ask in Discord, open a GitHub issue, or browse the full documentation.
					</p>
					<div className="flex flex-wrap items-center justify-center gap-4">
						<a
							href="https://discord.gg/6QPZgUy4sA"
							target="_blank"
							rel="noopener noreferrer"
							className="btn-cta-primary"
						>
							Ask on Discord
						</a>
						<a
							href="https://github.com/temper-mc/temper/issues"
							target="_blank"
							rel="noopener noreferrer"
							className="btn-cta-outline"
						>
							Open an issue
						</a>
					</div>
				</section>

			</Main>

			<Footer/>
		</div>
	);
}