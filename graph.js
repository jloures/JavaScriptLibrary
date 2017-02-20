class Graph {
    constructor() {
        this.graph = new Array();
        this.nodeState = {
            unVisited: 0,
            visited: 1,
            visiting: 2
        };
    }

    add(node) {
        this.graph.push(node);
    }

    hasRoute(start,end) {
        if( start === end && start !== null ) {
            return true;
        }

        if( start === null || end === null ) {
            return false;
        }

        let q = new Queue();
        start.hasVisited = true;
        q.enqueue(start);
        while(!q.isEmpty()) {
            let curr = q.dequeue();
            if( curr !== null ) {
                for(let child in curr.adjacent){
                    if( !child.hasVisited ) {
                        if( child === end ) {
                            return true;
                        } else {
                            child.hasVisited = true;
                            q.enqueue(child);
                        }
                    }
                }
            }
        }
        return false;
    }
}

class GraphNode {
    constructor(value, adjacent) {
        this.value = value;
        this.adjacent = adjacent;
    }

    get adjacentt() {
        return this.adjacent;
    }
}