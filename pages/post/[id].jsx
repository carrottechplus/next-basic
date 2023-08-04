import SubLayout from '@/components/SubLayout';
import { useRouter } from 'next/router';

function Detail() {
	const router = useRouter();
	const { id } = router.query;
	console.log(id);

	return (
		<SubLayout name={'POST'}>
			<p>{id}번 POST detail</p>
		</SubLayout>
	);
}

export default Detail;
