/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(n, trust) {
    if (n === 1 && trust.length ===0) return 1;

    const trustCount = new Array(n+1).fill(0);
    
    for(const[a,b] of trust){
        trustCount[a]--;
        trustCount[b]++;
    }

    for(let i = 1; i<=n; i++) {
        if(trustCount[i] === n-1) return i;
    }
    return -1
};