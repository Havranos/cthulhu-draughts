function whitePawnMoves(currPawnLocation)
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


function whitePawnKillMoves(currPawnLocation)
{
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

function blackPawnMoves(currPawnLocation)
{


    if (board[currPawnLocation-9] === 0)
    {
        allow_moves.push(currPawnLocation-9);
    }
    if (board[currPawnLocation-7] === 0)
    {
        allow_moves.push(currPawnLocation-7);
    }

}


function blackPawnKillMoves(currPawnLocation)
{
    if (board[currPawnLocation-9] === 1)
    {
        if(board[currPawnLocation-18] === 0)
        {
            allow_kill_moves.push(currPawnLocation-18);
        }
    }
    if (board[currPawnLocation-7] === 1)
    {
        if(board[currPawnLocation-14] === 0)
        {
            allow_kill_moves.push(currPawnLocation-14);
        }
    }
}