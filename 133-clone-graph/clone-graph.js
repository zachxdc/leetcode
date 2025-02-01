/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {_Node} node
 * @return {_Node}
 */
var cloneGraph = function(node, map = new Map()) {
    if(!node) return null;
    if(map.has(node)) return map.get(node);

    let clone = new Node(node.val);
    map.set(node, clone);

    clone.neighbors = node.neighbors.map(neighbor => cloneGraph(neighbor, map));
     
    return clone;
};