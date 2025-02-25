/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
    let maxDiameter = 0;

    const depth = (node) => {
        if (node === null) return 0;

        let leftDepth = depth(node.left);
        let rightDepth = depth(node.right);

        maxDiameter = Math.max(maxDiameter, leftDepth + rightDepth);
        return Math.max(leftDepth, rightDepth) + 1
    }

    depth(root);
    return maxDiameter;
};