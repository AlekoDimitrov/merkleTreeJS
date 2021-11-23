# merkleTreeJS

A binary tree also known as merkle tree. Often used in cryptocurrencies and other distributed systems such as Git, Apache Cassandra and more. The tree uses SHA256

## Getting Started
After cloning, run `npm install` in the root directory.

```
const leaves = ['a', 'b', 'c']
const tree = new MerkleTree(leaves)
console.log(tree)
```
Output:

```
MerkleTree {
  leaves: [
    'ca978112ca1bbdcafac231b39a23dc4da786eff8147c4e72b9807785afee48bb',
    '18ac3e7343f016890c510e93f935261169d9e3f565436429830faf0934f4f8e4',
    '5feceb66ffc86f38d952786c6d696c79c2dbc239dd4e91b46729d73a27fb57e9',
    '5feceb66ffc86f38d952786c6d696c79c2dbc239dd4e91b46729d73a27fb57e9'
  ],
  root: [
    [
      '3e48a5c94c320f6dc83040e52b60ab72fbe5a51105650215d7c4ad7d8d6d6d9a'
    ]
  ]
}
```
