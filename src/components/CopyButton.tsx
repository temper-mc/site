'use client';

import {useState} from 'react';

export default function CopyButton({text}: {text: string}) {
	const [copied, setCopied] = useState(false);

	const handleCopy = async () => {
		await navigator.clipboard.writeText(text);
		setCopied(true);
		setTimeout(() => setCopied(false), 2000);
	};

	return (
		<button
			onClick={handleCopy}
			className="shrink-0 flex items-center gap-1.5 text-xs font-display font-medium px-2.5 py-1 rounded-lg transition-all duration-200"
			style={{
				color: copied ? 'var(--color-surface)' : 'var(--color-text-muted)',
				backgroundColor: copied
					? 'color-mix(in srgb, var(--color-surface) 12%, transparent)'
					: 'color-mix(in srgb, var(--color-info) 8%, transparent)',
			}}
			aria-label="Copy to clipboard"
		>
			{copied ? (
				<>
					<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
					</svg>
					Copied
				</>
			) : (
				<>
					<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
						      d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/>
					</svg>
					Copy
				</>
			)}
		</button>
	);
}