//Required structures
let hashTable = new Array(5); 
let customers = ["Elaine", "Althea", "Angelo", "Lito", "Engelbert"];

//Hash function based on ASCII values of name
function hashFunction(name) {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash += name.charCodeAt(i);
  }
  return hash % hashTable.length;
}

// Inserting customers into hash table
function insertCustomer(name) {
  let index = hashFunction(name);
  let originalIndex = index;

  // Linear probing for collision handling
  while (hashTable[index] !== undefined) {
    index = (index + 1) % hashTable.length;
    if (index === originalIndex) {
      alert("Hash table is full!");
      return -1;
    }
  }

  hashTable[index] = name;
  return index + 1; // Customer number shown to user (index + 1)
}

//Displaying hash table
function displayHashTable() {
  console.log("Current Hash Table:");
  for (let i = 0; i < hashTable.length; i++) {
    console.log('Slot ${i + 1}: ${hashTable[i] ? hashTable[i] : "Empty"}');
  }
}

// Initialize the customers into system
alert("Storing 5 customers into the system.");
for (let i = 0; i < customers.length; i++) {
  let customerName = customers[i];
  let number = insertCustomer(customerName);
  alert('${customerName} has been assigned number ${number}');
}
displayHashTable();

// Service the customers by numbering
while (true) {
  let input = prompt("Enter customer number to service (or type 'exit' to end):");

  if (input === null || input.toLowerCase() === "exit") {
    alert("Exiting the queue system.");
    break;
  }

  let num = parseInt(input);
  if (isNaN(num) || num < 1 || num > hashTable.length) {
    alert("Invalid number. Please try again.");
    continue;
  }

  let index = num - 1;
  if (hashTable[index]) {
    alert('Servicing customer: ${hashTable[index]}');
    hashTable[index] = undefined;
  } else {
    alert("This number has already been serviced or is empty.");
  }

  displayHashTable();
}