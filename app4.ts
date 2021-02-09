function add(n1: number, n2: number) {
    return n1 + n2;
}

function printResult(num: number): void {
    console.log('Result: ' + num);
}

function addAndHandle(num1: number, num2: number, cb: (num: number) => void) {
    const result = num1 + num2;
    cb(result);
}

printResult(add(5, 12));

// let someValue: undefined;

let combineValues: (a: number, b: number) => number;

combineValues = add;
// combineValues = printResult;
// combineValues = 5;

console.log(combineValues(8, 8));

addAndHandle(10, 20, (result) => {
    console.log(result);
});