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

const headers = {Accept: 'application/vnd.github+json'};

const releaseData: Release[] = await fetch(
	`https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/releases?per_page=${MAX_RELEASES}`,
	{
		headers: headers,
		next: { revalidate: 60 },
	}
)
	.then(r => {
		if (!r.ok) throw new Error(`GitHub API error: ${r.status} ${r.statusText}`);
		return r.json();
	})
	.then((data: Release[]) => {
		if (!Array.isArray(data)) return [];
		return data.filter((r: Release) => !r.draft);
	})
	.catch(() => []);

const latest = releaseData[0] ?? null;  // ← was releaseData, missing [0]
const previous = releaseData.slice(1);


// ─── Page ─────────────────────────────────────────────────────
export default async function DownloadPage() {
	return (
		<div className="min-h-screen">
			<Header/>

			<Main>

				{/* ── Hero ── */}
				<section className="mb-16 text-center animate-fade-in">
					<p
						className="inline-block text-sm font-display font-semibold tracking-widest uppercase mb-4 px-4 py-1.5 rounded-full border border-border-hover"
						style={{color: 'var(--color-info)'}}
					>
						Download
					</p>
					<h1 className="hero-header mb-4 animate-slide-up">
						Get Temper MC
					</h1>
					<p className="text-lg text-secondary max-w-xl mx-auto animate-slide-up animate-delay-100">
						Get started with Temper by downloading the latest release from our GitHub repository.
						{latest && (
							<> Current stable:{' '}
								<span className="font-mono font-semibold" style={{color: 'var(--color-primary)'}}>
									{latest.tag_name}
								</span>
							</>
						)}
					</p>
				</section>

				{releaseData.length === 0 ? (
					<div className="card text-center py-20">
						<p className="text-muted mb-4 text-lg">
							Currently no releases are available. Please check back later or visit our GitHub repository
							for the latest updates.
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
									<h2 className="font-display font-semibold text-xl text-primary">
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
									<h2 className="font-display font-semibold text-xl text-primary">
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