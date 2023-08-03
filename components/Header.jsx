import Link from 'next/link';

function Header() {
	return (
		<header>
			<h1>
				<Link href='/'>Logo</Link>
			</h1>

			<ul id='gnb'>
				<li>
					<Link href='/ssg'>SSG</Link>
				</li>
				<li>
					<Link href='/ssr'>SSR</Link>
				</li>
				<li>
					<Link href='/isr'>ISR</Link>
				</li>
			</ul>
		</header>
	);
}

export default Header;
