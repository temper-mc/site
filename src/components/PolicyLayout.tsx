import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Main from "@/components/layout/Main";

/* ===============================
   Types
================================ */

export type PolicySection = {
	id: string;
	title: string;
	body: string;
};

type PolicyLayoutProps = {
	title: string;
	description?: string;
	lastUpdated: string;
	sections: PolicySection[];
};

/* ===============================
   Layout
================================ */

export default function PolicyLayout({
	                                     title,
	                                     description,
	                                     lastUpdated,
	                                     sections,
                                     }: PolicyLayoutProps) {
	return (
		<>
			<Header />

			<Main>
				<article className="policy-container">

					{/* Header */}
					<header className="policy-header">
						<h1>{title}</h1>

						{description && (
							<p className="policy-description">
								{description}
							</p>
						)}

						<p className="policy-meta">
							Last updated: {lastUpdated}
						</p>
					</header>

					{/* Content */}
					<section className="policy-content">
						{sections.map((section, index) => (
							<PolicySection
								key={section.id}
								index={index}
								section={section}
							/>
						))}
					</section>

				</article>
			</Main>

			<Footer />
		</>
	);
}

/* ===============================
   Section
================================ */

type SectionProps = {
	section: PolicySection;
	index: number;
};

function PolicySection({ section, index }: SectionProps) {
	return (
		<section
			id={section.id}
			className="policy-section"
		>
			<h2>
				{index + 1}. {section.title}
			</h2>

			<p>{section.body}</p>
		</section>
	);
}
