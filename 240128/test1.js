//문제링크: https://school.programmers.co.kr/learn/courses/30/lessons/92334
function solution(id_list, report, k) {
    let report_count = [];
    let report_user = [];
    let result = []
    let set = new Set(report);
    report = [...set];
    for(let i=0; i<report.length; i++) {
        result.push(report[i].split(' '))
        report_count.push(report[i].split(' ')[1])
        report_user.push(report[i].split(' ')[0])   
    }
    let map = new Map()
    for(const id of report_count) {
        if(map.has(id)){
            map.set(id,map.get(id)+1)
        }else {
            map.set(id,1)
        }
    }
    
    let answer = Array(id_list.length).fill(0)
    for(let i=0; i<id_list.length;i++){
        if(map.get(id_list[i])>=k){
            for(let j=0; j<result.length; j++){
                if(result[j][1] == id_list[i]){
                    answer[id_list.indexOf(result[j][0])] += 1
                }
            }
        }
    }

    return answer;
}