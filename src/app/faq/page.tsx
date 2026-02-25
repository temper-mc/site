import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Main from '@/components/layout/Main';
import FaqAccordion from '@/components/FAQAccordion';
import { FaqCategory, FaqItem } from '@/types/faq';
import { IoMdCog } from "react-icons/io";
import { GiFocusedLightning } from "react-icons/gi";

export const metadata: Metadata = {
	title: 'FAQ',
	description: 'Frequently asked questions.',
};

// ─── FAQ data ─────────────────────────────────────────────────

const FAQ_CATEGORIES: FaqCategory[] = [
	{
		label: 'Technical',
		gradient: 'linear-gradient(to right, var(--color-info), var(--color-primary))',
		icon: <IoMdCog />,
		items: [
			{
				question: 'Why do you use an ECS over a more traditional OOP setup?',
				answer: "The main reason is that it's simply the right tool for the job. An ECS excels at managing high numbers of entities with complex interactions, which is exactly what a Minecraft server needs to do. The ECS approach wasn't super popular when Minecraft was first developed and the JVM makes it much harder for the ECS's cache hits to shine since the JVM can get in the way with its own memory management and optimizations, but Rust's lack of a runtime makes it a perfect fit. Even Mojang sees te value in it, since Bedrock Edition uses an ECS architecture as well. In the end, Java is more designed for OOP architectures, and Rust lends itself better to an ECS design, so it just made more sense to go with an ECS for Temper rather than trying to shoehorn an OOP design in there just for the sake of familiarity or tradition.",
			},
			{
				question: "How is the world stored?",
				answer: "We use a proper key-value database for storage, called LMDB. It has a lot of upsides like massive performance, memory-mapping, fault tolerance being developed by people way smarter than us. It's not compatible with Minecraft's world format called Anvil sadly, but we figured that utilizing 15 years of software breakthroughs since Minecraft's inception was worth trading out drop-in compatibility for, especially since we have a world importing tool that can import existing worlds.",
			},
			{
				question: "Are we getting plugins support?",
				answer: "It's very much on the roadmap, but we want to get it right first try instead of having a half-assed API that needs changing every 3 months. Plugins will be written in Rust and compiled to binary libraries that Temper will be able to run. This allows for high-performance plugins that can comfortably interface with the rest of the Rust ecosystem. This will however come with some downsides; namely plugins being platform dependant so you'll likely have to download a version of each plugin for your server's OS, and the barrier to entry for plugin development being higher since Rust is a more complex language than Java which is used for plugins in other Minecraft servers. We think the performance and ecosystem benefits are worth it though, and we're working on making it as easy as possible to develop plugins in Rust with good documentation, examples and tooling.",
			},
			{
				question: "Will bukkit/spigot/paper plugins work with Temper?",
				answer: "Long story short, no. Completely different languages, implementations and architectures make it almost impossible for Java plugins to work with Temper. A compatibility layer would be possible on paper, but it'd be a massive headache to implement, extremely sketchy and having to pass everything to a Java runtime and back would obliterate performance. More complex plugins would also require a deeper compatibility layer and it'd eventually get to the point where reliably running popular plugins like WorldEdit or Dynmap would require us to basically re-implement Paper/Bukkit on top of Temper, at which point there isn't much reason to be doing this project in the first place. When feature-completeness is on the horizon we might revisit, but for now it's very unlikely it'll happen.",
			},
			{
				question: "Why Rust?",
				answer: "I know the software world is saturated with stuff being rewritten in Rust for no good reason, but I promise it's actually the tool for the job here. Other languages have been considered but Rust just ended up coming out on top. Rust is only marginally slower than C/C++ and is much easier to write and maintain, with memory safety guarantees and a modern ecosystem. Golang was ruled out due to not scaling well with the size of the codebase and most interpreted languages like Python and Javascript/Typescript would have been too slow to be a real improvement over the vanilla server. C# was a real consideration at one point, but the lack of support for proper multithreading would have meant we would lose out on a massive performance opportunity. Zig was also considered, but with it being so young and unstable, along with not being as well known or widely used as Rust, it just didn't make sense to go with it over Rust which has a much larger ecosystem and community. In the end, Rust just made the most sense for what we wanted to achieve with Temper, and we're excited to be using it to build a better Minecraft server experience.",
			}
		] satisfies FaqItem[],
	},
	{
		label: 'Project & Community',
		gradient: 'linear-gradient(to right, var(--color-primary), var(--color-surface))',
		icon: <GiFocusedLightning />,
		items: [
			{
				question: "Why \"Temper\"?",
				answer: "If I'm going to be honest, the name sounded cool and I had the think of a reason after. Tempering is the process of hardening metal by heating and cooling it, which could be a metaphor of what we're doing with Minecraft server software; taking something that already exists and making it stronger, faster and more resilient through a lot of hard work and iteration. Honestly, up to interpretation, the domain was cheap, name sounded cool and wasn't used by anything else notable so I just went for it.",

			},
			{
				question: "Why split from FerrumC?",
				answer: "I wanted to carry on the proud tradition among Minecraft server projects of forking over management issues and splitting the community in half. In all seriousness, we just didn't agree on how to run the project. There was no major falling out or anything and we are still on good terms, but we had different visions for the project's direction and management style that ultimately led to us parting ways.",
			},
			{
				question: 'If I want to contribute, where should I start?',
				answer: "We welcome contributions of all kinds, whether it's code, documentation, bug reports or just spreading the word. Hopping in the Discord is a good first step, since you can ask what needs working on we can discuss how to best help you contribute. If you want to dive right into the code, the github usually has some issues open for what needs doing, feel free to pick one up and start working on it, and if you have any questions or need help don't hesitate to ask in the Discord or open an issue on github. If you want to work on something that someone else has already picked up, chuck a comment on the issue or in the Discord to see if you can collaborate with them rather than stepping on their toes.",
			},
			{
				question: 'If I want to contribute, can I use AI?',
				answer: "Yes, but simply providing quantity over quality won't do you any favours. AI can be helpful yes, but you are still expected to understand what you are submitting and be able to explain it if asked. If you just dump a wall of AI generated code that doesn't work or isn't up to our standards, it's not going to get merged and it's just going to waste everyone's time. If you consistently submit poor quality AI generated code without being able to explain or fix it, future PRs from you will likely be ignored. In short, if you wouldn't be able to write the code without an AI, then you probably shouldn't be submitting it with an AI. If you are of the opinion that throwing a wall of unchecked AI slop at the PRs page is the right way for the project to be developed, you should probably go find another vibe-coded project that shares that vision, or start your own.",
			},
		] satisfies FaqItem[],
	},
];

