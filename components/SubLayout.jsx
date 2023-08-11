import Head from 'next/head';
import Header from './Header';
import styles from './SubLayout.module.scss';
import { Orbitron, Noto_Sans_KR } from 'next/font/google';
import clsx from 'clsx';

const orbitron = Orbitron({ subsets: ['latin'], weight: ['400', '500'], preload: true, variable: '--orbitron' });
const notoSans = Noto_Sans_KR({ subsets: ['latin'], weight: ['300'], preload: true, variable: '--notoSans' });
console.log(notoSans);

function SubLayout(props) {
	return (
		<>
			<Head>
				<title>{props.name || ''}</title>
			</Head>
			<section>
				<Header />
				<div className={styles && styles.subLayout}>
					<h1 className={orbitron && orbitron.className}>{props.name || ''}</h1>
					<p className={notoSans && notoSans.className}>LAYOUT TITLE</p>
					{props.children}
				</div>
			</section>
		</>
	);
}

export default SubLayout;
