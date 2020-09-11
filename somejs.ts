const printOutput = (a: any ) => console.log(a);
const addNum = (a:number , b:number) => a+b;
printOutput(addNum(1,2));

const hobbies = ['a','b']
const ac = ['c',...hobbies]
printOutput(ac);

const person2 = {
    a: 'a',
    b: 'ba'
};

const copiedP = {...person2};
printOutput(copiedP);