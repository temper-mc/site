import NavInteractive from './NavInteractive';

const navLinks = [
	{ href: '/', label: 'Home' },
	{ href: '/about', label: 'About' },
	{ href: '/download', label: 'Download' },
	{ href: '/faq', label: 'FAQ' },
];

export default function Header() {
	return <NavInteractive navLinks={navLinks} />;
}