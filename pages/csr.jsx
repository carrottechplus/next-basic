import SubLayout from '@/components/SubLayout';
import { useEffect, useState } from 'react';

function Csr() {
	console.log('csr');

	const [Now, setNow] = useState('');

	useEffect(() => {
		setNow(performance.now());
	}, []);

	return (
		<SubLayout name={'CSR'}>
			<p>CSR방식</p>
			<h1>{Now}</h1>
		</SubLayout>
	);
}

export default Csr;
