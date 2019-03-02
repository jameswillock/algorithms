const mangoGraph = {
  "you": ["alice", "bob", "claire"],
  "bob": ["anuj", "peggy"],
  "alice": ["peggy"],
  "claire": ["thom", "jonny"],
  "anuj": [],
  "peggy": [],
  "thom": [],
  "jonny": []
};

// Method to check if person is a mango seller
const isSeller = name => name.split("").slice(-1)[0] === "m";

// Breadth-first search
const search = (graph, name) => {
  // Instantiate collections for queue and searched
  const queue = [],
        searched = new Set();

  // Push start node into queue
  queue.push(name);

  // While queue is not empty
  while (queue.length > 0) {
    // Take first person from queue
    const person = queue.shift();

    // If person has not been searched for
    if (!searched.has(person)) {
      if (isSeller(person)) {
        // Person is a seller
        console.log(person, "is seller");
        return true;
      } else {
        // Push persons connections into queue
        for (let index = 0; index < graph[person].length; index++) {
          queue.push(graph[person][index]);
        }

        // Push person into searched queue
        searched.add(person);
      }
    }
  }

  return false;
};

search(mangoGraph, "you");
