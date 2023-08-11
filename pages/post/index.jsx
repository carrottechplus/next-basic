import SubLayout from '@/components/SubLayout';
import { useGlobalData } from '@/hooks/useGlobalContext';
import axios from 'axios';
import { useEffect, useState } from 'react';

function Post() {
	const { LoginInfo } = useGlobalData();
	console.log(LoginInfo); // {displayName: '', uid: ''}
	const [Ttl, setTtl] = useState('');
	const [Con, setCon] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		const item = { title: Ttl, content: Con };

		axios
			.post('/api/post', item)
			.then((res) => {
				console.log('글 저장', res);
				alert('글이 저장되었습니다.');
			})
			.catch((err) => {
				console.log(err);
				alert('글이 저장되지 않았습니다.');
			});
	};

	useEffect(() => {
		axios
			.get('/api/post')
			.then((json) => console.log('get', json))
			.catch((err) => console.log(err));
	}, []);

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
