/**
 * @param {number[]} houses
 * @param {number[]} heaters
 * @return {number}
 */
var findRadius = function(houses, heaters) {
    houses.sort((a,b)=>a-b);
    heaters.sort((a,b) => a-b);

    function findClosestHeater(house) {
        let left=0, right=heaters.length-1;
        while(left<right) {
            let mid = Math.floor((left+right)/2)
            if(heaters[mid]<house) {
                left = mid +1;
            } else {
                right = mid
            }
        }
        let closestDist = Math.abs(heaters[left]-house);
        if(left>0){
            closestDist = Math.min(closestDist, Math.abs(heaters[left - 1] - house));
        }
        return closestDist;
    }    
    let maxRadius = 0;
    for (let house of houses) {
        maxRadius = Math.max(maxRadius, findClosestHeater(house));
    }
    return maxRadius

};