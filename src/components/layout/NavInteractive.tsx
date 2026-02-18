'use client';

import Link from 'next/link';
import {useEffect, useState} from 'react';
import {usePathname} from 'next/navigation';

interface NavLink {
	href: string;
	label: string;
}

interface NavInteractiveProps {
	navLinks: NavLink[];
}

const routeConfig: Record<string, { ctaLabel: string; ctaHref: string }> = {
	'/': {ctaLabel: 'Get Started', ctaHref: '/getting-started'},
	'/docs': {ctaLabel: '', ctaHref: ''},
	'/download': {ctaLabel: 'Join Discord', ctaHref: 'https://discord.gg/6QPZgUy4sA'},
	'/about': {ctaLabel: 'Get Started', ctaHref: '/getting-started'},
};

const defaultConfig = {subtitle: 'Minecraft Server', ctaLabel: 'Get Started', ctaHref: '/download'};

export default function NavInteractive({navLinks}: NavInteractiveProps) {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const pathname = usePathname();
	const config = routeConfig[pathname] ?? defaultConfig;

	useEffect(() => {
		setIsMobileMenuOpen(false);
	}, [pathname]);

	useEffect(() => {
		const handleScroll = () => setIsScrolled(window.scrollY > 20);
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<header
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
				isScrolled ? 'glass-effect shadow-lg' : 'bg-transparent'
			}`}
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-20 md:h-24">

					{/* Logo */}
					<Link href="/" className="flex items-center gap-3 group">
						<div className="relative w-10 h-10 shrink-0">
							<div
								className="absolute inset-0 rounded-2xl blur-lg opacity-40 group-hover:opacity-70 transition-opacity duration-300"
								style={{background: 'linear-gradient(to bottom right, var(--color-info), var(--color-surface))'}}
							/>
							{/* Logo icon placeholder — swap with your <Image> */}
							<div
								className="relative w-full h-full rounded-2xl flex items-center justify-center text-white text-sm font-bold font-display"
								style={{background: 'linear-gradient(to bottom right, var(--color-info), var(--color-surface))'}}
							>
								T
							</div>
						</div>
						<div>
							<p className="font-display font-bold text-xl md:text-2xl text-gradient leading-none">
								Temper MC
							</p>
							{/* Subtitle changes per route */}
							<p className="text-xs text-[var(--color-text-muted)] hidden sm:block mt-0.5 transition-all duration-300">
								Minecraft Server
							</p>
						</div>
					</Link>

					{/* Desktop Navigation */}
					<nav className="hidden lg:flex items-center gap-1">
						{navLinks.map((link, index) => {
							const isActive = pathname === link.href;
							return (
								<Link
									key={link.href}
									href={link.href}
									className="nav-link animate-fade-in"
									style={{
										animationDelay: `${index * 50}ms`,
										// Active link gets primary color + subtle bg
										...(isActive && {
											color: 'var(--color-primary)',
											backgroundColor: 'color-mix(in srgb, var(--color-info) 12%, transparent)',
										}),
									}}
								>
									{link.label}
									{/* Active indicator dot */}
									{isActive && (
										<span
											className="block mx-auto mt-0.5 w-1 h-1 rounded-full"
											style={{backgroundColor: 'var(--color-primary)'}}
										/>
									)}
								</Link>
							);
						})}
					</nav>

					{/* CTA — changes per route */}
					<div className="hidden lg:flex items-center gap-4">
						<Link
							href={config.ctaHref}
							className="btn-primary animate-fade-in animate-delay-300"
							{...(config.ctaHref.startsWith('http') && {
								target: '_blank',
								rel: 'noopener noreferrer',
							})}
						>
							{config.ctaLabel}
						</Link>
					</div>

					{/* Mobile Menu Button */}
					<button
						onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
						className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-xl transition-colors"
						style={{
							backgroundColor: isMobileMenuOpen
								? 'color-mix(in srgb, var(--color-info) 15%, transparent)'
								: 'transparent',
						}}
						aria-label="Toggle menu"
						aria-expanded={isMobileMenuOpen}
					>
						<div className="relative w-6 h-5 flex flex-col justify-between">
							<span
								className={`w-full h-0.5 rounded-full transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}
								style={{backgroundColor: 'var(--color-info)'}}
							/>
							<span
								className={`w-full h-0.5 rounded-full transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0 scale-x-0' : ''}`}
								style={{backgroundColor: 'var(--color-info)'}}
							/>
							<span
								className={`w-full h-0.5 rounded-full transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}
								style={{backgroundColor: 'var(--color-info)'}}
							/>
						</div>
					</button>
				</div>
			</div>

			{/* Mobile Menu */}
			<div
				className={`lg:hidden transition-all duration-500 ease-out overflow-hidden ${
					isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
				}`}
			>
				<nav className="glass-effect border-t border-[var(--color-border)]">
					<div className="max-w-7xl mx-auto px-4 py-6 space-y-2">
						{navLinks.map((link, index) => {
							const isActive = pathname === link.href;
							return (
								<Link
									key={link.href}
									href={link.href}
									onClick={() => setIsMobileMenuOpen(false)}
									className="nav-link-mobile animate-slide-up"
									style={{
										animationDelay: `${index * 50}ms`,
										...(isActive && {
											color: 'var(--color-primary)',
											backgroundColor: 'color-mix(in srgb, var(--color-info) 12%, transparent)',
										}),
									}}
								>
									{link.label}
								</Link>
							);
						})}
						<Link
							href={config.ctaHref}
							className="btn-primary block text-center mt-4 animate-slide-up animate-delay-300"
							onClick={() => setIsMobileMenuOpen(false)}
							{...(config.ctaHref.startsWith('http') && {
								target: '_blank',
								rel: 'noopener noreferrer',
							})}
						>
							{config.ctaLabel}
						</Link>
					</div>
				</nav>
			</div>
		</header>
	);
}