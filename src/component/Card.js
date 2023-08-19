
import React from 'react';
import './Card.css'; // Import the CSS file for styling

const Card = ({ ticket }) => {
  return (
    <div className="card">
      <p className="ticket-info">
  ID: {ticket.id}
  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
    <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
  </svg>
</p>

      
      <h5>{ticket.title}   </h5>
      {/* <p>Status: {ticket.status}</p> */}
      {/* <p>Priority: {ticket.priority}</p>
      <p>User: {ticket.userId}</p> */}
      <p><svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" class="bi bi-dot" viewBox="0 0 16 16">
  <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
</svg>Tags: {ticket.tag.join(', ')}</p>
      {/* You can display more ticket details here */}
    </div>
  );
};

export default Card;
