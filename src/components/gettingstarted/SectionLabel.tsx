export default function SectionLabel({children}: { children: string }) {
	return (
		<p
			className="inline-block text-xs font-display font-semibold tracking-widest uppercase mb-3 px-3 py-1 rounded-full border border-[var(--color-border-hover)]"
			style={{color: 'var(--color-info)'}}
		>
			{children}
		</p>
	);
}
