import NavInteractive from './NavInteractive';

const navLinks = [
	{href: '/', label: 'Home'},
	{href: '/about', label: 'About'},
	{href: '/download', label: 'Download'},
	{href: 'https://docs.temper-mc.com/', label: 'Documentation'},
];

export default function Header() {
	return <NavInteractive navLinks={navLinks}/>;
}