// Define the Ticket classes to represent a ticket with a name and seat number
class Ticket {
    constructor(name, seat) {
        this.name = name;
        this.seat = seat;
    }
} 

//Define the Queue class to implement a FIFO data structure
class Queue {
    constructor() {
        this.items = []; // Initialize an empty array to store the Queue element
    }

    //Method to add an item to the end of the queue
    enqueue(item) {
        this.items.push(item);
    }

    //Method to remove and return the first item from the queue
    dequeue() {
        if(this.isEmpty()) return null; //Check if the queue is empty before removing an item
        return this.items.shift(); // Remove the first item and return it
    }

    //Method to view the first item in the queue without removing it
    front() {
        if(this.isEmpty()) return null; // Check if the queue is empty
        return this.items[0]; // Return the first item in the queue
    }

    //Method to check if the queue is empty
    isEmpty() {
        return this.items.length === 0; // Return true if the queue is empty
    }

    //Method to get the size of the queue
    size() {
        return this.items.length; //Return the number of items in the queue
    }
}

//Define the stack class to implement a LIFO data structure
class Stack {
    constructor() {
        this.items = []; //Initialize an empty array to store the stack elements
    }

    //Method to add an item to the top of the stack
    push(item) {
        this.items.push(item);
    }

    //Remove and return the last item added to the stack
    pop() {
        if(this.isEmpty()) return null; //check if the stack is empty before removing an item
        return this.items.pop(); // Remove the last item and return it
    }

    //View the last item in the stack without removing it
    peek() {
        if(this.isEmpty()) return null; // Check if the stack is empty
        return this.items[this.items.length - 1]; // Return the last item in the stack
    }

    //Check if the stack is empty
    isEmpty() {
        return this.items.length === 0; //Return true if the stack is empty
    }

    //Get the size of the stack
    size() {
        return this.items.length; //Return the number of items in the stack
    }
}

//Initialize the queue and stack
const ticketQueue = new Queue();
const bookingHistory = new Stack();

//Event listener to handle form submission when the user clicks
document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault(); //Prevent the default form submission
    const name = document.getElementById('name').value; // Get the name entered in the form
    const seat = document.getElementById('seat').value; // Get the seat number entered in the form
    const ticket = new Ticket(name,seat); //Create a new Ticket instance with the name and seat

    ticketQueue.enqueue(ticket);
    bookingHistory.push(ticket);

    updateUI(); //Update the UI to reflect the current state of the queue and stack

    //Clear the form
    document.getElementById('form').reset();
});

//Function to update the UI and display the current state
function updateUI() {
    const queueList = document.getElementById('ticket-queue');
    queueList.innerHTML = ''; //Clear the existing queue list
    ticketQueue.items.forEach(ticket => {
        const li = document.createElement('li');
        li.textContent = `Name: ${ticket.name} - Seat: ${ticket.seat}`;
        queueList.appendChild(li);
    });

    const stackList = document.getElementById('booking-list');
    stackList.innerHTML = ''; //Clear the existing stack list
    bookingHistory.items.slice().reverse().forEach(ticket => {
        const li = document.createElement('li');
        li.textContent = `Name: ${ticket.name} - Seat: ${ticket.seat}`;
        stackList.appendChild(li);
    })
}