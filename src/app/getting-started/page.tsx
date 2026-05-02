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
				<section className="mb-12 sm:mb-20 animate-fade-in px-4 sm:px-0">
					<div className="max-w-3xl mx-auto text-center">
						<SectionLabel>Documentation</SectionLabel>
						<h1 className="hero-header mb-5 animate-slide-up text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
							Getting you up and running with Temper MC, hassle-free.
						</h1>
						<p className="text-base sm:text-lg leading-relaxed animate-slide-up animate-delay-100">
							You don&#39;t need to be a Rustacean to run Temper MC. Whether you&#39;re a seasoned server admin or
							just looking to try it out, our comprehensive guide will walk you through the installation
							process step by step, ensuring you have your server up and running in no time. Let&#39;s get
							started!
						</p>

						{/* Quick jump */}
						<div
							className="flex flex-wrap items-center justify-center gap-3 mt-8 animate-slide-up animate-delay-200">
							<a
								href="#user"
								className="btn-secondary text-sm w-full sm:w-auto"
							>
								I&#39;m a server owner
							</a>
							<a
								href="#dev"
								className="btn-primary text-sm w-full sm:w-auto"
							>
								I&#39;m a developer
							</a>
						</div>
					</div>
				</section>

				{/* ── User guide ── */}
				<section id="user" className="mb-12 sm:mb-20 scroll-mt-28 animate-slide-up px-4 sm:px-0">
					<div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-8">
						<div className="hidden sm:block">
							<Divider
								gradient="linear-gradient(to bottom, var(--color-surface), var(--color-secondary))"/>
						</div>
						<div>
							<SectionLabel>Owner Guide</SectionLabel>
							<SectionHeading>Downloading a prebuilt binary</SectionHeading>
							<p className="text-muted text-sm">
								No nonsense with compilers, toolchains or command line tooling. Just download, run and
								play. Perfect for server owners who just want to get a server up and running as quickly
								and painlessly as possible.
							</p>
						</div>
					</div>

					<div className="card p-4 sm:p-6 md:p-8">
						<Step number={1} title="Download">
							<p className="text-sm ">
								Just head to the <a href="https://temper-mc.com/download/" className="text-secondary underline">downloads page</a> and grab the latest download for your operating system.
							</p>
						</Step>
						<Step number={2} title="Extract">
							<p className="text-sm ">
								Extract the downloaded file to a folder of your choosing. All the relevant files and folder like the world, config, whitelist and so on will be created in this folder so you probably don't want to just stick it in your downloads folder.
							</p>
						</Step>
						<Step number={3} title="Run">
							<p className="text-sm ">
								Then simply run the executable. For Windows this will be the <code className="text-secondary px-1 py-0.5 rounded">temper.exe</code> file, on Mac and linux it'll be the file called <code className="text-secondary px-1 py-0.5 rounded">temper</code>. For Windows you can just double click it to start, I don't know how it works on a Mac and I'll assume you can figure out how to run an executable file if you are running Linux.
							</p>
						</Step>
						<Step number={4} title="Join">
							<p className="text-sm ">
								Boot up your Minecraft client, open the multiplayer screen and add a new server with the IP address of the server, or just hit the LAN server that will pop up if you are on the same network as the computer running it/you are joining from the computer that is running it. <br/>
								Note that you probably won't be able to join from computers on other wifi networks if you aren't running this on a server/VPS. Don't blame me for this, that's just how the internet works. You'll likely want to look into port forwarding or services like ngrok or tailscale to let others join. 
							</p>
						</Step>
					</div>
				</section>

				{/* ── Dev guide ── */}
				<section id="dev"
				         className="mb-12 sm:mb-16 scroll-mt-28 animate-slide-up animate-delay-100 px-4 sm:px-0">
					<div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-8">
						<div className="hidden sm:block">
							<Divider gradient="linear-gradient(to bottom, var(--color-info), var(--color-primary))"/>
						</div>
						<div>
							<SectionLabel>Developer Guide</SectionLabel>
							<SectionHeading>Building from source</SectionHeading>
							<p className="text-muted text-sm">
								Building from source for your hardware. Ideal for developers who want to contribute to
								the project, or just want to try it out before the stable release. This will get you up
								and running with a development build of Temper MC, and will also set you up with the
								necessary tools and environment to contribute to the project if you want to.
							</p>
						</div>
					</div>

					<div className="card p-4 sm:p-6 md:p-8">
						<Step number={1} title="Install prerequisites">
							<p className="text-sm ">
								Installing rustup, the Rust toolchain installer, is the first step to building Temper MC
								from source. It will allow you to easily install and manage the Rust compiler and
								associated tools needed to build and run Temper MC. You can download rustup from the
								official website at <a href="https://rustup.rs/"
								                       className="text-secondary underline">https://rustup.rs/</a>. Follow
								the instructions on the website to install rustup for your operating system, and make
								sure to add it to your system PATH if the installer doesn&#39;t do it automatically. Once
								you have rustup installed, you can use it to install the latest stable version of Rust
								by running <code className="text-secondary px-1 py-0.5 rounded">rustup
								install stable</code> in your terminal.
							</p>
							<p className="text-sm  mt-3">
								You will also need git installed from <a href="https://git-scm.com/"
								                                         className="text-secondary underline">https://git-scm.com/</a> to
								clone the repository and manage your local copy of the codebase. Follow the instructions
								on the website to download and install git for your operating system, and make sure to
								add it to your system PATH if the installer doesn&#39;t do it automatically. After
								installing git, you can verify that it&#39;s working by running <code
								className="text-secondary px-1 py-0.5 rounded">git --version</code> in
								your terminal, which should display the installed version of git.
							</p>
						</Step>

						<Step number={2} title="Clone the repository">
							<CodeBlock
								code="git clone https://github.com/temper-mc/temper.git \ncd temper"
								language="bash"
							/>
						</Step>

						<Step number={3} title="Build from source">
							<p className="text-sm ">
								For quick build times, still with good performance, you can build a debug build with the
								command below. If you want to squeeze out every last bit of performance and don&#39;t mind
								waiting longer for builds, you can build a release build with the second command.
							</p>
							<CodeBlock
								code="cargo build"
								language="bash"
								comment="debug"
							/>
							<p className="text-sm ">
								For maximal performance try a release build. This can take a while on low-end machines,
								but will produce much faster binaries that are optimized for performance rather than
								fast compile times, which is ideal for running a server.
							</p>
							<CodeBlock
								code="cargo build --release"
								language="bash"
								comment="release"
							/>
							<Note type="info">
								If you need to squeeze the most possible performance out of your build, you can compile
								it for your specific CPU architecture with <code
								className="text-secondary px-1 py-0.5 rounded">RUSTFLAGS=&#34;-C
								target-cpu=native&#34;</code> environment variable, which will enable optimizations that are
								specific to your CPU. Keep in mind that this will make your build non-portable, meaning
								it may not run on other machines with different CPU architectures, so it&#39;s generally
								recommended to only use this for personal builds on your own machine.
							</Note>
							<p className="text-sm  mt-3">
								You should have a nice shiny new build of Temper MC ready to go in the <code
								className="text-secondary px-1 py-0.5 rounded">target/debug</code> or <code
								className="text-secondary px-1 py-0.5 rounded">target/release</code> directory,
								depending on whether you built a debug or release build.
							</p>
						</Step>

						<Step number={4} title="Run the dev server">
							<CodeBlock
								code="cargo run"
								language="bash"
							/>
						</Step>

						<Step number={6} title="Open a pull request">
							<p className="text-sm ">
								Once you made your changes and are ready to submit them, open a pull request on GitHub.
								Make sure to follow our contribution guidelines and provide a clear description of your
								changes and why they are needed. If your PR is a work in progress, feel free to mark it
								as a draft PR so that it&#39;s clear that it&#39;s not ready for review yet. If you need any
								help or have any questions about the contribution process, don&#39;t hesitate to ask in the
								Discord or open an issue on GitHub.
								<br/>
								Additionally, we have a few checks that need to be run before a PR can be merged, which
								include automated tests and code formatting checks. These checks are run automatically
								when you open a PR, and you can also run them locally before submitting your PR to catch
								any issues early on.
							</p>
							<CodeBlock
								code="cargo clippy --all-targets -- -Dwarnings \ncargo fmt --all -- --check \ncargo test"
								language="bash"
								comment="CI checks"
							/>
							<p className="text-sm ">
								If all of these pass without errors, then your PR is in good shape for review. If any of
								these checks fail, you&#39;ll need to fix the issues before your PR can be merged. The error
								messages from these checks should give you a good idea of what needs to be fixed, and if
								you need any help understanding or fixing the issues, don&#39;t hesitate to ask in the
								Discord or open an issue on GitHub.
							</p>
							<Note type="tip">
								Running <code className="text-secondary px-1 py-0.5 rounded">cargo
								fmt</code> will automatically format your code according to our style guidelines, which
								can help you avoid formatting issues in your PR, while <code
								className="text-secondary px-1 py-0.5 rounded">cargo clippy --fix
								--allow-dirty</code> can automatically fix certain types of lint warnings, which can
								help you catch and fix common issues in your code before submitting your PR. Just make
								sure to review the changes made by these commands before committing them, to ensure that
								they don&#39;t introduce any unintended changes or break anything.
							</Note>
						</Step>
					</div>
				</section>

				{/* ── Need help CTA ── */}
				<section
					className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-border-hover p-6 sm:p-10 text-center mx-4 sm:mx-0">
					<div
						className="absolute inset-0 -z-10"
						style={{background: 'linear-gradient(135deg, color-mix(in srgb, var(--color-bg-gradient-start) 25%, var(--color-bg-secondary text-secondary)), color-mix(in srgb, var(--color-bg-gradient-end) 20%, var(--color-bg-secondary text-secondary)))'}}
					/>
					<div
						className="absolute -top-10 -left-10 w-36 h-36 rounded-full blur-3xl opacity-20 pointer-events-none -z-10"
						style={{background: 'var(--color-secondary)'}}/>
					<div
						className="absolute -bottom-10 -right-10 w-36 h-36 rounded-full blur-3xl opacity-20 pointer-events-none -z-10"
						style={{background: 'var(--color-accent)'}}/>

					<h2 className="text-xl sm:text-2xl md:text-3xl font-display font-bold mb-3 text-secondary">
						Stuck? We&#39;ve got you.
					</h2>
					<p className=" mb-8 max-w-md mx-auto text-sm sm:text-base">
						Ask in Discord, open a GitHub issue, or browse the full documentation.
					</p>
					<div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
						<a
							href="https://discord.gg/6QPZgUy4sA"
							target="_blank"
							rel="noopener noreferrer"
							className="btn-cta-primary w-full sm:w-auto"
						>
							Ask on Discord
						</a>
						<a
							href="https://github.com/temper-mc/temper/issues"
							target="_blank"
							rel="noopener noreferrer"
							className="btn-cta-outline w-full sm:w-auto"
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
