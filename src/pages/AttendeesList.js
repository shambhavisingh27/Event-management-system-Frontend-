const AttendeesList = ({ events }) => {
    return (
      <div>
        <h2>Event Attendees</h2>
        {events.length > 0 ? (
          events.map(event => (
            <div key={event.id}>
              <h3>{event.name} - {event.date}</h3>
              {event.attendees.length > 0 ? (
                <ul>
                  {event.attendees.map((attendee, index) => (
                    <li key={index}>{index + 1}. {attendee}</li>
                  ))}
                </ul>
              ) : (
                <p>No attendees yet.</p>
              )}
            </div>
          ))
        ) : (
          <p>No events available</p>
        )}
      </div>
    );
  };
  
  export default AttendeesList;
  