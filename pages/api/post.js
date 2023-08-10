import { connectMongoDB } from '@/libs/MongoConnect';
import { Community } from '@/model/CommunitySchema';
import { Counter } from '@/model/CounterSchema';

export default async function handler(req, res) {
	// 전달된 요청 방식이 GET일 때 처리 (글 호출)
	if (req.method === 'GET') {
		try {
			await connectMongoDB();
			const community = await Community.find();
			res.status(200).send(community);
		} catch (err) {
			res.status(400).send({ err });
		}
	}

	// 전달된 요청 방식이 POST일 때 처리 (글 저장)
	if (req.method === 'POST') {
		// 클라이언트로부터 전달받은 데이터 정보 {title, counter}
		const temp = req.body;

		try {
			// 요청 성공 시
			await connectMongoDB();
			// res.status(200).send('success');

			Counter.findOne({ name: 'counter' })
				.exec()
				.then((doc) => {
					// 카운터 모델에서 가져온 고유번호를 클라이언트에서 넘어온 데이터에 추가
					temp.communityNum = doc.communityNum;
					// 위에서 결합된 객체를 Community Model객체로 DB에 저장
					const CommunityModel = new Community(temp);
					CommunityModel.save().then(() => {
						// 글 저장이 완료되면 Counter 모델의 communityNum값을 1 증가
						Counter.updateOne({ name: 'counter' }, { $inc: { communityNum: 1 } })
							.exec()
							.then(() => {
								// 카운터 정보값도 갱신 완료되면, 클라이언트 쪽에 저장 성공 응답 전달
								res.json({ success: true });
							})
							.catch((err) => res.json({ success: false, err: err }));
					});
				});
		} catch (err) {
			// 요청 실패 시
			res.status(400).send({ err });
		}
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
