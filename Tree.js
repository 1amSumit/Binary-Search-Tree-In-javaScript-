class Tree {
  constructor() {
    this.root = null;
  }

  addNode(node) {
    if (this.root === null) {
      this.root = node;
    }
    this.add(this.root, node);
  }

  add(p, c) {
    if (p.data > c.data) {
      if (p.left) {
        return this.add(p.left, c);
      } else {
        p.left = c;
      }
    }

    if (p.data < c.data) {
      if (p.right) {
        return this.add(p.right, c);
      } else {
        p.right = c;
      }
    }
  }

  hasNode(n) {
    if (this.root.data === n) {
      return true;
    }

    if (this.root.data > n && this.root.left) {
      return this.leftNode(this.root.left, n);
    }

    if (this.root.data < n && this.root.right) {
      return this.rightNode(this.root.right, n);
    }
  }
  leftNode(p, n) {
    if (p.data === n) {
      return true;
    }

    if (p.data > n && p.left) {
      p = p.left;
      return this.leftNode(p, n);
    }

    if (p.data < n && p.right) {
      console.log("hua hai");
      p = p.right;
      return this.rightNode(p, n);
    }
  }

  rightNode(p, n) {
    if (p.data === n) {
      return true;
    }

    if (p.data < n && p.right) {
      p = p.right;
      return this.rightNode(p, n);
    }

    if (p.data > n && p.left) {
      p = p.left;
      return this.leftNode(p, n);
    }
  }
}

module.exports = Tree;
