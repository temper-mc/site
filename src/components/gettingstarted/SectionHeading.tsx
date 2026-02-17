export default function SectionHeading({children}: { children: React.ReactNode }) {
	return (
		<h2 className="font-display font-bold text-2xl md:text-3xl text-[var(--color-text-primary)] mb-2">
			{children}
		</h2>
	);
}
