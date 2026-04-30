import Link from 'next/link';
import {RiDiscordLine, RiGithubLine} from "react-icons/ri";
import Image from "next/image";

export default function Footer() {
	const currentYear = new Date().getFullYear();

	const footerLinks = {
		software: [{label: 'Download', href: '/download'}, {label: 'About Us', href: '/about'}, {
			label: 'Benchmarks',
			href: '/benchmark'
		},], // resources: [
		// 	{ label: 'Documentation', href: '/docs' },
		// 	{ label: 'System Requirements', href: '/docs/requirements' },
		// 	{ label: 'FAQ', href: '/faq' },
		// ],
		// legal: [
		// 	{ label: 'Privacy Policy', href: '/privacy-policy' },
		// 	{ label: 'Terms of Service', href: '/tos' },
		// 	{ label: 'Cookie Policy', href: '/cookie-policy' },
		// ],
	};

	const socialLinks = [{
		name: 'Discord', href: 'https://discord.gg/6QPZgUy4sA', icon: <RiDiscordLine style={{fontSize: '1.25rem'}}/>,
	}, {
		name: 'GitHub',
		href: 'https://github.com/temper-mc/temper',
		icon: <RiGithubLine style={{fontSize: '1.25rem'}}/>,
	},];

	return (<footer className="relative mt-24 pt-16 pb-8 border-t border-border">
			{/* Background gradient */}
			<div
				className="absolute inset-0 -z-10 pointer-events-none"
				style={{background: 'linear-gradient(to bottom, transparent, color-mix(in srgb, var(--color-info) 5%, transparent))'}}
			/>

			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

				{/* Main Footer Content */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">

					{/* Brand Column */}
					<div className="lg:col-span-2">
						<Link href="/" className="flex items-center gap-3 group py-4">
							<div className="relative w-10 h-10 shrink-0">
								<div
									className="absolute inset-0 rounded-2xl blur-lg opacity-40 group-hover:opacity-70 transition-opacity duration-300"
									style={{ background: 'linear-gradient(to bottom right, var(--color-info), var(--color-surface))' }}
								/>
								<Image src="/favicon.webp" alt="Logo" width={40} height={40} className="relative rounded-2xl" />
							</div>
							<div>
								<p className="font-display font-bold text-xl md:text-2xl text-gradient leading-none">
									Temper MC
								</p>
							</div>
						</Link>
						<p className="text-muted mb-6 max-w-sm leading-relaxed">
							A stupidly fast Minecraft server software designed to push the limits of performance, built
							by a team of passionate developers who believe we can always go faster, further and higher.
						</p>

						{/* Social Links */}
						<div className="flex items-center gap-3">
							{socialLinks.map((social) => (<a
									key={social.name}
									href={social.href}
									target="_blank"
									rel="noopener noreferrer"
									className="social-link"
									aria-label={social.name}
								>
									{social.icon}
								</a>))}
						</div>
					</div>

					<div>
						<h3 className="font-display font-semibold text-primary mb-4">
							Software
						</h3>
						<ul className="space-y-3">
							{footerLinks.software.map((link) => (<li key={link.href}>
									<Link
										href={link.href}
										className="text-muted hover:text-primary transition-colors duration-300"
									>
										{link.label}
									</Link>
								</li>))}
						</ul>
					</div>

					{/* <div>
						<h3 className="font-display font-semibold text-[var(--color-text-primary)] mb-4">
							Resources
						</h3>
						<ul className="space-y-3">
							{footerLinks.resources.map((link) => (
								<li key={link.href}>
									<Link
										href={link.href}
										className="text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors duration-300"
									>
										{link.label}
									</Link>
								</li>
							))}
						</ul>
					</div> */}
				</div>

				{/* Bottom Bar */}
				<div
					className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
					<p className="text-sm text-muted">
						© {currentYear} Temper MC. All rights reserved.
					</p>
					{/* <div className="flex items-center gap-6">
						{footerLinks.legal.map((link) => (
							<Link
								key={link.href}
								href={link.href}
								className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors duration-300"
							>
								{link.label}
							</Link>
						))}
					</div> */}
				</div>
			</div>
		</footer>);
}