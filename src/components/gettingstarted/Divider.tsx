export default function Divider({gradient}: { gradient: string }) {
	return <div className="w-1 h-6 rounded-full shrink-0" style={{background: gradient}}/>;
}
