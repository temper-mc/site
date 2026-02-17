import PolicyLayout from "@/components/PolicyLayout";

const SECTIONS = [
	{
		id: "acceptance",
		title: "Acceptatio Conditionum",
		body: "Per usum huius situs, usor omnes conditiones hic positas acceptare censetur.",
	},
	{
		id: "eligibility",
		title: "Capacitas Iuridica",
		body: "Usor debet capacitatem legalem habere ad pacta obligatoria ineunda.",
	},
	{
		id: "conduct",
		title: "Modus Utendi",
		body: "Usor convenit se a praxi illicita, fraudulenta, vel nociva abstenturum esse.",
	},
	{
		id: "accounts",
		title: "Rationes Usoris",
		body: "Usor solus responsabilis est pro securitate credentiarum suarum.",
	},
	{
		id: "intellectual",
		title: "Proprietas Intellectualis",
		body: "Omnia opera, textus, et materiae in hoc situ iure proprietatis proteguntur.",
	},
	{
		id: "liability",
		title: "Limitatio Responsabilitatis",
		body: "Nos non respondemus pro damnis indirectis vel consequentibus ex usu ortis.",
	},
	{
		id: "termination",
		title: "Terminatio",
		body: "Accessus usoris suspendi vel terminari potest in casu violationis harum conditionum.",
	},
	{
		id: "changes",
		title: "Mutationes Conditionum",
		body: "Conditiones hae mutari possunt sine praevia notificatione ad arbitrium nostrum.",
	},
];


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
