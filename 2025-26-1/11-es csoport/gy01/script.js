var a1 = 'asd'; // 
let a2 = 13; // 
const a3 = 'asd';

/* 
    Többsoros komment 
*/
// Egysoros komment

console.log('asd"aspfgdgdsg', "  afőosdőgosfg' aőofsdf  ", `a2 is ${a2}`);
/*
console.log(5 + 7) // 12
console.log(5 + 'alma')
console.log(5 + '15')
console.log('5' + 12)
console.log(5 - '5')
console.log('5' - 3)
console.log('elso' + 'masodik')
console.log('elso' - 'masodik')
*/ 
console.log(5/0) // 12
console.log(5*'alma')
console.log(5*'5')
console.log(Boolean(''))
console.log(true && false)
console.log(true || false)

console.log(true && Boolean('alma'))
console.log(true && 'alma')
console.log(true && 15)
console.log('alma' && true)
console.log(false && 'alma')

if( 'alma' ) {    
    console.log('1. elágazás')  
}

if( 0 ) {
    console.log('2. elágazás')
}

if ('0') {
    console.log('3. elágazás')
}

// Null, undefined
console.log(null);
console.log(undefined);
console.log(null == undefined);
console.log(null && true);

if(null || undefined)
    console.log('3. elágazás')

console.log(null + '5');
console.log(null + 5);
console.log(null - '5'); // 0 - 5
console.log(5 / null)

console.log(undefined + '5');
console.log(undefined + 5);
console.log(undefined - '5');
console.log(5 / undefined)

// Egyenlőségvizsgálat
console.log(null == undefined);
console.log(null === undefined);

// Tömbök
let arr = [ 'apple', 5, true, [null, 'string'], false || true ]

console.log(arr);
console.log(arr[2])

arr[50] = 15;

console.log(arr);

arr['alma'] = 20;

console.log(arr);

arr[-1] = 25

console.log(arr);
console.log(arr['length']);

// Loop
for(let i = 0; i < arr.length; i++)
{
    console.log(arr[i]);
}

for(let elem of arr) // Értékeket rak az elem változóba
{
    console.log(elem)
}

for ( let elem in arr)
{
    console.log(elem, arr[elem]);
}
