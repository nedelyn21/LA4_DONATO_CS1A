// Initial custumer queue
let queue = ["Elaine", "Althea", "Angelo", "Lito", "Engelbert"];

console.log("Initial Queue:");
console,log(queue);

// Loop to the serve 5 custumers only
for (let i = 0; i < 5; i++) {
    // Add a new custumer to queue 
    let newCustumer = propmt("Enter your name to join the queue:");
    if (newCustumer) {
        queue.push(newCustumer);
        let custumerNumber = queue.length;
        alert('Hi ${newCustumer}, your number is ${custumerNumber}');
        console.log('Updated Queue:');
        console.log(queue);
    }

    // Service custumer number
    let numberToService = parseInt(prompt("Enter the number to be serviced:"));
    if (numberToService > 0 && numberToService<= queue.length) {
        let servedCustomer = queue[numberToService - 1];
        alert('Now serving: ${servedCustomer}');
        queue.splice(numberToService - 1, 1); // Remove the customer
        console.log("Updated Queue after servicing:");
        console.log(queue);
    } else {
        alert("Invalid number entered. No customer was serviced.");
    }
}