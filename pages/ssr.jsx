import SubLayout from '@/components/SubLayout';

function Ssr(props) {
	return (
		<SubLayout name={'SSR'}>
			<p>SSR 방식</p>
			<h1>{props.now}</h1>
		</SubLayout>
	);
}

export async function getServerSideProps() {
	return {
		props: { now: performance.now() },
	};
}

export default Ssr;
