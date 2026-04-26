import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Main from '@/components/layout/Main';
import FaqAccordion from '@/components/FAQAccordion';
import { FaqCategory, FaqItem } from '@/types/faq';
import { IoLogoGameControllerA, IoMdCog } from "react-icons/io";
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
				answer: "The main reason is that it's simply the right tool for the job. An ECS excels at managing high numbers of entities with complex interactions, which is exactly what a Minecraft server needs to do. The ECS approach wasn't super popular when Minecraft was first developed and the JVM makes it much harder for the ECS's cache hits to shine since the JVM can get in the way with its own memory management and optimizations, but Rust's lack of a runtime makes it a perfect fit. Even Mojang sees the value in it, since Bedrock Edition uses an ECS architecture as well. In the end, Java is more designed for OOP architectures, and Rust lends itself better to an ECS design, so it just made more sense to go with an ECS for Temper rather than trying to shoehorn an OOP design in there just for the sake of familiarity or tradition.",
			},
			{
				question: "How is the world stored?",
				answer: "We use a proper key-value database for storage, called LMDB. It has a lot of upsides like massive performance, memory-mapping, fault tolerance and being developed by people way smarter than us. It's not compatible with Minecraft's world format called Anvil sadly, but we figured that utilizing 15 years of software breakthroughs since Minecraft's inception was worth trading out drop-in compatibility for, especially since we have a world importing tool that can import existing worlds.",
			},
			{
				question: "Are we getting plugins support?",
				answer: "It's very much on the roadmap, but we want to get it right first try instead of having a half-assed API that needs changing every 3 months. Plugins will be written in Rust and compiled to binary libraries that Temper will be able to run. This allows for high-performance plugins that can comfortably interface with the rest of the Rust ecosystem. This will however come with some downsides; namely plugins being platform dependant so you'll likely have to download a version of each plugin for your server's OS, and the barrier to entry for plugin development being higher since Rust is a more complex language than Java which is used for plugins in other Minecraft servers. We think the performance and ecosystem benefits are worth it though, and we're working on making it as easy as possible to develop plugins in Rust with good documentation, examples and tooling.",
			},
			{
				question: "Will bukkit/spigot/paper plugins work with Temper?",
				answer: "Long story short, no. Completely different languages, implementations and architectures make it almost impossible for Java plugins to work with Temper. A compatibility layer would be possible in theory, but it'd be a massive headache to implement, extremely sketchy and having to pass everything to a Java runtime and back would obliterate performance. More complex plugins would also require a deeper compatibility layer and it'd eventually get to the point where reliably running popular plugins like WorldEdit or Dynmap would require us to basically re-implement Paper/Bukkit on top of Temper, at which point there isn't much reason to be doing this project in the first place. When feature-completeness is on the horizon we might revisit, but for now it's very unlikely it'll happen.",
			},
			{
				question: "Why Rust?",
				answer: "I know the software world is saturated with stuff being rewritten in Rust for no good reason, but I promise it's actually the tool for the job here. If we want solid performance improvements, we need to pick the right language for the job, and native code is almost always faster than VM languages like Java, C# or Go. The main contenders for natively compiled options are C, C++, Rust and Zig. I'm not doing this is C because it's an ancient language with memory safety boiling down to \"get gud\", abysmal tooling and is miserable to work with. C++ is slightly better, but is plagued with decades of bloated features and still has considerable memory safety concerns. Zig is certainly cool and I would be interested in seeing if it could at some point be integrated in the project, but ultimately it's very young and has a much smaller ecosystem and community than Rust, which would make it harder to find contributors and libraries for things like networking, databases and other stuff we need. Rust on the other hand has a fantastic ecosystem, great performance, memory safety guarantees and is generally a joy to work with once you get past the learning curve. I've also found that the rust community is extremely welcoming and inclusive, which is important for getting new contributors and building a positive community around the project. So yeah, Rust is the best choice for this project in my opinion, and I think the \"BlAzInGlY fAsT\" stigma is a fair price to pay for safe, high-performance code and a great community.",
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
				answer: "We welcome contributions of all kinds, whether it's code, documentation, bug reports or just spreading the word. Hopping in the Discord is a good first step, since you can ask what needs working on we can discuss how to best help you contribute. If you want to dive right into the code, the GitHub usually has some issues open for what needs doing, feel free to pick one up and start working on it, and if you have any questions or need help don't hesitate to ask in the Discord or open an issue on GitHub. If you want to work on something that someone else has already picked up, chuck a comment on the issue or in the Discord to see if you can collaborate with them rather than stepping on their toes.",
			},
			{
				question: 'If I want to contribute, can I use AI?',
				answer: "Yes, but simply providing quantity over quality won't do you any favours. AI can be helpful yes, but you are still expected to understand what you are submitting and be able to explain it if asked. If you just dump a wall of AI generated code that doesn't work or isn't up to our standards, it's not going to get merged and it's just going to waste everyone's time. If you consistently submit poor quality AI generated code without being able to explain or fix it, future PRs from you will likely be ignored. In short, if you wouldn't be able to write the code without an AI, then you probably shouldn't be submitting it with an AI. If you are of the opinion that throwing a wall of unchecked AI slop at the PRs page is the right way for the project to be developed, you should probably go find another vibe-coded project that shares that vision, or start your own.",
			},
			{
				question: "I am simply overflowing with money, how can I give you some of my obscene wealth?",
				answer: "I am such a kind and generous person that I will take some of that pesky money off your hands. Jokes aside, donating money is in no way expected or required, but if you really do want to support the project financially, there is a buymeacoffee page <a href='https://www.buymeacoffee.com/temper' target='_blank' rel='noopener noreferrer' class='underline hover:text-primary text-secondary transition-colors'>here</a>. The money goes towards hosting costs, domain registration and other expenses related to running the project, and any excess funds will be put towards future development and improvements. There are some small benefits for donors such as having your name listed on the website and a special role in the Discord, but the main motivation for donating should be just wanting to support the project and help it succeed rather than any specific perks. We appreciate any support we get, whether it's financial or just spreading the word about the project, and we're grateful to have such an amazing community behind us.",
			},
			{
				question: "Who did that super cool logo?",
				answer: "The logo was designed by a super cool artist who goes by the name of Star. You can check them out here: <a href='https://starcomissions.carrd.co/' target='_blank' class='underline hover:text-primary text-secondary transition-colors'>https://starcomissions.carrd.co/</a>. I have worked with them previously on some work for another project and they always deliver high quality work very fast with extremely reasonable prices, I'd highly recommend them if you need any art or design work done.",
			},
			{
				question: "I don't like Discord, is there another way to get in touch or stay updated?",
				answer: "Discord is our main hub for community interaction and updates, but we understand it's not everyone's cup of tea. We also have a presence on GitHub where you can follow the project and see updates, but for most communication Discord is where it's at. If you really, really don't want to use Discord, let us know in the GitHub discussions page and if there's enough demand for alternatives, we can look into something like Matrix or other platforms."
			}
		] satisfies FaqItem[],
	},
	{
		label: 'Gameplay',
		gradient: 'linear-gradient(to right, var(--color-surface), var(--color-info))',
		icon: <IoLogoGameControllerA />,
		items: [
			{
				question: "Will Temper have any gameplay differences from vanilla Minecraft?",
				answer: "Most likely yes. We are trying to avoid using decompiled code so we don't get sued by Microsoft/Mojang and this ultimately means that some of the game's internal workings won't be easy to replicate. For most things the community has well documented so we can simply consult the wiki or chat to Minecraft experts in the community to figure out how to replicate it, but for some more obscure mechanics we might have to make educated guesses based on testing and observation. Stuff like terrain generation for example will be nearly impossible to perfectly replicate without decompiling the code, but we can get very close with enough testing and iteration. We also want to take this opportunity to fix some of Minecraft's longstanding issues and inconsistencies, so there will likely be some intentional differences as well. Our goal is to make a server software that is compatible with vanilla Minecraft clients and provides a solid foundation for plugins and mods, but that doesn't necessarily mean we have to replicate every single quirk and bug of the vanilla server.",
			},
			{
				question: "Feature XYZ does not exist or work correctly, what can I do about it?",
				answer: "There is a pretty solid chance that we just haven't gotten around to implementing it yet, especially if it's a more obscure or less popular feature, or it requires other unimplemented features to be added first. If it's important to you, come have a chat and we can discuss how it's being handled. It might be further down the roadmap than you'd like, in which case you can either wait for us to get to it, or if you have the skills and motivation to work on it yourself, we would welcome contributions. If it's a bug rather than a missing feature, definitely report it in the Discord or on GitHub so we can get it fixed as soon as possible. We are still in early development and there are bound to be a lot of missing features and bugs, but we are working hard to get them all ironed out and we appreciate the community's patience and help in getting there.",
			},
			{
				question: "Will terrain generation be the same as vanilla?",
				answer: "Maybe? We aren't sure if we want to do it or not, so come and let us know your thoughts. Replicating vanilla terrain generation is a huge pain, but not impossible, so if it's something the community really wants we can make it happen. On the other hand, this is a great opportunity to implement better terrain generation with more features and less bugs than vanilla, so if there's enough interest in that we might go that route instead. Let us know what you think in the Discord or GitHub discussions, and if you have any ideas for cool terrain generation features or improvements over vanilla, we'd love to hear those as well.",
			},
			{
				question: "Will there be any QoL improvements or new features added to the game?",
				answer: "Yup! Currently we have a nice dashboard that is hosted alongside the server that lets you easily see performance stats, player counts and other useful info about your server, and stuff like interactive console and chat is planned for the dashboard. We also have an updating list of known IP addresses belonging to botnets/scanners that are blocked by default to avoid servers getting scanned and players being tracked across servers by malicious actors. If you have any ideas for QoL improvements or new features that you'd like to see, let us know in the Discord or GitHub discussions! We want to make a server software that not only replicates vanilla Minecraft but also improves on it.",
			}
		] satisfies FaqItem[],
	},
	{
		label: 'Other',
		gradient: 'linear-gradient(to right, var(--color-info), var(--color-primary))',
		icon: '❓',
		items: [
			{
				question: "Can I run Temper on a Raspberry Pi?",
				answer: "Yes! You will likely need to turn down the database map size in the config since we've had some reports of it being too big for the Pi at default values, but other than that it should run just fine. We haven't done extensive testing on ARM devices yet, but since Rust compiles to native code for a wide variety of platforms and our CI testing and builds run on ARM64 runners as well, it should work just fine on the Pi. If you have a Raspberry Pi and want to test it out, we'd love to hear about your experience and any performance metrics you can share!",
			}
		] satisfies FaqItem[],
	}

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
						<a href="https://GitHub.com/temper-mc/temper/issues" target="_blank" rel="noopener noreferrer"
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