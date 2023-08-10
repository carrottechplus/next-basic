export default function abc(req, res) {
	console.log(req.method, 'req.method');
	console.log(req.body, 'req.body');
	res.status(200).json({ name: 'John Doe' });
}
