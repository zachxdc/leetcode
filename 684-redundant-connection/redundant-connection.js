/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function(edges) {
    let graph = new Map();

    function dfs(u, v, visited){
        if (u===v) return true;
        visited.add(u);
        for (let neighbor of (graph.get(u)|| [])){
            if(!visited.has(neighbor)) {
                if(dfs(neighbor,v,visited)) return true;
            }
        }
        return false;
    }

    for(let [u,v] of edges){
        let visited = new Set();
        if(graph.has(u) && graph.has(v) && dfs(u,v,visited)) {
            return [u,v];
        }
        if(!graph.has(u)) graph.set(u,[]);
        if(!graph.has(v)) graph.set(v,[]);
        graph.get(u).push(v);
        graph.get(v).push(u);
    }
    return [];
};