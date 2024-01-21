//문제링크: https://school.programmers.co.kr/learn/courses/30/lessons/136798
function solution(number, limit, power) {
    var answer = 0;
    let num = []
    let sum = 0;
    for(let i=1;i<=number;i++){
        let count_sqrt = 0;
        let count_normal = 0;
        for(let j=1; j<=Math.sqrt(i); j++){
        //4 (1 2 4) 16(1 2 4 8 16)
            if(j == Math.sqrt(i)){
                count_sqrt+=1;
            }
            else if(i%j==0) {
                count_normal+=1;
            }
        }
        num.push(count_sqrt+count_normal*2)
    }
    num.forEach(el => {
    if(el>limit) {
        sum+=power
    }else {
        sum += el;
    }})
    return sum
}
console.log(solution(5,3,2))