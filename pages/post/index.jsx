import SubLayout from '@/components/SubLayout';
import axios from 'axios';
import { useEffect } from 'react';

function Post() {
	useEffect(() => {
		axios.get('/api/post').then((res) => console.log(res));
	}, []);
	return (
		<SubLayout name={'POST'}>
			<p>POST</p>
		</SubLayout>
	);
}

export default Post;
