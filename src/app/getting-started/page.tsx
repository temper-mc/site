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
	title: 'Getting Started | Temper MC',
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
							Get up and running
						</h1>
						<p className="text-lg text-[var(--color-text-secondary)] leading-relaxed animate-slide-up animate-delay-100">
							Whether you're a server owner looking for easy replacement or a developer
							wanting to contribute — this guide has you covered.
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
							<SectionLabel>Server Owners</SectionLabel>
							<SectionHeading>Running Temper MC</SectionHeading>
							<p className="text-[var(--color-text-muted)] text-sm">
								No Rust, no compilation — just download and run.
							</p>
						</div>
					</div>

					<div className="card p-6 md:p-8">
						<Step number={0} title="Bad News">
							<p className="text-sm text-[var(--color-text-secondary)]">
								Currently we sadly don't have pre-built binaries for you. <br/>
								Temper is currently in development and daily we achieve more.
							</p>
						</Step>
					</div>
				</section>

				{/* ── Dev guide ── */}
				<section id="dev" className="mb-16 scroll-mt-28 animate-slide-up animate-delay-100">
					<div className="flex items-center gap-3 mb-8">
						<Divider gradient="linear-gradient(to bottom, var(--color-info), var(--color-primary))"/>
						<div>
							<SectionLabel>Contributors</SectionLabel>
							<SectionHeading>Building from source</SectionHeading>
							<p className="text-[var(--color-text-muted)] text-sm">
								Everything you need to hack on Temper MC locally.
							</p>
						</div>
					</div>

					<div className="card p-6 md:p-8">
						<Step number={1} title="Install prerequisites">
							<p className="text-sm text-text-secondary">
								Temper is written in Rust. Install the toolchain via <code
								className="font-mono text-xs bg-black/10 px-1 rounded">rustup</code>:
							</p>
							<CodeBlock
								code="curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh \nsource $HOME/.cargo/env \nrustup default stable \n"
								language="bash"
								comment="install rustup"
							/>
						</Step>

						<Step number={2} title="Clone the repository">
							<CodeBlock
								code={
									`git clone https://github.com/temper-mc/temper.git
cd temper`}
								language="bash"
							/>
						</Step>

						<Step number={3} title="Build from source">
							<p className="text-sm text-[var(--color-text-secondary)]">
								Debug build (faster compile, slower runtime):
							</p>
							<CodeBlock
								code="cargo build"
								language="bash"
								comment="debug"
							/>
							<p className="text-sm text-[var(--color-text-secondary)]">
								Release build (optimised, what end users get):
							</p>
							<CodeBlock
								code="cargo build --release\n# Binary at: ./target/release/temper"
								language="bash"
								comment="release"
							/>
							<Note type="info">
								First build downloads and compiles all dependencies — expect a few minutes of waiting.
								Subsequent
								builds are incremental and much faster.
							</Note>
						</Step>

						<Step number={4} title="Run the dev server">
							<CodeBlock
								code="cargo run -- start"
								language="bash"
							/>
						</Step>

						<Step number={6} title="Open a pull request">
							<p className="text-sm text-text-secondary">
								Before submitting, make sure everything passes:
							</p>
							<CodeBlock
								code={`cargo fmt --check      # formatting
cargo clippy           # lints
cargo test             # tests`}
								language="bash"
								comment="CI checks"
							/>
							<p className="text-sm text-text-secondary">
								Then push your branch and open a PR against <code
								className="font-mono text-xs bg-black/10 px-1 rounded">main</code>.
								See{' '}
								<a
									href="https://github.com/temper-mc/temper?tab=contributing-ov-file"
									target="_blank"
									rel="noopener noreferrer"
									className="underline hover:text-[var(--color-primary)] transition-colors"
								>
									CONTRIBUTING.md
								</a>{' '}
								for the full guidelines.
							</p>
							<Note type="tip">
								Join the <a href="https://discord.gg/6QPZgUy4sA"
								            className="underline">Discord</a> before starting on a large feature — we
								can discuss the approach and avoid duplicate work.
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