'use client';

import {useState} from 'react';
import {FaqItem} from "@/types/faq";

export default function FaqAccordion({items}: { items: FaqItem[] }) {
	const [openIndex, setOpenIndex] = useState<number | null>(null);

	return (
		<div className="space-y-2">
			{items.map((item, i) => {
				const isOpen = openIndex === i;

				return (
					<div
						key={i}
						className="rounded-2xl border overflow-hidden transition-colors duration-200"
						style={{
							borderColor: isOpen
								? 'color-mix(in srgb, var(--color-info) 35%, transparent)'
								: 'var(--color-border)',
							backgroundColor: isOpen
								? 'color-mix(in srgb, var(--color-info) 4%, var(--color-bg-primary))'
								: 'var(--color-bg-primary)',
						}}
					>
						{/* Trigger */}
						<button
							onClick={() => setOpenIndex(isOpen ? null : i)}
							className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left transition-colors duration-200"
							aria-expanded={isOpen}
						>
							<span
								className="font-display font-semibold text-sm md:text-base transition-colors duration-200"
								style={{color: isOpen ? 'var(--color-primary)' : 'var(--color-text-primary)'}}
							>
								{item.question}
							</span>

							{/* Animated chevron */}
							<span
								className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300"
								style={{
									backgroundColor: isOpen
										? 'color-mix(in srgb, var(--color-info) 15%, transparent)'
										: 'color-mix(in srgb, var(--color-border) 60%, transparent)',
									transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
								}}
							>
								<svg
									className="w-3.5 h-3.5"
									style={{color: isOpen ? 'var(--color-info)' : 'var(--color-text-muted)'}}
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5}
									      d="M19 9l-7 7-7-7"/>
								</svg>
							</span>
						</button>

						{/* Answer panel */}
						<div
							className="overflow-hidden transition-all duration-300 ease-in-out"
							style={{
								maxHeight: isOpen ? '600px' : '0px',
								opacity: isOpen ? 1 : 0,
							}}
						>
							<div
								className="px-5 pb-5 pt-1 text-sm leading-relaxed border-t"
								style={{
									color: 'var(--color-text-secondary)',
									borderColor: 'color-mix(in srgb, var(--color-info) 15%, transparent)',
								}}
							>
								{item.answer}
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
}