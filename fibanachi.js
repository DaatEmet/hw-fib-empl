const fib = n => {
    let prev = 0, next = 1;
    for(let i = 0; i < n; i++){
        console.log(next);
        let temp = next;
        next = prev + next;
        prev = temp;
    }
    return prev;
}
let n = 8
console.log(n + ' element in the fibanachi sequence ' + fib(n));