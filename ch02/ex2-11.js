// Example 2-11. 명령어 분배 패턴 예시

const commands = {
  square_sum(max) {
    let sum = 0;
    for (let i = 0; i < max; i++) sum += Math.sqrt(i);
    return sum;
  },
  fibonacci(limit) {
    let prev = 1n, next = 0n, swap;
    while (limit) {
      swap = prev; prev = prev + next;
      next = swap; limit--;
    }
    return String(next);
  }
};

function display(method, args) {
  if (commands.hasOwnProperty(method)) {
    return commands[method](...args);
  }
  throw new TypeError(`Command ${method} not defined!`);
}
