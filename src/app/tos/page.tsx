import PolicyLayout from "@/components/PolicyLayout";
import type {Metadata} from "next";

const SECTIONS = [
	{
		id: "acceptance",
		title: "Lorem ipsum",
		body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget justo sagittis, suscipit massa nec, varius dolor. ",
	},
	{
		id: "eligibility",
		title: "Lorem ipsum",
		body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget justo sagittis, suscipit massa nec, varius dolor. ",
	},
	{
		id: "conduct",
		title: "Lorem ipsum",
		body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget justo sagittis, suscipit massa nec, varius dolor. ",
	},
	{
		id: "accounts",
		title: "Lorem ipsum",
		body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget justo sagittis, suscipit massa nec, varius dolor. ",
	},
	{
		id: "intellectual",
		title: "Lorem ipsum",
		body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget justo sagittis, suscipit massa nec, varius dolor. ",
	},
	{
		id: "liability",
		title: "Lorem ipsum",
		body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget justo sagittis, suscipit massa nec, varius dolor. ",
	},
	{
		id: "termination",
		title: "Lorem ipsum",
		body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget justo sagittis, suscipit massa nec, varius dolor. ",
	},
	{
		id: "changes",
		title: "Lorem ipsum",
		body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget justo sagittis, suscipit massa nec, varius dolor. ",
	},
];

export const metadata: Metadata = {
	title: 'Terms of Service',
	description: 'Terms of Service of Temper MC',
};

export default function TermsPage() {
	return (
		<PolicyLayout
			title="Terms of Service"
			description="Rules and conditions for using this website."
			lastUpdated="17 February 2026"
			sections={SECTIONS}
		/>
	);
}
