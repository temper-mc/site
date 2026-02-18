import PolicyLayout from "@/components/PolicyLayout";

const SECTIONS = [
	{
		id: "definition",
		title: "De Natura Cookiorum",
		body: "Cookia sunt parva fragmenta informationis quae in instrumento tuo servantur ad functionem situs et memoriam usus conservandam.",
	},
	{
		id: "types",
		title: "Genera Cookiorum",
		body: "Hoc situs utitur cookiis essentialibus, analyticis, praelationis, et securitatis ad operationem ordinatam praestandam.",
	},
	{
		id: "purpose",
		title: "Finis Usus",
		body: "Cookia ad sessiones conservandas, usum analysandum, et experientiam usoris meliorandam adhibentur.",
	},
	{
		id: "management",
		title: "Administratio Cookiorum",
		body: "Usor potest cookia per configurationes navigatoris sui delere vel inhibere ad libitum.",
	},
	{
		id: "third-party",
		title: "Cookia Partium Tertiarum",
		body: "Servitia externa possunt propria cookia imponere, quorum administratio a nobis non regitur.",
	},
];


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
