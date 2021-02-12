function whitePawnMoves(currPawnLocation)
{

    var pawnPos = nToXY(currPawnLocation);
    console.log("n: ",currPawnLocation, " n to xy: ", pawnPos);
    if (board[currPawnLocation+9] === 0 && pawnPos[0]+1 < 8)
    {
        allow_moves.push(currPawnLocation+9);
    }
    if (board[currPawnLocation+7] === 0 && pawnPos[0] - 1 >= 0)
    {
        allow_moves.push(currPawnLocation+7);
    }

}


function whitePawnKillMoves(currPawnLocation)
{
    var pawnPos = nToXY(currPawnLocation);
    if (board[currPawnLocation+9] < 0 && pawnPos[0]+1 < 8)
    {
        if(board[currPawnLocation+18] === 0 && pawnPos[0]+2 < 8)
        {
            allow_kill_moves.push(currPawnLocation+18);
        }
    }
    if (board[currPawnLocation+7] < 0 && pawnPos[0]-1 >= 0)
    {
        if(board[currPawnLocation+14] === 0 && pawnPos[0]-2 >= 0)
        {
            allow_kill_moves.push(currPawnLocation+14);
        }
    }
    if (board[currPawnLocation-9] < 0 && pawnPos[0]-1 >= 0)
    {
        if(board[currPawnLocation-18] === 0 && pawnPos[0]-2 >= 0)
        {
            allow_kill_moves.push(currPawnLocation-18);
        }
    }
    if (board[currPawnLocation-7] < 0 && pawnPos[0]+1 < 8)
    {
        if(board[currPawnLocation-14] === 0 && pawnPos[0]+2 < 8)
        {
            allow_kill_moves.push(currPawnLocation-14);
        }
    }
}


function whiteKingMoves(currPawnLocation)
{
    var pawnPos = nToXY(currPawnLocation);
    var stop = false;
    var i = 1;
    while(!stop)
    {
        if(board[currPawnLocation+9*i] === 0 && pawnPos[0]+i < 8)
        {
            allow_moves.push(currPawnLocation+9*i);
            i++;
        }
        else
        {
            stop = true;
        }
    }
    var stop = false;
    var i = 1;
    while(!stop)
    {
        if(board[currPawnLocation+7*i] === 0 && pawnPos[0]-i >= 0)
        {
            allow_moves.push(currPawnLocation+7*i);
            i++;
        }
        else
        {
            stop = true;
        }
    }
    var stop = false;
    var i = 1;
    while(!stop)
    {
        if(board[currPawnLocation-9*i] === 0 && pawnPos[0]-i >= 0)
        {
            allow_moves.push(currPawnLocation-9*i);
            i++;
        }
        else
        {
            stop = true;
        }
    }
    var stop = false;
    var i = 1;
    while(!stop)
    {
        if(board[currPawnLocation-7*i] === 0 && pawnPos[0]+i < 8)
        {
            allow_moves.push(currPawnLocation-7*i);
            i++;
        }
        else
        {
            stop = true;
        }
    }
}


function whiteKingKillMoves(currPawnLocation)
{
    var pawnPos = nToXY(currPawnLocation);
    var stop = false;
    var i = 1;
    while(!stop)
    {
        if(board[currPawnLocation+9*i] === 0 && pawnPos[0]+i < 8)
        {
            i++;
        }
        else
        {
            stop = true;
        }
    }
    if(board[currPawnLocation+9*i] < 0 && pawnPos[0]+i < 8)
    {
        if(board[currPawnLocation+9*i + 9] === 0 && pawnPos[0]+i + 1 < 8)
        {
            allow_kill_moves.push(currPawnLocation+9*i + 9);
        }
    }
    var stop = false;
    var i = 1;
    while(!stop)
    {
        if(board[currPawnLocation+7*i] === 0 && pawnPos[0]-i >= 0)
        {
            i++;
        }
        else
        {
            stop = true;
        }
    }
    if(board[currPawnLocation+7*i] < 0 && pawnPos[0]-i >= 0)
    {
        if(board[currPawnLocation+7*i + 7] === 0 && pawnPos[0]-i - 1 >= 0)
        {
            allow_kill_moves.push(currPawnLocation+7*i + 7);
        }
    }
    var stop = false;
    var i = 1;
    while(!stop)
    {
        if(board[currPawnLocation-9*i] === 0 && pawnPos[0]-i >= 0)
        {
            i++;
        }
        else
        {
            stop = true;
        }
    }
    if(board[currPawnLocation-9*i] < 0 && pawnPos[0]-i >= 0)
    {
        if(board[currPawnLocation-9*i - 9] === 0 && pawnPos[0]-i - 1 >= 0)
        {
            allow_kill_moves.push(currPawnLocation-9*i - 9);
        }
    }
    var stop = false;
    var i = 1;
    while(!stop)
    {
        if(board[currPawnLocation-7*i] === 0 && pawnPos[0]+i < 8)
        {
            allow_moves.push(currPawnLocation-7*i);
            i++;
        }
        else
        {
            stop = true;
        }
    }
    if(board[currPawnLocation-7*i] < 0 && pawnPos[0]+i < 8)
    {
        if(board[currPawnLocation-7*i - 7] === 0 && pawnPos[0] + i + 1 < 8)
        {
            allow_kill_moves.push(currPawnLocation - 7*i - 7);
        }
    }

}






