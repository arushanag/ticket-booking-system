class Ticket {
    constructor(name, seat) {
        this.name = name;
        this.seat = seat;
    }
} 

class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(item) {
        this.items.push(item);
    }

    dequeue() {
        if(this.isEmpty()) return null;
        return this.items.shift();
    }

    front() {
        if(this.isEmpty()) return null;
        return this.items[0];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }
}

class Stack {
    constructor() {
        this.items = [];
    }

    push(item) {
        this.items.push(item);
    }

    pop() {
        if(this.isEmpty()) return null;
        return this.items.pop();
    }

    peek() {
        if(this.isEmpty()) return null;
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }
}

//Initialize the queue and stack
const ticketQueue = new Queue();
const bookingHistory = new Stack();

document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const seat = document.getElementById('seat').value;
    const ticket = new Ticket(name,seat);

    ticketQueue.enqueue(ticket);
    bookingHistory.push(ticket);

    updateUI();

    //Clear the form
    document.getElementById('form').reset();
});

function updateUI() {
    const queueList = document.getElementById('ticket-queue');
    queueList.innerHTML = '';
    ticketQueue.items.forEach(ticket => {
        const li = document.createElement('li');
        li.textContent = `Name: ${ticket.name} - Seat: ${ticket.seat}`;
        queueList.appendChild(li);
    });

    const stackList = document.getElementById('booking-list');
    stackList.innerHTML = '';
    bookingHistory.items.slice().reverse().forEach(ticket => {
        const li = document.createElement('li');
        li.textContent = `Name: ${ticket.name} - Seat: ${ticket.seat}`;
        stackList.appendChild(li);
    })
}