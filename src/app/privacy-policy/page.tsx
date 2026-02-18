import PolicyLayout from "@/components/PolicyLayout";
import type {Metadata} from "next";

const SECTIONS = [
	{
		id: "collection",
		title: "Lorem ipsum",
		body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget justo sagittis, suscipit massa nec, varius dolor. ",
	},
	{
		id: "usage",
		title: "Lorem ipsum",
		body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget justo sagittis, suscipit massa nec, varius dolor. ",
	},
	{
		id: "storage",
		title: "Lorem ipsum",
		body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget justo sagittis, suscipit massa nec, varius dolor. ",
	},
	{
		id: "sharing",
		title: "Lorem ipsum",
		body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget justo sagittis, suscipit massa nec, varius dolor. ",
	},
	{
		id: "rights",
		title: "Lorem ipsum",
		body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget justo sagittis, suscipit massa nec, varius dolor. ",
	},
	{
		id: "contact",
		title: "Lorem ipsum",
		body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget justo sagittis, suscipit massa nec, varius dolor. ",
	},
];

export const metadata: Metadata = {
	title: 'Privacy Policy',
	description: 'Privacy Policy of Temper MC.',
};

export default function PrivacyPolicyPage() {
	return (
		<PolicyLayout
			title="Privacy Policy"
			description="How we collect, use, and protect personal information."
			lastUpdated="17 February 2026"
			sections={SECTIONS}
		/>
	);
}
