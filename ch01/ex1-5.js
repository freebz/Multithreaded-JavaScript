// Example 1-5. 객체가 속한 컨텍스트가 다를 때(Node.js)

const vm = require('vm');
const ContextObject = vm.runInNewContext('Object');

console.log(Object === ContextObject);
console.log(new Object() instanceof ContextObject);
console.log(ContextObject.name);
