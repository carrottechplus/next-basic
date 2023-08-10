import { connectMongoDB } from '@/libs/MongoConnect';

export default async function handler(req, res) {
	try {
		// 요청 성공 시
		const DB = await connectMongoDB();
		// res.status(200).send('success');
	} catch (err) {
		// 요청 실패 시
		res.status(400).send({ err });
	}
}

/*
데이터 저장 작업 순서
1. 저장할 데이터의 구조에 맞게 스키마 생성
2. api라우터에서 스키마 적용된 모델객체에 클라이언트로부터 전달받은 데이터를 바인딩 후, DB에 저장. 그 후 응답 성공 클라이언트로 전송
2-1. 클라이언트에서 post 요청 받음.
2-2. 카운터모델에서 communityNum 값을 가져온 뒤, 클라이언트로 전달받은 객체와 결합
2-3. 결합된 객체를 Post모델로 저장
2-4. 저장이 완료되면 다시 Counter값을 1씩 증가
*/
