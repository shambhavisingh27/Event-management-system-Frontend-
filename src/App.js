import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import EventList from "./pages/EventList";
import EventForm from "./components/EventForm";
import AttendeesList from "./pages/AttendeesList";

function App() {
  const [user, setUser] = useState(null);
  const [events, setEvents] = useState(() => {
    const storedEvents = localStorage.getItem("events");
    return storedEvents ? JSON.parse(storedEvents) : [
      { id: 1, name: "Tech Conference", date: "2025-06-20", attendees: [] },
      { id: 2, name: "Music Fest", date: "2025-07-15", attendees: [] },
    ];
  });

  useEffect(() => {
    localStorage.setItem("events", JSON.stringify(events));
  }, [events]);
  const handleLogout = () => {
    setUser(null);
    alert("You have been logged out.");
  };
  return (
    <Router>
     <Navbar user={user} handleLogout={handleLogout} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/dashboard" element={user ? <Dashboard user={user} /> : <Login setUser={setUser} />} />
        <Route path="/events" element={<EventList user={user} events={events} setEvents={setEvents} />} />
        <Route path="/create-event" element={user?.role === "admin" ? <EventForm user={user} setEvents={setEvents} /> : <Login setUser={setUser} />} />
        <Route path="/attendees" element={user?.role === "admin" ? <AttendeesList events={events} /> : <Login setUser={setUser} />} />
      </Routes>
    </Router>
  );
}
export default App;