import mongoose from 'mongoose';

//몽고 DB 접속 함수를 정의한 다음 export
export const connectMongoDB = async () => {
	// 해당 함수 호출시 몽고DB 접속해서, 접속 상태값이 1 이면 접속 성공. 0이면 실패
	if (mongoose.connection.readyState === 1) {
		// 접속 성공 객체를 promise형태로 반환값을 리턴
		// 몽고 db관련 입출력 처리할 수 있음.
		return mongoose.connection.asPromise();
	}
	// 위에서 성공 promise가 반환되면, 동기적으로 MongoDB 접속 후 접속 상태 리턴
	// 해당 함수를 MongoDB를 사용해야하는 페이지나 컴포넌트에서 호출하면 MongoDB 접속 가능

	// 접속 정보 가져오는 방법 : MongoDB 사이트 database > connect > VSCode
	// ㄴ 중요 접속 정보를 숨기기 위해서 로컬 환경변수 파일(파일 명 : .env.local)에 MongoDB 접속 URL을 등록 후 호출
	return await mongoose.connect(process.env.MONGO_URI);
};
