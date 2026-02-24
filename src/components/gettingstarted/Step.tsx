export default function Step({number, title, children,}: { number: number; title: string; children: React.ReactNode; }) {
	return (
		<div className="flex gap-3 sm:gap-4 md:gap-6">
			{/* Step number */}
			<div className="flex flex-col items-center gap-2">
				<div
					className="w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center text-xs sm:text-sm font-display font-bold text-white shrink-0"
					style={{background: 'linear-gradient(135deg, var(--color-info), var(--color-primary))'}}
				>
					{number}
				</div>
				{/* Connector line */}
				<div
					className="flex-1 w-px min-h-4"
					style={{backgroundColor: 'var(--color-border)'}}
				/>
			</div>

			{/* Content */}
			<div className="flex-1 pb-6 sm:pb-8 min-w-0">
				<h3 className="font-display font-semibold text-base sm:text-lg text-[var(--color-text-primary)] mb-3 mt-1.5">
					{title}
				</h3>
				<div className="space-y-3">
					{children}
				</div>
			</div>
		</div>
	);
}