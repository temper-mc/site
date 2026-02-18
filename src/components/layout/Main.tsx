import {ReactNode} from 'react';

interface MainProps {
	children: ReactNode;
	className?: string;
}

export default function Main({children, className = ''}: MainProps) {
	return (
		<main className={`min-h-screen pt-20 md:pt-24 ${className}`}>
			{/* Background gradient mesh */}
			<div className="fixed inset-0 -z-10 gradient-mesh opacity-30 pointer-events-none"/>

			{/* Floating orbs */}
			<div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
				<div
					className="absolute top-20 left-10 w-96 h-96 rounded-full blur-3xl opacity-20 animate-float"
					style={{
						background: 'radial-gradient(circle, var(--color-primary) 0%, transparent 70%)',
						animationDelay: '0s',
					}}
				/>
				<div
					className="absolute top-1/3 right-10 w-80 h-80 rounded-full blur-3xl opacity-20 animate-float"
					style={{
						background: 'radial-gradient(circle, var(--color-surface) 0%, transparent 70%)',
						animationDelay: '2s',
					}}
				/>
				<div
					className="absolute bottom-20 left-1/4 w-72 h-72 rounded-full blur-3xl opacity-20 animate-float"
					style={{
						background: 'radial-gradient(circle, var(--color-accent) 0%, transparent 70%)',
						animationDelay: '4s',
					}}
				/>
			</div>

			{/* Content */}
			<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
				{children}
			</div>
		</main>
	);
}