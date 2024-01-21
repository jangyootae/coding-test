//문제링크: https://school.programmers.co.kr/learn/courses/30/lessons/64061 
function solution(board, moves) {
	var answer = 0;
	let sum = 0;
	let stack = []
	for(let k=0;k<moves.length;k++){
	    for(let i=0;i<board[0].length;i++){
	        if (board[i][moves[k]-1] !== 0) {
	            stack.push(board[i][moves[k]-1]);
	            board[i][moves[k]-1]= 0;
	            break;
	        }
	    }
	    if(stack[stack.length-2] == stack[stack.length-1]) {
	        stack.splice(stack.length-2,stack.length-1)
	        sum+=2;
	    }
	}
	return sum;
}
console.log(solution([[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]], [1,5,3,5,1,2,1,4]))