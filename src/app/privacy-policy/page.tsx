import PolicyLayout from "@/components/PolicyLayout";

const SECTIONS = [
	{
		id: "collection",
		title: "Collectio Informationum",
		body: "Informationes personales colliguntur solum cum necessariae sunt ad officia nostra praestanda.",
	},
	{
		id: "usage",
		title: "Usus Datorum",
		body: "Data collecta ad administrationem, sustentationem, et progressionem servitiorum adhibentur.",
	},
	{
		id: "storage",
		title: "Conservatio Datorum",
		body: "Informationes secure servantur et tantisper retinentur quantum lex vel necessitas postulat.",
	},
	{
		id: "sharing",
		title: "Communicatio Datorum",
		body: "Data personalia non venduntur nec locantur partibus tertiis nisi lege exigente.",
	},
	{
		id: "rights",
		title: "Iura Usoris",
		body: "Usor ius habet accessus, correctionis, et deletionis datorum personalium.",
	},
	{
		id: "contact",
		title: "Contactus",
		body: "Ad quaestiones de secreto pertinentes, usor nos per canales officiales contingere potest.",
	},
];


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
