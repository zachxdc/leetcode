/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function(n, edges, source, destination) {

    if(source === destination) return true

    const graph = new Map();
    for(const [a,b] of edges){
        if(!graph.has(a)) graph.set(a,[]);
        if(!graph.has(b)) graph.set(b,[]);
        graph.get(a).push(b);
        graph.get(b).push(a);
    }

    const visited = new Set();

    const dfs = (node)=>{
        if (node ===destination) return true;
        visited.add(node);

        for(const neighbor of graph.get(node) || []){
            if(!visited.has(neighbor)){
                if(dfs(neighbor)) return true;
            }
        }
        return false;
    }
    return dfs(source);
    
};