import { useReducer, useState } from "react";

// some sample events
// feel free to edit the data, and/or edit the fields
const event1 = {
    id: "1",
    name: "Birthday",
    date: "2021-09-01",
    description: "A birthday party for my best friend",
    category: "Celebration",
  };
  
  const event2 = {
    id: "2",
    name: "Graduation",
    date: "2021-08-01",
    description: "The class of 2021 graduates from East High",
    category: "Education",
  };
  
  const event3 = {
    id: "3",
    name: "JS Study Session",
    date: "2021-10-01",
    description: "A chance to practice Javascript interview questions",
    category: "Education",
  };

const Events = () => {

    const initialState = {
        id: '', 
        name: '',
        date: null,
        description: ''
    };

    const reducer = (state, action) => {
        switch (action.type) {
            case "editId":
                return { ...state, id: action.payload };
            case "editName":
                return { ...state, name: action.payload };
            case "editDate":
                return { ...state, date: action.payload };
            case "editDescription":
                return { ...state, description: action.payload };

            default:
                return state;
        }
    }
    const [events, setEvents] = useState([event1, event2, event3]);
    const [state, dispatch] = useReducer(reducer, initialState);

    const handleSubmit = (e) => {
        e.preventDefault();
        setEvents([...events, state]);
    }

    const [eventIdToDelete, setEventsIdToDelete] = useState("")

    //handle Delete Event function
    const handleDeleteEvent = (e) => {
        e.preventDefault();
        const deleteEvents = events.filter((event) => event.id !== eventIdToDelete);
        setEvents(deleteEvents)
        setEventsIdToDelete("");
    }

    return (
        <section className="event-management">
        <h2>Event Management</h2>
        <div>
          <h3>All Events</h3>
          <ul id="events-list">
            {events.map((event, index) => {
                return (
                    <li>
                        Id: {event.id}, Name: {event.name} Date: {event.date}, Description: {event.description}
                    </li>
                );
              })
        }
            
          </ul>
          
        </div>

        <div>
              <h3>Add Event</h3>
              <form id="add-event" onSubmit = {handleSubmit}>
                <fieldset>
                  <label> Id: </label>
                  <input type="number" 
                  id="add-event-id" 
                  value={state.id} 
                  onChange={(e) => dispatch({type: 'editId', payload: e.target.value})} />
                  <br />
                  <label> Name: </label>
                  <input type="text" 
                  id="add-event-name" 
                  value={state.name} 
                  onChange={(e) => dispatch({type: 'editName', payload: e.target.value})} />
                  <br />
                  <label> Date: </label>
                  <input type="text" 
                  id="add-event-date" 
                  value={state.date} 
                  onChange={(e) => dispatch({type: 'editDate', payload: e.target.value})} />
                  <br />
                  <label> Description: </label>
                  <input type="textarea"
                  rows={5} cols={5}
                  id="add-event-description" 
                  value={state.description} 
                  onChange={(e) => dispatch({type: 'editDescription', payload: e.target.value})} />
                </fieldset>
                {/* Add more form fields here */}
                <input type="submit" value="Add" />
              </form>
            </div>

            <div>
          <h3>Delete Event</h3>
          <form id="delete-event" onSubmit={handleDeleteEvent}>
            <fieldset>
              <label>Event ID</label>
              <input type="number" id="delete-event-id" value={eventIdToDelete} onChange={(e)=> setEventsIdToDelete(e.target.value)}/>
            </fieldset>
            <input type="submit" />
          </form>
        </div>
    </section>
    )
    }

export default Events;