import SubLayout from '@/components/SubLayout';
import axios from 'axios';
import { useState } from 'react';

function Post() {
	const [Ttl, setTtl] = useState('');
	const [Con, setCon] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		const item = {
			title: TTl,
			content: Con,
		};

		axios
			.post('/api/post', item)
			.then((res) => {
				console.log(res);
				alert('글이 저장되었습니다.');
			})
			.catch((err) => {
				console.log(err);
				alert('글이 저장되지 않았습니다.');
			});
	};

	return (
		<SubLayout name={'POST'}>
			<p>POST INTRO</p>
			<div className='inputBox'>
				<form onSubmit={handleSubmit}>
					<input type='text' placeholder='제목을 입력하세요.' value={Ttl} onChange={(e) => setTtl(e.target.value)} />
					<textarea
						cols='30'
						rows='3'
						placeholder='내용을 입력하세요.'
						value={Con}
						onChange={(e) => setCon(e.target.value)}
					></textarea>
					<nav>
						<input type='reset' defaultValue='CANCEL' />
						<input type='submit' defaultValue='SUBMIT' />
					</nav>
				</form>
			</div>
		</SubLayout>
	);
}

export default Post;
