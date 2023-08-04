import SubLayout from '@/components/SubLayout';

function Isr(props) {
	return (
		<SubLayout name={'ISR'}>
			<p>ISR방식</p>
			<h1>{props.now}</h1>
		</SubLayout>
	);
}

export async function getStaticProps() {
	console.log('isr');

	return {
		props: { now: performance.now() },
		revalidate: 5,
	};
}

export default Isr;