// ─── Page ─────────────────────────────────────────────────────
export default function FaqPage() {
	const totalQuestions = FAQ_CATEGORIES.reduce((sum, c) => sum + c.items.length, 0);

	return (
		<div className="min-h-screen">
			<Header />

			<Main>

				{/* ── Hero ── */}
				<section className="mb-16 text-center animate-fade-in">
					<p
						className="inline-block text-sm font-display font-semibold tracking-widest uppercase mb-4 px-4 py-1.5 rounded-full border border-[var(--color-border-hover)]"
						style={{ color: 'var(--color-info)' }}
					>
						FAQ
					</p>
					<h1 className="hero-header mb-4 animate-slide-up">
						Frequently Asked Questions
					</h1>
					<p className="text-lg text-text-secondary max-w-xl mx-auto animate-slide-up animate-delay-100">
						{totalQuestions} answers across {FAQ_CATEGORIES.length} categories. Didn't find what you're looking for?{' '}
						<a
							href="https://discord.gg/6QPZgUy4sA"
							target="_blank"
							rel="noopener noreferrer"
							className="underline hover:text-primary transition-colors"
						>
							Ask in Discord.
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
							style={{ animationDelay: `${ci * 60}ms` }}
						>
							<div className="flex items-center gap-3 mb-5">
								<div className="w-1 h-6 rounded-full shrink-0" style={{ background: cat.gradient }} />
								<h2 className="font-display font-semibold text-xl text-[var(--color-text-primary)] flex items-center gap-2">
									<span>{cat.icon}</span>
									{cat.label}
								</h2>
							</div>

							<FaqAccordion items={cat.items} />
						</section>
					))}
				</div>

				{/* ── CTA ── */}
				<section
					className="relative overflow-hidden rounded-3xl border border-[var(--color-border-hover)] p-10 text-center mt-16">
					<div
						className="absolute inset-0 -z-10"
						style={{ background: 'linear-gradient(135deg, color-mix(in srgb, var(--color-bg-gradient-start) 25%, var(--color-bg-secondary)), color-mix(in srgb, var(--color-bg-gradient-end) 20%, var(--color-bg-secondary)))' }}
					/>
					<div
						className="absolute -top-10 -left-10 w-36 h-36 rounded-full blur-3xl opacity-20 pointer-events-none -z-10"
						style={{ background: 'var(--color-secondary)' }} />
					<div
						className="absolute -bottom-10 -right-10 w-36 h-36 rounded-full blur-3xl opacity-20 pointer-events-none -z-10"
						style={{ background: 'var(--color-accent)' }} />

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

			<Footer />
		</div>
	);
}