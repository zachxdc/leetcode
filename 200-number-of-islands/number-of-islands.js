/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    if(!grid || grid.length ===0) return 0;

    let rows = grid.length, cols = grid[0].length;
    let count = 0;

    const direction = [
        [1, 0], [-1, 0], [0, 1], [0, -1]
    ]

    const bfs = (r,c)=> {
        let queue = [[r,c]];
        grid[r][c] = '0';

        while (queue.length > 0) {
            let[curR, curC] = queue.shift();

        for(let[dr, dc] of direction) {
            let newR = curR + dr, newC = curC + dc;

            if (newR >= 0 && newR < rows && newC >=0 &&  newC < cols && grid[newR][newC] === '1') {
                grid[newR][newC]='0'
                queue.push([newR, newC]);

            }
        }
    }
}
        for(let r=0; r<rows; r++) {
            for (let c=0; c<cols; c++) {
                if(grid[r][c] ==='1'){
                    count++
                    bfs(r,c);
                }
            }
        }

        return count;

};




    