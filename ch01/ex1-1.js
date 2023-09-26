// Example 1-1. 비동기식 자바스크립트 코드 예(2가지 패턴)

readFile(filename, (data) => {
	doSomethingWithData(data, (modifiedData) => {
		writeFile(multifiedData, () => {
			console.log('done');
		});
	});
});

// or

const data = await readFile(filename);
const modifiedData = await doSomethingWithData(data);
await writeFile(filename);
console.log('done');
