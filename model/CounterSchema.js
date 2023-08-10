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
const Counter = mongoose.model('Counter', counterSchema);
export { Counter };
