/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */

class ListNode {
    constructor(val=0, next=null){
        this.val=val;
        this.next=next;
    }
}

var rotateRight = function(head, k) {
    if (!head|| !head.next || k===0) return head;

    let length = 1;
    let tail = head;

    // step 1: calculate the length of the listnode, find the tail node
    while(tail.next){
        tail= tail.next;
        length++
    }

    // step 2: calculate the actual steps that need to rotate
    k = k % length;
    if (k===0) return head

    //step 3: find the tail node (length - k - 1)
    let prev = head;
    for (let i =0; i<length-k-1; i++){
        prev = prev.next 
    }
    //prev = 3

    //step 4 adjust new head
    let newHead = prev. next; //new head =4
    prev.next = null; //disconnect 3->4
    tail.next = head; //connect 5->1

    return newHead;

};