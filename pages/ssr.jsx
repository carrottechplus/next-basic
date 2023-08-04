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
	console.log('ssr');
	return {
		props: { now: performance.now() },
	};
}
// 이 방식은 build가 필요하진 않음. 동작 방식은 csr과 비슷하게 새로고침할 떄 마다 실시간으로 숫자가 바뀜. 이 작업은 브라우저단이 아닌 서버단에서 하기 떄문에 pre-render 한 다음 출력, full-load 되는 것이 아닌 바뀐 데이터만 서버에서 가져옴

export default Ssr;
