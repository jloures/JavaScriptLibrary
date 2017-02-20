	
'use strict';  
class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class NodeList {
	constructor(values) {
		this.head = null;
		this.last = null;
		if( values === null || values.length === 0 ) {
			return;
		}
		let node = null;
		for(let i = 0; i < values.length; i++) {
			if( node === null ) {
				 node = this.head = new Node(values[i]);
			} else {
				node.next = new Node(values[i]);
				node = node.next;
			}
		}
	}

	deleteMiddleNode(node) {
		if( node === null || node.next === null ) {
			return false;
		}

		let next = node.next;
		node.value = next.value;
		node.next = next.next;
		return true;
	}

	printAll() {
		if( this.head === null ) {
			return;
		}

		let curr = this.head;
		while(curr !== null) {
			console.log(curr.value);
			curr = curr.next;
		}
	}

	append(node) {
		if( this.head === null ) {
			this.head = node;
			this.last = node;
			return;
		}
		this.last.next = node;
	}

	findKthLast(k) {
		let helper = (index, node) => {
			if( node === null ) {
				return null;
			}

			let nd = helper(index,node.next);
			index.index++;
			if( index.index === k ) {
				return node;
			}

			return nd;
		}

		return helper({index: 0}, this.head);
	}

	reverse() {
		if( this.head === null || this.head.next === null ) {
			return;
		} 

		let head = null;
		let curr = this.head;
		while( curr != null ) {
			let n = new Node( curr.value );
			n.next = head;
			head = n;
			curr = curr.next;
		}

		this.head = head;
	}
}

