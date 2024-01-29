// 문제 링크: https://school.programmers.co.kr/learn/courses/30/lessons/250137
function solution(bandage, health, attacks) {
    //bandage[시전시간, 초당 회복량, 추가 회복량]
    // attacks[공격 시간, 피해량]
    let cur_health = health;
    let j = 0;
    let success = 0;
    for(let i =1; i<=attacks[attacks.length-1][0];i++){
        if(i != attacks[j][0] ) {
            cur_health += bandage[1]
            success+=1;
            if(success == bandage[0]){cur_health += bandage[2]; success = 0;}
            if(cur_health>health){cur_health = health;}
        } else if(i == attacks[j][0]){
            cur_health -= attacks[j][1];
            success = 0;
            j+=1;
            if(cur_health <= 0){
                return -1;
            }
        }
        console.log(cur_health)
    }
    return cur_health
}