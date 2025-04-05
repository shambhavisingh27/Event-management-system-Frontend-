const EventList = ({ events = [], setEvents, user }) => {
    if (!Array.isArray(events)) {
      console.error("Events is not an array:", events);
      return <p>Error: Events data is invalid.</p>;
    }
  
    const handleDelete = (eventId) => {
      const updatedEvents = events.filter(event => event.id !== eventId);
      setEvents(updatedEvents);
      localStorage.setItem("events", JSON.stringify(updatedEvents));
    };
  
    const handleRSVP = (eventId) => {
      const updatedEvents = events.map(event => {
        if (event.id === eventId) {
          return {
            ...event,
            attendees: [...(event.attendees || []), user.name], // Add user to attendees
          };
        }
        return event;
      });
  
      setEvents(updatedEvents);
      localStorage.setItem("events", JSON.stringify(updatedEvents));
    };
  
    return (
      <div>
        <h2>Event List</h2>
        <ul>
          {events.map((event) => (
            <li key={event.id}>
              <strong>{event.name}</strong> - {event.date}
              <br />
              <span>Attendees: {event.attendees?.length || 0}</span>
              
             
              {user.role === "user" && !event.attendees?.includes(user.name) && (
                <button onClick={() => handleRSVP(event.id)}>RSVP</button>
              )}
  
              
              {user.role === "admin" && (
                <button onClick={() => handleDelete(event.id)}>Delete</button>
              )}
  
              
              {event.attendees?.length > 0 && (
                <p>Attendees: {event.attendees.join(", ")}</p>
              )}
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default EventList;
  