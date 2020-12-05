import { checkCode } from '@src/utils';

const test = () => {
	console.log('start new test')

	const isResultExpected = (params, expected) => {
		let result = checkCode(params[0], params[1]);
		if (result.goodColors == expected[1] && result.goodPos == expected[0] ) {
			return true
		}
		console.log(result);
		return false
	}

	const testArray = [
		{params: [[0,0,0,0], [0,0,0,0]], expected: [4,0]},
		{params: [[0,1,2,3], [3,2,1,0]], expected: [0,4]},
		{params: [[0,1,1,0], [1,0,0,1]], expected: [0,4]},
		{params: [[1,2,2,1], [1,2,1,2]], expected: [2,2]},
		{params: [[1,3,3,4], [1,0,4,3]], expected: [1,2]},
	]

	testArray.forEach((el) => {
		console.log(isResultExpected(el.params, el.expected));
	})
}

export { test };