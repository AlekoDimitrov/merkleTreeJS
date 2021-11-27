const SHA256 = require("crypto-js/sha256");

class MerkleTree {
  constructor(leaves) {
    this.leaves = leaves.map((x) => SHA256(x).toString());
    if (this.leaves.length % 2 === 1) {
      // if odd number of items in array, push a default value — ('0')
      this.leaves.push(SHA256("0").toString());
    }

    this.root = this.getRoot();
  }

  getRoot() {
    let tempData = [];
    let nodes = [...this.leaves];
    let root;

    while (nodes.length !== 1) {
      tempData.push(nodes.shift() + nodes.shift());

      if (nodes.length === 0) {
        if (tempData.length % 2 === 1 && tempData.length !== 1) {
          // if odd number of items in array, push a default value — ('0')
          tempData.push("0");
        }

        nodes = nodes.concat(tempData.map((x) => SHA256(x).toString()));
        tempData = [];
      }
    }

    root = nodes.toString();
    return root;
  }
}

let leaves = ["a", "d", "0", "s", "ds"];
let merk = new MerkleTree(leaves);
console.log(merk);
