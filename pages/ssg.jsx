import SubLayout from '@/components/SubLayout';

function Ssg(props) {
	return (
		<SubLayout name={'SSG'}>
			<p>SSG 방식</p>
			<h1>{props.now}</h1>
		</SubLayout>
	);
}

export async function getStaticProps() {
	console.log('ssg');
	return {
		props: { now: performance.now() },
	};
}

export default Ssg;
