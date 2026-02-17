export default function Note({type = 'info', children}: { type?: 'info' | 'warn' | 'tip'; children: React.ReactNode }) {
	const styles = {
		info: {color: 'var(--color-info)', bg: 'color-mix(in srgb, var(--color-info) 8%, transparent)', icon: 'ℹ'},
		warn: {color: 'var(--color-accent)', bg: 'color-mix(in srgb, var(--color-accent) 8%, transparent)', icon: '⚠'},
		tip: {color: 'var(--color-surface)', bg: 'color-mix(in srgb, var(--color-surface) 8%, transparent)', icon: '✦'},
	}[type];

	return (
		<div
			className="flex gap-3 p-3 rounded-xl text-sm leading-relaxed"
			style={{
				backgroundColor: styles.bg,
				border: `1px solid color-mix(in srgb, ${styles.color} 20%, transparent)`
			}}
		>
			<span className="shrink-0 text-base" style={{color: styles.color}}>{styles.icon}</span>
			<p style={{color: 'var(--color-text-secondary)'}}>{children}</p>
		</div>
	);
}
