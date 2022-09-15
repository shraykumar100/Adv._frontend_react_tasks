const num = Number( prompt( "enter a number : " ) );
let flag = true;

if(num === 1){
    console.log("1 is neither prime noe nonprime");
}else if(num > 1){
    for (i = 2; i <= num - 1; i++){
        if (num % i == 0) {              
        flag = false;            
        break;
        }
    }
}else{
    console.log("non prime");
}
    
if(flag){
    console.log("prime");
}else{
    console.log("non-prime");
}



for ( let i = 1; i <= 200; i++ )
{
    if ( i % 15 == 0 )
    {
        console.log("FizzBuzz");
    } else if ( i % 3 == 0 )
    {
        console.log("Fizz");
    } else if ( i % 5 == 0 )
    {
        console.log("Buzz");
    } else
    {
        console.log(i);
    }
}