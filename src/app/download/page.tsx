import type {Metadata} from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Main from '@/components/layout/Main';
import {FaExternalLinkAlt} from "react-icons/fa";
import ReleaseCard from "@/components/download/ReleaseCard";

export const metadata: Metadata = {
	title: 'Download',
	description: 'Download the latest Temper MC server software.',
};

const REPO_OWNER = 'temper-mc';
const REPO_NAME = 'temper';
const MAX_RELEASES = 6;


async function getReleases(): Promise<Release[]> {
	const res = await fetch(
		`https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/releases?per_page=${MAX_RELEASES}`,
		{
			headers: {
				Accept: 'application/vnd.github+json',
			},
			next: {revalidate: 3600},
		}
	);
	if (!res.ok) throw new Error(`GitHub API ${res.status}`);
	const data: Release[] = await res.json();
	return data.filter((r) => !r.draft);
}

// ─── Page ─────────────────────────────────────────────────────
export default async function DownloadPage() {
	const releases = await getReleases() ?? [];
	const latest = releases[0] ?? null;
	const previous = releases.slice(1);

	return (
		<div className="min-h-screen">
			<Header/>

			<Main>

				{/* ── Hero ── */}
				<section className="mb-16 text-center animate-fade-in">
					<p
						className="inline-block text-sm font-display font-semibold tracking-widest uppercase mb-4 px-4 py-1.5 rounded-full border border-[var(--color-border-hover)]"
						style={{color: 'var(--color-info)'}}
					>
						Download
					</p>
					<h1 className="hero-header mb-4 animate-slide-up">
						Get Temper MC
					</h1>
					<p className="text-lg text-[var(--color-text-secondary)] max-w-xl mx-auto animate-slide-up animate-delay-100">
						Download the latest release or browse previous versions below.
						{latest && (
							<> Current stable:{' '}
								<span className="font-mono font-semibold" style={{color: 'var(--color-primary)'}}>
									{latest.tag_name}
								</span>
							</>
						)}
					</p>
				</section>

				{releases.length === 0 ? (
					<div className="card text-center py-20">
						<p className="text-[var(--color-text-muted)] mb-4 text-lg">
							Couldn't load releases right now.
						</p>
						<a
							href={`https://github.com/${REPO_OWNER}/${REPO_NAME}/releases`}
							target="_blank"
							rel="noopener noreferrer"
							className="btn-cta-primary inline-block"
						>
							View on GitHub
						</a>
					</div>
				) : (
					<div className="space-y-6">

						{/* Latest */}
						{latest && (
							<section className="animate-slide-up animate-delay-100">
								<div className="flex items-center gap-3 mb-4">
									<div
										className="w-1 h-6 rounded-full"
										style={{background: 'linear-gradient(to bottom, var(--color-info), var(--color-primary))'}}
									/>
									<h2 className="font-display font-semibold text-xl text-[var(--color-text-primary)]">
										Latest Release
									</h2>
								</div>
								<ReleaseCard release={latest} isLatest={true}/>
							</section>
						)}

						{/* Previous */}
						{previous.length > 0 && (
							<section className="animate-slide-up animate-delay-200">
								<div className="flex items-center gap-3 mb-4 mt-8">
									<div
										className="w-1 h-6 rounded-full"
										style={{background: 'linear-gradient(to bottom, var(--color-surface), var(--color-secondary))'}}
									/>
									<h2 className="font-display font-semibold text-xl text-text-primary">
										Previous Releases
									</h2>
								</div>
								<div className="space-y-4">
									{previous.map((release, i) => (
										<div
											key={release.id}
											className="animate-slide-up"
											style={{animationDelay: `${(i + 3) * 75}ms`}}
										>
											<ReleaseCard release={release} isLatest={false}/>
										</div>
									))}
								</div>
							</section>
						)}

						{/* All releases */}
						<div className="text-center pt-4 animate-slide-up animate-delay-400">
							<a
								href={`https://github.com/${REPO_OWNER}/${REPO_NAME}/releases`}
								target="_blank"
								rel="noopener noreferrer"
								className="text-sm font-display font-medium inline-flex items-center gap-1.5 transition-opacity duration-200 hover:opacity-70"
								style={{color: 'var(--color-info)'}}
							>
								View all releases on GitHub
								<FaExternalLinkAlt/>
							</a>
						</div>
					</div>
				)}

			</Main>

			<Footer/>
		</div>
	);
}