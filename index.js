const SHA256 = require("crypto-js/sha256");

class MerkleTree {
  constructor(leaves) {
    this.leaves = leaves.map((x) => SHA256(x).toString());
    if (this.leaves.length % 2 === 1) {
      this.leaves.push(SHA256("0").toString()); // if odd number of items in array, push a default value — ('0')
    }

    this.root = this.getRoot();
  }

  getRoot() {
    let tempData = [];
    let hashLeavesBranches = [...this.leaves];
    let root;

    while (hashLeavesBranches.length !== 1) {
      tempData.push(hashLeavesBranches.shift() + hashLeavesBranches.shift());

      hashLeavesBranches.push(tempData.map((x) => SHA256(x).toString()));
      tempData = [];
    }

    root = hashLeavesBranches;
    return root;
  }
}

let leaves = ["a", "d", "0"];
let merk = new MerkleTree(leaves);
console.log(merk);
