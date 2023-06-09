### MerkleTreeJS

MerkleTreeJS is a powerful binary tree implementation, also known as a Merkle tree. It finds extensive use in various distributed systems like cryptocurrencies, Git, Apache Cassandra, and more. This tree leverages the SHA256 algorithm for its operations.

#### Getting Started

To get started with MerkleTreeJS, follow these steps:

1. Clone the repository.
2. Navigate to the root directory and run `npm install` to install the necessary dependencies.

#### Usage Example

Here's an example demonstrating how to use MerkleTreeJS:

```javascript
const leaves = ['a', 'b', 'c'];
const tree = new MerkleTree(leaves);
console.log(tree);
```
#### Output:
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
If you have any questions or suggestions, feel free to reach out. Happy coding!
