
import AssetRow from '@/components/download/AssetRow'


export default function ReleaseCard({release, isLatest}: { release: Release; isLatest: boolean }) {
	const totalDownloads = release.assets.reduce((sum, a) => sum + a.download_count, 0);

	return (
		<div
			className="card"
			style={isLatest ? {borderColor: 'color-mix(in srgb, var(--color-info) 40%, transparent)'} : undefined}
		>
			{/* Header */}
			<div className="flex flex-wrap items-start justify-between gap-4 mb-6">
				<div className="flex items-center gap-3 flex-wrap">
					<span className="font-mono font-bold text-xl md:text-2xl" style={{color: 'var(--color-primary)'}}>
						{release.tag_name}
					</span>

					{isLatest && (
						<span
							className="text-xs font-display font-semibold px-2.5 py-1 rounded-full"
							style={{
								backgroundColor: 'color-mix(in srgb, var(--color-info) 15%, transparent)',
								color: 'var(--color-info)',
								border: '1px solid color-mix(in srgb, var(--color-info) 30%, transparent)',
							}}
						>
							Latest
						</span>
					)}

					{release.prerelease && (
						<span
							className="text-xs font-display font-semibold px-2.5 py-1 rounded-full"
							style={{
								backgroundColor: 'color-mix(in srgb, var(--color-accent) 15%, transparent)',
								color: 'var(--color-accent)',
								border: '1px solid color-mix(in srgb, var(--color-accent) 30%, transparent)',
							}}
						>
							Pre-release
						</span>
					)}
				</div>

				{/* Meta */}
				<div className="flex items-center gap-4 text-xs text-text-muted flex-wrap">
					<span className="flex items-center gap-1.5">
						<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
							      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
						</svg>
						{formatDate(release.published_at)}
					</span>

					{totalDownloads > 0 && (
						<span className="flex items-center gap-1.5">
							<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
								      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
							</svg>
							{formatDownloads(totalDownloads)} total
						</span>
					)}

					<a
						href={release.html_url}
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center gap-1 hover:text-primary transition-colors"
					>
						<svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
							<path
								d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12"/>
						</svg>
						GitHub
					</a>
				</div>
			</div>

			{/* Release name */}
			{release.name && release.name !== release.tag_name && (
				<p className="font-display font-semibold text-lg text-text-primary mb-4">
					{release.name}
				</p>
			)}

			{/* Changelog */}
			{release.body && (
				<div className="mb-6">
					<p
						className="text-xs font-display font-semibold tracking-widest uppercase mb-3 flex items-center gap-2"
						style={{color: 'var(--color-info)'}}
					>
						<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
							      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>
						</svg>
						Changelog
					</p>
					<div
						className="rounded-2xl p-4 text-sm text-text-secondary leading-relaxed whitespace-pre-line font-mono max-h-48 overflow-y-auto"
						style={{backgroundColor: 'var(--color-bg-secondary)'}}
					>
						{release.body}
					</div>
				</div>
			)}

			{/* Assets */}
			{release.assets.length > 0 ? (
				<div>
					<p
						className="text-xs font-display font-semibold tracking-widest uppercase mb-3 flex items-center gap-2"
						style={{color: 'var(--color-info)'}}
					>
						<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
							      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
						</svg>
						Downloads
					</p>
					<div
						className="rounded-2xl overflow-hidden"
						style={{backgroundColor: 'var(--color-bg-secondary)'}}
					>
						{release.assets.map((asset) => (
							<div
								key={asset.id}
								className="border-b last:border-0"
								style={{borderColor: 'var(--color-border)'}}
							>
								<AssetRow asset={asset}/>
							</div>
						))}
					</div>
				</div>
			) : (
				<div className="rounded-2xl p-4 text-center" style={{backgroundColor: 'var(--color-bg-secondary)'}}>
					<p className="text-sm text-text-muted">
						No binary assets —{' '}
						<a
							href={release.html_url}
							target="_blank"
							rel="noopener noreferrer"
							className="underline hover:text-primary transition-colors"
						>
							view source on GitHub
						</a>
					</p>
				</div>
			)}
		</div>
	);
}
