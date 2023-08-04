import SubLayout from '@/components/SubLayout';
import { useRouter } from 'next/router';

function detail() {
	const router = useRouter();
	const { id } = router.query;
	console.log(id);

	return (
		<SubLayout>
			<p>{id}번 POST detail</p>
		</SubLayout>
	);
}

export default detail;
