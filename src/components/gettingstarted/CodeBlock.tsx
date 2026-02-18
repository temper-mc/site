import CopyButton from "@/components/CopyButton";

export default function CodeBlock({code, language = 'bash', comment}: {
	code: string;
	language?: string;
	comment?: string
}) {
	return (
		<div
			className="rounded-2xl overflow-hidden text-sm"
			style={{backgroundColor: 'var(--color-bg-secondary)', border: '1px solid var(--color-border)'}}
		>
			{/* Toolbar */}
			<div
				className="flex items-center justify-between px-4 py-2 border-b"
				style={{borderColor: 'var(--color-border)'}}
			>
				<div className="flex items-center gap-2">
					<span
						className="text-xs font-mono font-medium"
						style={{color: 'var(--color-text-muted)'}}
					>
						{language}
					</span>
					{comment && (
						<>
							<span style={{color: 'var(--color-border-hover)'}}>·</span>
							<span className="text-xs text-[var(--color-text-muted)]">{comment}</span>
						</>
					)}
				</div>
				<CopyButton text={code}/>
			</div>
			{/* Code */}
			<pre
				className="px-4 py-4 overflow-x-auto font-mono text-sm leading-relaxed"
				style={{color: 'var(--color-text-secondary)'}}
			>
				<code>{code.replaceAll("\\n", "\n")}</code>
			</pre>
		</div>
	);
}
