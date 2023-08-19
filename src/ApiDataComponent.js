// eslint-disable-next-line
import React, { useState,useEffect } from 'react';
import Card from './component/Card'; // Import the Card component

function ApiDataComponent() {

 
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.quicksell.co/v1/internal/frontend-assignment')
      .then(response => response.json())
      .then(data => {
        setTickets(data.tickets);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <div className="card-container">
        {tickets.map(ticket => (
          <Card key={ticket.id} ticket={ticket} />
        ))}
      </div>
    </div>
  );
}
export default ApiDataComponent;

// export default ApiDataComponent;
// import React, { useState, useEffect } from 'react';
// import Card from './component/Card';

// function ApiDataComponent({ status }) {
//   const [tickets, setTickets] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetch('https://api.quicksell.co/v1/internal/frontend-assignment')
//       .then(response => response.json())
//       .then(data => {
//         const filteredTickets = data.tickets.filter(ticket => ticket.status === status);
//         setTickets(filteredTickets);
//         setLoading(false);
//       })
//       .catch(error => {
//         console.error('Error fetching data:', error);
//         setLoading(false);
//       });
//   }, [status]);

//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   return (
//     <div className="card-container">
//       {tickets.map(ticket => (
//         <Card key={ticket.id} ticket={ticket} />
//       ))}
//     </div>
//   );
// }

// const KanbanBoard = () => {
//   const columns = [
//     { status: 'Todo', title: 'To Do' },
//     { status: 'In progress', title: 'In Progress' },
//     { status: 'Done', title: 'D' },
//   ];

//   return (
//     <div className="kanban-board">
//       {columns.map(column => (
//         <div key={column.status} className="kanban-column">
//           <h2>{column.title}</h2>
//           <ApiDataComponent status={column.status} />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default KanbanBoard;

