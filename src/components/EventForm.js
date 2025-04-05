import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const EventForm = ({ user, setEvents }) => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const savedEvents = JSON.parse(localStorage.getItem("events")) || [];
    setEvents(savedEvents);
  }, [setEvents]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (user.role !== "admin") {
      alert("Only admins can create events.");
      return;
    }

    // Get existing events from localStorage
    const storedEvents = JSON.parse(localStorage.getItem("events")) || [];

    const newEvent = { 
      id: Date.now(), 
      name, 
      date, 
      attendees: [] 
    };

    // Append new event to existing events
    const updatedEvents = [...storedEvents, newEvent];

    setEvents(updatedEvents);
    localStorage.setItem("events", JSON.stringify(updatedEvents));

    alert(`Event Created: ${name} on ${date}`);
    navigate("/events");
  };

  return (
    <div>
      <h2>Create Event</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Event Name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          required 
        />
        <input 
          type="date" 
          value={date} 
          onChange={(e) => setDate(e.target.value)} 
          required 
        />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default EventForm;
