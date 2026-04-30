'use client'

import AssetRow from '@/components/download/AssetRow'
import {formatDate, formatDownloads, linkifyMentions} from './helpers'
import {useState} from "react";
import Markdown from "react-markdown";
import {SlCalender} from "react-icons/sl";
import {MdOutlineFileDownload} from "react-icons/md";
import {FaGithub, FaRegClipboard} from "react-icons/fa";
import {IoIosArrowDown, IoIosArrowUp} from "react-icons/io";

export default function ReleaseCard({release, isLatest}: { release: Release; isLatest: boolean }) {
	const totalDownloads = release.assets?.reduce((sum, a) => sum + a.download_count, 0) ?? 0;

	const [changelogOpen, setChangelogOpen] = useState(false);

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
				<div className="flex items-center gap-4 text-xs text-muted flex-wrap">
					<span className="flex items-center gap-1.5">
						<SlCalender className="w-3.5 h-3.5" />
						{formatDate(release.published_at)}
					</span>

					{totalDownloads > 0 && (
						<span className="flex items-center gap-1.5">
							<MdOutlineFileDownload  className="w-3.5 h-3.5" />
							{formatDownloads(totalDownloads)} total
						</span>
					)}

					<a
						href={release.html_url}
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center gap-1 hover:text-primary transition-colors"
					>
						<FaGithub className="w-3.5 h-3.5"/>
						GitHub
					</a>
				</div>
			</div>

			{/* Release name */}
			{release.name && release.name !== release.tag_name && (
				<p className="font-display font-semibold text-lg text-primary mb-4">
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
						<FaRegClipboard className="w-3.5 h-3.5"/>
						Changelog
					</p>
					<div
						className="rounded-2xl p-4 text-sm leading-relaxed whitespace-pre-line font-mono flex flex-col gap-4"
						style={{backgroundColor: 'var(--color-bg-secondary)'}}
					>
						<div className={(changelogOpen ? "overflow-y-visible" : "overflow-y-hidden max-h-48")}>
							<Markdown
								components={{
									a(props) {
										const {href, children, node, ...rest} = props
										return (
											<a
												{...rest}
												href={href}
												target="_blank"
												rel="noopener noreferrer"
												className="hover:underline text-info"
												>
												{children}
											</a>
										)
									}
								}}
							>
								{linkifyMentions(release.body)}
							</Markdown>
						</div>
						<button
							className="w-full flex items-center justify-start py-2 mt-2"
							style={{color: 'var(--color-info)'}}
							onClick={() => setChangelogOpen(!changelogOpen)}
						>
							{!changelogOpen ? (
								<div className="flex items-center gap-1">
									<IoIosArrowDown className="w-4 h-4"/>
									<p className="leading-none">Expand to read more</p>
								</div>
							) : (
								<div className="flex items-center gap-1">
									<IoIosArrowUp className="w-4 h-4"/>
									<p className="leading-none">Collapse</p>
								</div>
							)}
						</button>
					</div>
				</div>
			)}

			{/* Assets */
			}
			{
				release.assets?.length > 0 ? (
					<div>
						<p
							className="text-xs font-display font-semibold tracking-widest uppercase mb-3 flex items-center gap-2"
							style={{color: 'var(--color-info)'}}
						>
							<MdOutlineFileDownload  className="w-3.5 h-3.5" />
							Downloads
						</p>
						<div
							className="rounded-2xl border divide-y"
							style={{
								backgroundColor: 'var(--color-bg-secondary)',
								borderColor: 'var(--color-border)',
							}}
						>
							{release.assets.map((asset) => (
								<AssetRow key={asset.id} asset={asset} />
							))}
						</div>
					</div>
				) : (
					<div className="rounded-2xl p-4 text-center" style={{backgroundColor: 'var(--color-bg-secondary)'}}>
						<p className="text-sm text-muted">
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
				)
			}
		</div>
	)

}

