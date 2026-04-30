import {ReactElement} from "react";
import {DiApple, DiJava, DiLinux, DiWindows} from "react-icons/di";
import {formatBytes, formatDownloads} from "@/components/download/helpers";
import {MdOutlineFileDownload} from "react-icons/md";


function getPlatformLabel(name: string): { label: string; icon: ReactElement } | null {
	const lower = name.toLowerCase();
	if (lower.includes('windows') || lower.endsWith('.exe') || lower.endsWith('.msi'))
		return {label: 'Windows', icon: <DiWindows/>};
	if (lower.includes('linux') || lower.endsWith('.tar.gz') || lower.endsWith('.deb') || lower.endsWith('.rpm'))
		return {label: 'Linux', icon: <DiLinux/>};
	if (lower.includes('macos') || lower.includes('darwin') || lower.endsWith('.dmg') || lower.endsWith('.pkg'))
		return {label: 'macOS', icon: <DiApple/>};
	if (lower.endsWith('.jar'))
		return {label: 'Universal', icon: <DiJava/>};
	return null;
}

export default  function AssetRow({asset}: { asset: Asset }) {
	const platform = getPlatformLabel(asset.name);

	return (
		<a
			href={asset.browser_download_url}
			className="group flex items-center gap-4 px-4 py-3 rounded-xl border border-transparent hover:border-[var(--color-border-hover)] transition-all duration-200"
		>
			<div
				className="w-9 h-9 rounded-lg shrink-0 flex items-center justify-center text-xl group-hover:scale-110 transition-transform duration-200"
				style={{
					backgroundColor: 'color-mix(in srgb, var(--color-info) 10%, transparent)',
					color: 'var(--color-info)',
				}}
			>
				{platform?.icon ?? '📦'}
			</div>

			<div className="flex-1 min-w-0">
				<p className="text-sm font-mono text-text-primary truncate group-hover:text-primary transition-colors">
					{asset.name}
				</p>
				{platform && (
					<p className="text-xs text-text-muted mt-0.5">{platform.label}</p>
				)}
			</div>

			<div className="hidden sm:flex items-center gap-4 shrink-0 text-xs text-text-muted">
				<span>{formatBytes(asset.size)}</span>
				<span className="flex items-center gap-1">
					<MdOutlineFileDownload  className="w-3.5 h-3.5" />
					{formatDownloads(asset.download_count)}
				</span>
			</div>

			<MdOutlineFileDownload  className="w-4 h-4 shrink-0 text-primary opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-200" />

		</a>
	);
}
