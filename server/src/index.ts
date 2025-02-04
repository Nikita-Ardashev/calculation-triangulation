import express from 'express';
import cors from 'cors';

interface ICalculate {
	width: number;
	height: number;
	length: number;
}

const app = express();

app.use(cors());
app.use(express.json());

app.post('/api/calc', (req, res) => {
	const { length, width, height } = req.body as ICalculate;

	const vertices = [
		0,
		0,
		0,
		length,
		0,
		0,
		length,
		height,
		0,
		0,
		0,
		0,
		length,
		height,
		0,
		0,
		height,
		0,

		0,
		0,
		width,
		length,
		0,
		width,
		length,
		height,
		width,
		0,
		0,
		width,
		length,
		height,
		width,
		0,
		height,
		width,

		0,
		0,
		0,
		0,
		0,
		width,
		0,
		height,
		width,
		0,
		0,
		0,
		0,
		height,
		width,
		0,
		height,
		0,

		length,
		0,
		0,
		length,
		0,
		width,
		length,
		height,
		width,
		length,
		0,
		0,
		length,
		height,
		width,
		length,
		height,
		0,

		0,
		height,
		0,
		length,
		height,
		0,
		length,
		height,
		width,
		0,
		height,
		0,
		length,
		height,
		width,
		0,
		height,
		width,

		0,
		0,
		0,
		length,
		0,
		0,
		length,
		0,
		width,
		0,
		0,
		0,
		length,
		0,
		width,
		0,
		0,
		width,
	].map(Number);

	res.json({ vertices });
});

app.listen(5000, () => {
	console.log('Server is running on port 5000');
});
