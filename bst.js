class BST {
    constructor(root) {
        this.root = root;
    }

    add(node) {
        let addHelper = (root, node) => {
            if( node.value < root.value ) {
                if( root.left === null ) {
                    root.left = node;
                } else {
                    addHelper(root.left,node);
                }
            } else {
                if( root.right === null ) {
                    root.right = node;
                } else {
                    addHelper(root.right,node);
                }
            }
        };
    }

    isBalanced(root) {
        let getHeight = root => {
            if( root === null ) {
                return -1;
            }

            let leftHeight = getHeight(root.left);
            if( leftHeight === Number.MIN_VALUE ) {
                return Number.MIN_VALUE;
            }
            let rightHeight = getHeight(root.right);
            if( rightHeight === Number.MIN_VALUE ) {
                return Number.MIN_VALUE;
            }

            let diffHeight = Math.abs(leftHeight - rightHeight);
            if( diffHeight > 1 ) {
                return Number.MIN_VALUE;
            } else {
                return Math.max(leftHeight,rightHeight) + 1;
            }

        }

        return getHeight(root) !== Number.MIN_VALUE;
    }

    isBST(root) {
        let helper = (root,min,max) => {
            if( root === null ) {
                return true;
            }

            if((min !== null && root.data <= min) || (max !== null && n.data > max)) {
                return false;
            }

            if(!helper(root.left,root.data) || !helper(root.right, n.data, max)) {
                return false;
            }

            return true;
        };

        return helper(root,null,null);
    }
}