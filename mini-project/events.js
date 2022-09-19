class Event {
    constructor(name, description) {
      this.name = name;
      this.description = description;
      this.availableTickets = [];
    }
    //function that creates each ticket type class and pushes objs into array
    addAvailableTickets(name, price) {
      const ticType = new TicketType(name, price);
      this.availableTickets.push(ticType);
    }
    //function to return a string with all available Tickets for that certain event
    allTickets() {
      let string = "All tickets: "
      for (let i = 0; i < this.availableTickets.length; i++) {
        string += ` ${i + 1}. ${this.availableTickets[i].name} ($${this.availableTickets[i].price})`;
      }
      return string;
    }
    //function that checks if tickets are availabe within a certain range of prices
    searchTickets(lower, upper) {
      let eligible = "Eligible tickes: ";
      let counter = 1;
      if (lower == 0 && upper == 0) {
        return 'Enter valid range';
      }
      for (let i = 0; i < this.availableTickets.length; i++) {
        //console.log(this.availableTickets[i].price);
        if (this.availableTickets[i].price >= lower && this.availableTickets[i].price <= upper) {
          eligible += `${[i + 1]}. ${this.availableTickets[i].name} ($${this.availableTickets[i].price}) `;
          counter++;
        }
      }
      if(counter === 1){
              return "No tickets available";
    }
    return eligible;
  }
  };
  
  
  //creates Ticket type object
  class TicketType {
    constructor(name, price) {
      this.name = name;
      this.price = price;
    }
  }
  
  // creating three new events
  const eventOne = new Event('KLOS Golden Gala', 'An evening with hollywood vampires');
  const eventTwo = new Event('Skillet & Sevendust', 'Victorious war tour');
  const eventThree = new Event('Jenny Lewis', 'On the line tour 2019');
  
  //array that will eventually house all events
  const eventArray = [];
  
  //pushes all events into eventArray
  eventArray.push(eventOne, eventTwo, eventThree);
  
  //adds available tickets to each 
  eventOne.addAvailableTickets("human", 299);
  eventOne.addAvailableTickets("vampire", 99);
  
  eventTwo.addAvailableTickets("General Admission", 25)
  eventTwo.addAvailableTickets("Floor Seating", 80)
  
  eventThree.addAvailableTickets("Orchestra", 300)
  eventThree.addAvailableTickets("Mezzanine", 200)
  eventThree.addAvailableTickets("Balcony", 100)
  
  //searching price ranges on the events 
  console.log(eventOne.searchTickets(10, 300));
  console.log(eventOne.searchTickets(0, 100));
  console.log(eventThree.searchTickets(100, 250));
  console.log(eventTwo.searchTickets(30, 50));
  console.log(eventThree.searchTickets(0,0));
  
  
  
  
  document.addEventListener('DOMContentLoaded', () => {
    let html = '';
    eventArray.forEach((item) => {
      html += `<li>${item.name} - ${item.description} - ${item.searchTickets(0, 100)}`;
    });
    document.querySelector('#event').innerHTML = html;
  });
  
  
