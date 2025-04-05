Event Management System - Frontend
This project is the frontend of an Event Management System built using React.js. It provides a user-friendly interface for managing events, RSVPs, attendees, and sending notifications. This application interacts with a Node.js and Express.js backend for all its data.

Features:
1. Event Creation
Admin can create new events by providing event details such as name, description, and date.
The event creation page is restricted to only admin users.
2. Event List (View & Delete)
All users can view a list of available events in a tabular format.
Admin can delete events from the list.
3. RSVP to Events
Logged-in users can RSVP to events.
4. Attendees Management
Admin can view the list of attendees for each event.
5. Role-Based Access
Routes such as event creation/deletion and attendee management are restricted to admins.
General users can view events and RSVP.