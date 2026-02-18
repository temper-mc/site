import PolicyLayout from "@/components/PolicyLayout";
import type {Metadata} from "next";

const SECTIONS = [
	{
		id: "definition",
		title: "Lorem ipsum",
		body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget justo sagittis, suscipit massa nec, varius dolor. ",
	},
	{
		id: "types",
		title: "Lorem ipsum",
		body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget justo sagittis, suscipit massa nec, varius dolor. ",
	},
	{
		id: "purpose",
		title: "Lorem ipsum",
		body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget justo sagittis, suscipit massa nec, varius dolor. ",
	},
	{
		id: "management",
		title: "Lorem ipsum",
		body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget justo sagittis, suscipit massa nec, varius dolor. ",
	},
	{
		id: "third-party",
		title: "Lorem ipsum",
		body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget justo sagittis, suscipit massa nec, varius dolor. ",
	},
];

export const metadata: Metadata = {
	title: 'Cookie Policy',
	description: 'Legal information about cookies on this website.',
};

export default function CookiePolicyPage() {
	return (
		<PolicyLayout
			title="Cookie Policy"
			description="Information about how cookies are used on this website."
			lastUpdated="17 February 2026"
			sections={SECTIONS}
		/>
	);
}
