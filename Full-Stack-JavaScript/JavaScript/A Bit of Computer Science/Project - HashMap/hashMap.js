// 2024 Amal Kariyawasam
// HashMap Project

class HashMap {
  constructor() {}

  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }

    return hashCode;
  }

  //Use the following snippet whenever you access a bucket through an index. We want to throw an error if we try to access an out of bound index:
  checkBounds() {
    let index;
    let buckets;
    if (index < 0 || index >= buckets.length) {
      throw new Error("Trying to access index out of bound");
    }
  }
}

const hashMapIteration = new HashMap();

const consoleLogOutput = hashMapIteration.hash("Hey");
console.log(consoleLogOutput);
