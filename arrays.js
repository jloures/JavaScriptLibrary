function createMinHeightBST(array) {
    if( array.length === 0 ) {
        return null;
    }

    if( array.length === 1 ) {
        return new GraphNode(array[0], null);
    }

    let helper = (start,end) => {
        if( end < start ) {
            return null;
        }

        let middle = Math.floor((start+end)/2);
        let bst = new BST(array[middle]);
        b.left = helper(start, middle -1);
        b.right = helper(middle + 1, end);
        return bst;
    };

    return helper(0,array.length -1);
}

function toLinkedLists(bst) {
    if( bst === null ) {
        return null;
    }

    if( bst.left === null && bst.right ) {
        return new Node(bst.value);
    }

    let createLinkedLists = (array,bst) => {
        //normal BFS
        let q = new Queue();
        let currNode = bst;
        currNode.visited = true;
        array.push(new Node(bst.value));
        q.add(currNode);

        while(!q.isEmpty()) {
            currNode = q.remove();
            currNode.visited = true;
            let linkedList = new LinkedList();
            if( currNode !== null ) {
                for(let child in currNode.adjacent) {
                    if( !child.visited ) {
                        linkedList.add(child.value);
                        child.visited = true;
                        q.add(child);
                    }
                }
                array.push(linkedList);
            }
        }

        return array;
    };

    return createLinkedLists([],bst);

}