// 안쪽에서 await 로 동기화 처리할 예정이므로 wrapping 함수에 async 지정
export default async function handler(req, res) {
	// await 로 동기화할거라서 then, catch 문을 쓸 수 없음, try, catch로 예외처리
	try {
		// 요청 성공 시
	} catch (err) {
		// 요청 실패 시
	}
}
