// Example 1-4. 객체가 속한 프레임이 다를 때(브라우저)

const iframe = document.createElement('iframe');
document.body.appendChild(iframe);
const FrameObject = iframe.contentWindow.Object;

console.log(Object === FrameObject);
console.log(new Object() instanceof FrameObject);
console.log(FrameObject.name);
