
function fibs (num)
{
    console.log("Hello Node, This is Fibonacci !");

    // F(n)=F(n-1)+F(n-2)
    let previousNum1=0;
    let previousNum2=1;
    let currentNum;
    const fibonacciArray=[0,1];

    for (let i=2; i<num; i++)
        {

            currentNum=previousNum1+previousNum2;
            previousNum1=previousNum2;
            previousNum2=currentNum;
            fibonacciArray.push(currentNum);

            
        }


        console.log(fibonacciArray);
}

fibs (8);