const arr1 = [ 2, 7, 3, 8, 1, 5, 7, 3, 7, 4, 8, 2, 5 ];
let sum = 0;
arr1.forEach((element) => {
    sum = element + sum;
} );

console.log(`sum of this array is ${sum}`);


const arr2 = [ 4, 2, 6, 25, 23, 52, 3, 6, 34, 332, 5, 7, 23, 5, 3 ];

let largest = 0;
for ( let i = 0; i < arr2.length; i++ )
arr2.forEach( element =>
{
    if ( element > largest ) largest = element;
} )

console.log(`largest element is ${largest}`);