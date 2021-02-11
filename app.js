// We are using fact, that html board and var board have the same indexing.


// PROBLEM: allow kill when near border check if area in second row is empty (ie it dont know its near border)
//Solution (i think): change array[] to array[][] and check if new position is outside.

const container = document.querySelector("table.board");
const boardElementList = container.querySelectorAll("td > p");
var figures = ["black_pawn", "white_pawn"];
var allow_moves = [];
var allow_kill_moves = [];
var ifKill = false;
var currPawnPosition = 0;

// standard beginning board setting in droughts
var board = [0, 1, 0, 1, 0, 1, 0, 1, 
    1, 0, 1, 0, 1, 0, 1, 0, 
    0, 1, 0, 1, 0, 1, 0, 1, 
    0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0,
    -1, 0, -1, 0, -1, 0, -1, 0, 
    0, -1, 0, -1, 0, -1, 0, -1, 
    -1, 0, -1, 0, -1, 0, -1, 0];



function trans(str)
{
    translate = {
        "a": 0, "b": 1, "c": 2, "d": 3, "e": 4, "f": 5, "g": 6, "h": 7
    }
    return Math.abs(str[1] - 8)* 8 + translate[str[0]];
}





// console.log("outside start");
// console.log( boardElementList.length);
for (let i = 0; i < boardElementList.length; i++) 
{
    // console.log(i)
    // console.log(boardElementList[i].id)
    boardElementList[i].addEventListener('click', function(e) 
    {
        // console.log(e.target.id);
        userClickFunction(e.target.id)

    })
    // console.log("add");
}
for(let i = 0; i < boardElementList.length; i++)
{
    setElement(i);
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

function checkAvaibleMoves(boardLocation)
{
    if(board[boardLocation]===1)
    {
        whitePawnMoves(boardLocation, ifKill)
    }
}
// we assume that all moves marks are gone from board
function drewAvaibleMoves()
{
    for( let i = 0; i < allow_moves.length; i++)
    {
        boardElementList[allow_moves[i]].classList.add("move")
    }
}

function removeAvaibleMoves()
{
    for( let i = 0; i < allow_moves.length; i++)
    {

        boardElementList[allow_moves[i]].classList.remove("move")
    }
    allow_moves.length = 0;
}

function drewAvaibleKillMoves()
{
    for( let i = 0; i < allow_kill_moves.length; i++)
    {
        boardElementList[allow_kill_moves[i]].classList.add("kill_move")
    }
}

function removeAvaibleKillMoves()
{
    for( let i = 0; i < allow_kill_moves.length; i++)
    {

        boardElementList[allow_kill_moves[i]].classList.remove("kill_move")
    }
    allow_kill_moves.length = 0;
}

// list of move functions for different figures
function whitePawnMoves(currPawnLocation, ifKill)
{
    if(ifKill===false)
    {
        if (board[currPawnLocation+9] === 0)
        {
            allow_moves.push(currPawnLocation+9);
        }
        if (board[currPawnLocation+7] === 0)
        {
            allow_moves.push(currPawnLocation+7);
        }
    }
    if (board[currPawnLocation+9] === -1)
    {
        if(board[currPawnLocation+18] === 0)
        {
            allow_kill_moves.push(currPawnLocation+18);
        }
    }
    if (board[currPawnLocation+7] === -1)
    {
        if(board[currPawnLocation+14] === 0)
        {
            allow_kill_moves.push(currPawnLocation+14);
        }
    }
}



function userClickFunction(userChoice)
{
    // console.log(userChoice[0]);
    // console.log(userChoice[1]);
    boardNumber = trans(userChoice);
    console.log(allow_moves.length);
    if(allow_moves.length == 0 && allow_kill_moves.length ==0)
    {

        checkAvaibleMoves(boardNumber);
        drewAvaibleMoves();
        drewAvaibleKillMoves();
        currPawnPosition = boardNumber;

        console.log(allow_moves)
        console.log(allow_kill_moves)
        console.log(boardNumber);
        ifKill = false;
    }
    else if(allow_moves.includes(boardNumber))
    {
        board[boardNumber] = board[currPawnPosition]
        board[currPawnPosition] = 0;
        setElement(currPawnPosition);
        setElement(boardNumber);
        removeAvaibleMoves();
        removeAvaibleKillMoves();
        ifKill = false;

    }
    else if(allow_kill_moves.includes(boardNumber))
    {
        board[boardNumber] = board[currPawnPosition]
        board[currPawnPosition] = 0;
        setElement(currPawnPosition);
        setElement(boardNumber);
        removeAvaibleMoves();
        removeAvaibleKillMoves();
        ifKill = true;

    }
    else {
        console.log("else");
        ifKill = false;
        removeAvaibleMoves();
        removeAvaibleKillMoves();
    }


}