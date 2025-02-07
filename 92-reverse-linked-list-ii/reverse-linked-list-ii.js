/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    if (!head || left === right) return head;

    let dummy = new ListNode(0);
    dummy.next = head;
    let prev = dummy;

    for (let i =0; i<left-1; i++) {
        prev = prev.next;
    }

    let curr = prev.next;
    let next = null;
    let reversePrev = null;

    for (let i=0; i<right-left+1; i++){
        next = curr.next
        curr.next = reversePrev
        reversePrev = curr;
        curr = next;
    }

    prev.next.next = curr;
    prev.next = reversePrev;

    return dummy.next
};