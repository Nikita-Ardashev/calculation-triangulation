import { flow, Instance, t } from 'mobx-state-tree';
import axios from 'axios';
import { ICalculate } from '@/components/form';
const storeModel = t
	.model({
		theme: t.union(t.literal('light'), t.literal('dark')),
		vertices: t.array(t.number),
	})
	.views((self) => ({
		get getTheme() {
			return self.theme;
		},
		get getVertices() {
			return self.vertices;
		},
	}))
	.actions((self) => ({
		setVertices: flow(function* (args: ICalculate) {
			try {
				const req = yield axios.post<number[], number[]>('/api/calc', args);
				self.vertices = req.data.vertices;
			} catch (error) {
				console.error(error);
			}
		}),
		setTheme(theme: Instance<typeof self.theme> = 'light') {
			self.theme = theme;
		},
	}));

export const store = storeModel.create({
	theme: 'light',
	vertices: [
		0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0,
		0, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 1, 0, 1, 0,
		0, 1, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 0,
		1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1,
	],
});
