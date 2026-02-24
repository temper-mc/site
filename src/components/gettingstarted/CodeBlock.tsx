import CopyButton from "@/components/CopyButton";

export default function CodeBlock({code, language = 'bash', comment}: {
	code: string;
	language?: string;
	comment?: string
}) {
	return (
		<div
			className="rounded-xl sm:rounded-2xl overflow-hidden text-xs sm:text-sm"
			style={{backgroundColor: 'var(--color-bg-secondary)', border: '1px solid var(--color-border)'}}
		>
			{/* Toolbar */}
			<div
				className="flex items-center justify-between px-3 sm:px-4 py-2 border-b"
				style={{borderColor: 'var(--color-border)'}}
			>
				<div className="flex items-center gap-2 min-w-0">
                <span
	                className="text-xs font-mono font-medium shrink-0"
	                style={{color: 'var(--color-text-muted)'}}
                >
                   {language}
                </span>
					{comment && (
						<>
							<span style={{color: 'var(--color-border-hover)'}}>·</span>
							<span className="text-xs text-[var(--color-text-muted)] truncate">{comment}</span>
						</>
					)}
				</div>
				<CopyButton text={code}/>
			</div>
			{/* Code */}
			<pre
				className="px-3 sm:px-4 py-3 sm:py-4 overflow-x-auto font-mono text-xs sm:text-sm leading-relaxed"
				style={{color: 'var(--color-text-secondary)'}}
			>
             <code>{code.replaceAll("\\n", "\n")}</code>
          </pre>
		</div>
	);
}