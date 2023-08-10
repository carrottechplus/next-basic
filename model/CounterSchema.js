import mongoose from 'mongoose';

// 몽구스의 스키마 생성자 함수로 글 저장 객체에 적용될 강제 틀 적용
const counterSchema = new mongoose.Schema(
	{
		name: String,
		communityNum: Number,
	},
	{ collection: 'Counter' }
);

// 스키마를 적용한 모델 생성 함수를 내보냄
// 모델 인스턴스가 한번 컴파일 되면 overWrite가 불가하다는 콘솔 에러 해결
// 오류 원인 : 이미 한번 생성된 컬렉션임에도 불구하고 데이터 변경 요청이 있을 떄 마다 새로운 컬렉션 생성 시도
// 해결 : 해당 컬렉션이 없을때만 생성하고 이미 있으면 기존 컬렉션 호출한다
const Counter = mongoose.models.Counter || mongoose.model('Counter', counterSchema);
export { Counter };
