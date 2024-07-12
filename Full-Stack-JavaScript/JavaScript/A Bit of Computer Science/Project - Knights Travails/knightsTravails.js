// 2024, Amal Kariyawasam
/*Pseudo Code
Knight can move in two dimensional coordinates
Its basic move is two steps forward/backward and one step to the side or one step forward and two steps to the side. It can face any direction.
Create a Binary search tree with the Chessboard coordinates
when start and end coordinates are received first find the start of the coordinates
Next find the End Coordinates
While searching through the graph find all the coordinates that search has to go through 

*/
function knightMoves (startCordinate,EndCordinate)
{
const rowArray=[0,1,2,3,4,5,6,7]
const columnArray=[0,1,2,3,4,5,6,7];
const chessBoardSize=8*8;
let ChessBoardArray;

for (let i=0;i<=rowArray.length;i++)
{
    ChessBoardArray=new Array(chessBoardSize).fill(12);

}

return ChessBoardArray;

}

console.log(knightMoves([0,0],[1,2]));