function blackPawnMoves(currPawnLocation)
{

    var pawnPos = nToXY(currPawnLocation);
    if (board[currPawnLocation-9] === 0 && pawnPos[0]-1 >= 0)
    {
        allow_moves.push(currPawnLocation-9);
    }
    if (board[currPawnLocation-7] === 0 && pawnPos[0]+1 < 8)
    {
        allow_moves.push(currPawnLocation-7);
    }

}


function blackPawnKillMoves(currPawnLocation)
{
    var pawnPos = nToXY(currPawnLocation);
    if (board[currPawnLocation-9] > 0 && pawnPos[0]-1 >= 0)
    {
        if(board[currPawnLocation-18] === 0 && pawnPos[0]-2 >= 0)
        {
            allow_kill_moves.push(currPawnLocation-18);
        }
    }
    if (board[currPawnLocation-7] > 0 && pawnPos[0]+1 < 8)
    {
        if(board[currPawnLocation-14] === 0 && pawnPos[0]+2 < 8)
        {
            allow_kill_moves.push(currPawnLocation-14);
        }
    }
    if (board[currPawnLocation+9] > 0 && pawnPos[0]+1 < 8)
    {
        if(board[currPawnLocation+18] === 0 && pawnPos[0]+2 < 8)
        {
            allow_kill_moves.push(currPawnLocation+18);
        }
    }
    if (board[currPawnLocation+7] > 0 && pawnPos[0]-1 >= 0)
    {
        if(board[currPawnLocation+14] === 0 && pawnPos[0]-2 >= 0)
        {
            allow_kill_moves.push(currPawnLocation+14);
        }
    }
}



function blackKingMoves(currPawnLocation)
{
    var pawnPos = nToXY(currPawnLocation);
    var stop = false;
    var i = 1;
    console.log("blackKingMoves")
    while(!stop)
    {
        if(board[currPawnLocation+9*i] === 0 && pawnPos[0]+i < 8)
        {
            allow_moves.push(currPawnLocation+9*i);
            i++;
        }
        else
        {
            stop = true;
        }
    }
    var stop = false;
    var i = 1;
    while(!stop)
    {
        if(board[currPawnLocation+7*i] === 0 && pawnPos[0]-i >= 0)
        {
            allow_moves.push(currPawnLocation+7*i);
            i++;
        }
        else
        {
            stop = true;
        }
    }
    var stop = false;
    var i = 1;
    while(!stop)
    {
        if(board[currPawnLocation-9*i] === 0 && pawnPos[0]-i >= 0)
        {
            allow_moves.push(currPawnLocation-9*i);
            i++;
        }
        else
        {
            stop = true;
        }
    }
    var stop = false;
    var i = 1;
    while(!stop)
    {
        if(board[currPawnLocation-7*i] === 0 && pawnPos[0]+i < 8)
        {
            allow_moves.push(currPawnLocation-7*i);
            i++;
        }
        else
        {
            stop = true;
        }
    }
}


function blackKingKillMoves(currPawnLocation)
{
    var pawnPos = nToXY(currPawnLocation);
    var stop = false;
    var i = 1;
    while(!stop)
    {
        if(board[currPawnLocation+9*i] === 0 && pawnPos[0]+i < 8)
        {
            i++;
        }
        else
        {
            stop = true;
        }
    }
    if(board[currPawnLocation+9*i] > 0 && pawnPos[0]+i < 8)
    {
        if(board[currPawnLocation+9*i + 9] === 0 && pawnPos[0]+i + 1 < 8)
        {
            allow_kill_moves.push(currPawnLocation+9*i + 9);
        }
    }
    var stop = false;
    var i = 1;
    while(!stop)
    {
        if(board[currPawnLocation+7*i] === 0 && pawnPos[0]-i >= 0)
        {
            i++;
        }
        else
        {
            stop = true;
        }
    }
    if(board[currPawnLocation+7*i] > 0 && pawnPos[0]-i >= 0)
    {
        if(board[currPawnLocation+7*i + 7] === 0 && pawnPos[0]-i - 1 >= 0)
        {
            allow_kill_moves.push(currPawnLocation+7*i + 7);
        }
    }
    var stop = false;
    var i = 1;
    while(!stop)
    {
        if(board[currPawnLocation-9*i] === 0 && pawnPos[0]-i >= 0)
        {
            i++;
        }
        else
        {
            stop = true;
        }
    }
    if(board[currPawnLocation-9*i] > 0 && pawnPos[0]-i >= 0)
    {
        if(board[currPawnLocation-9*i - 9] === 0 && pawnPos[0]-i - 1 >= 0)
        {
            allow_kill_moves.push(currPawnLocation-9*i - 9);
        }
    }
    var stop = false;
    var i = 1;
    while(!stop)
    {
        if(board[currPawnLocation-7*i] === 0 && pawnPos[0]+i < 8)
        {
            allow_moves.push(currPawnLocation-7*i);
            i++;
        }
        else
        {
            stop = true;
        }
    }
    if(board[currPawnLocation-7*i] > 0 && pawnPos[0]+i < 8)
    {
        if(board[currPawnLocation-7*i - 7] === 0 && pawnPos[0] + i + 1 < 8)
        {
            allow_kill_moves.push(currPawnLocation - 7*i - 7);
        }
    }

}