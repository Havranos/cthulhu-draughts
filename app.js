// We are using fact, that html board and var board have the same indexing.


// PROBLEM: allow kill when near border check if area in second row is empty (ie it dont know its near border)
//Solution (i think): change array[] to array[][] and check if new position is outside.

const container = document.querySelector("table.board");
const boardElementList = container.querySelectorAll("td > p");
var figures = ["black_pawn", "white_pawn"];
var allow_moves = [];
var allow_kill_moves = [];
var allow_pawns = [];
var ifKill = false;
var currPawnPosition = 0;
var currPlayer = 0;
console.log("start");
// standard beginning board setting in droughts
var board = [0, 1, 0, 1, 0, 1, 0, 1, 
    1, 0, 1, 0, 1, 0, 1, 0, 
    0, 1, 0, 1, 0, 1, 0, 1, 
    0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0,
    -1, 0, -1, 0, -1, 0, -1, 0, 
    0, -1, 0, -1, 0, -1, 0, -1, 
    -1, 0, -1, 0, -1, 0, -1, 0];


console.log(board);

function trans(str)
{
    translate = {
        "a": 0, "b": 1, "c": 2, "d": 3, "e": 4, "f": 5, "g": 6, "h": 7
    }
    return Math.abs(str[1] - 8)* 8 + translate[str[0]];
}

function nToXY(n)
{
    x = n%8;
    y = (n-x)/8;
    return [x,y];
}

function XYTon(x, y)
{
    n = y*8 + x;
    return n;
}


function setElement(n)
{   
    for( let i = 0; i < figures.length; i++)
    {
        boardElementList[n].classList.remove(figures[i]);
    }
    if(board[n] === -1)
    {
        boardElementList[n].classList.add(figures[0]);  
    }
    if(board[n] === 1)
    {
        boardElementList[n].classList.add(figures[1]);   
    }
}


// Main function to adding more figures.

function checkAvailableMoves(boardLocation)
{
    if(board[boardLocation]===1 && currPlayer === 0)
    {
        whitePawnMoves(boardLocation)
    }
    if(board[boardLocation]===-1 && currPlayer === 1)
    {
        blackPawnMoves(boardLocation)
    }
}

function checkAvailableKillMoves(boardLocation)
{
    if(board[boardLocation]===1 && currPlayer === 0)
    {
        whitePawnKillMoves(boardLocation)
    }
    if(board[boardLocation]===-1 && currPlayer === 1)
    {
        blackPawnKillMoves(boardLocation)
    }
}





// Move drawing section

// we assume that all moves marks are gone from board
function drewAvailableMoves()
{
    for( let i = 0; i < allow_moves.length; i++)
    {
        boardElementList[allow_moves[i]].classList.add("move")
    }
}

function removeAvailableMoves()
{
    for( let i = 0; i < boardElementList.length; i++)
    {

        boardElementList[i].classList.remove("move");
    }
    allow_moves.length = 0;
}

function drewAvailableKillMoves()
{
    for( let i = 0; i < allow_kill_moves.length; i++)
    {
        boardElementList[allow_kill_moves[i]].classList.add("kill_move")
    }
}

function removeAvailableKillMoves()
{
    for( let i = 0; i < boardElementList.length; i++)
    {

        boardElementList[i].classList.remove("kill_move");
    }
    allow_kill_moves.length = 0;
}

// End of move drawing section



// Main function. On click concept.

function userClickFunction(userChoice)
{

    boardNumber = trans(userChoice);
    // console.log(allow_moves.length);
    // console.log(allow_pawns.length);
    if(allow_pawns.length!==0)
    {
        if(allow_pawns.includes(boardNumber))
        {
            //console.log(allow_kill_moves)
            removeAvailableMoves();
            removeAvailableKillMoves();
            checkAvailableKillMoves(boardNumber);
            drewAvailableKillMoves();
            //console.log(allow_kill_moves)
            currPawnPosition = boardNumber;
            allow_pawns.length = 0;
        }

    }
    else if(allow_moves.length == 0 && allow_kill_moves.length ==0)
    {

        checkAvailableMoves(boardNumber);
        checkAvailableKillMoves(boardNumber);
        drewAvailableMoves();
        drewAvailableKillMoves();
        currPawnPosition = boardNumber;

        // console.log(allow_moves)
        // console.log(allow_kill_moves)
        // console.log(boardNumber);
    }
    else if(allow_moves.includes(boardNumber))
    {
        board[boardNumber] = board[currPawnPosition]
        board[currPawnPosition] = 0;
        setElement(currPawnPosition);
        setElement(boardNumber);
        removeAvailableMoves();
        removeAvailableKillMoves();
        playerChange()


    }
    else if(allow_kill_moves.includes(boardNumber))
    {
        board[boardNumber] = board[currPawnPosition]
        board[currPawnPosition] = 0;
        setElement(currPawnPosition);
        killFunction(currPawnPosition, boardNumber);
        setElement(boardNumber);
        removeAvailableMoves();
        removeAvailableKillMoves();
        checkAvailableKillMoves(boardNumber);
        if(allow_kill_moves.length == 0)
        {
            playerChange()
        }
        drewAvailableKillMoves();
        currPawnPosition = boardNumber;

    }
    else {
        console.log("else");
        removeAvailableMoves();
        // removeAvailableKillMoves();
    }


}

function killFunction(currPawnPosition, boardNumber)
{
    var begPos = nToXY(currPawnPosition);
    var endPos = nToXY(boardNumber);
    if (endPos[0]-begPos[0] === endPos[1]-begPos[1])
    {
        if (endPos[0]> begPos[0])
        {
            for( let i = 1;i < endPos[0] - begPos[0]; i++)
            {
                n = XYTon(begPos[0] + i, begPos[1] + i )
                board[n] = 0;
                setElement(n);

            }
        }
        else
        {
            for( let i = 1;i < begPos[0] - endPos[0]; i++)
            {
                n = XYTon(endPos[0] + i, endPos[1] + i )
                board[n] = 0;
                setElement(n);

            }
        }
    }
    if (endPos[0]-begPos[0] === begPos[1] - endPos[1])
    {
        if (endPos[0]> begPos[0])
        {
            for( let i = 1;i < endPos[0] - begPos[0]; i++)
            {
                n = XYTon(begPos[0] + i, begPos[1] - i )
                board[n] = 0;
                setElement(n);

            }
        }
        else
        {
            for( let i = 1;i < begPos[0] - endPos[0]; i++)
            {
                n = XYTon(endPos[0] + i, endPos[1] - i )
                board[n] = 0;
                setElement(n);

            }
        }
    }

}

function playerChange()
{
    //currPlayer is global variable
    console.log("Player change")
    currPlayer = (currPlayer + 1)%2;
    for(let i = 0; i < board.length; i++)
    {
        checkAvailableKillMoves(i);
        // console.log(allow_kill_moves)
        if(allow_kill_moves.length !==0)
        {
            allow_pawns.push(i);
            drewAvailableKillMoves()
            allow_kill_moves.length = 0;

        }
    }
    // console.log(allow_pawns)

}


// Begining procedure

for (let i = 0; i < boardElementList.length; i++) 
{

    boardElementList[i].addEventListener('click', function(e) 
    {

        userClickFunction(e.target.id)

    })
}
for(let i = 0; i < boardElementList.length; i++)
{
    setElement(i);
}
console.log("nToXY: ",nToXY(15));
// End of begining procedure
