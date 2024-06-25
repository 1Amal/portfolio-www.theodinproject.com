
function fibs (num)
{
    console.log("Hello Node, This is Fibonacci !");

    // F(n)=F(n-1)+F(n-2)

    for (let i=0; i<num; i++)
        {
            const fibonacciArray=[];
            let fibonacci=(num-1)+(num-2);
            fibonacciArray.push(fibonacci);
            console.log(fibonacciArray);
        }



}

fibs (8);