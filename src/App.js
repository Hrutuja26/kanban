import React, { useState } from 'react';
import './App.css';
import Dropdown from './Dropdown'; // Import the Dropdown component
import ApiDataComponent from './ApiDataComponent'; // Import the ApiDataComponent

function App() {
  const [nestedDropdownOpen, setNestedDropdownOpen] = useState(false);
  const [selectedGrouping, setSelectedGrouping] = useState('Status');

  return (
    <div className="App">
      <Dropdown
        nestedDropdownOpen={nestedDropdownOpen}
        setNestedDropdownOpen={setNestedDropdownOpen}
        setSelectedGrouping={setSelectedGrouping}/>
      
      <ApiDataComponent />
    </div>
  );
}

export default App;





















































































// // // import React from'react'
// import './App.css';
// import Board from "./component/Board/Board"
// // import { useEffect } from "react";
// import React, { useState, useEffect } from 'react';

// // function App() {
// //   return (
// //     <div className="App">
// //       <div className ="app_navbar">
// //       <h2>Kanban</h2>
// //       </div>
// //      <div className ="app_outer">
// //      <div className ="app_boards">
// //       <Board />
// //       <Board />
// //       <Board />
// //       <Board />
      
// //      </div>
// //      </div>
// //     </div>
// // // function ApiDataComponent() {
// //  const [data, setData] = useState([]);
// //   const [loading, setLoading] = useState(true);

// //   useEffect(() => {
// //     fetch('https://api.quicksell.co/v1/internal/frontend-assignment')
// //       .then(response => response.json())
// //       .then(data => {
// //         setData(data);
// //         setLoading(false);
// //       })
// //       .catch(error => {
// //         console.error('Error fetching data:', error);
// //         setLoading(false);
// //       });
// //   }, []);

// //   if (loading) {
// //     return <p>Loading...</p>;
// //   }

// //   return (
// //     <div>
// //       <h1>API Data</h1>
// //       <pre>{JSON.stringify(data, null, 2)}</pre>
// //     </div>
// //   );
// // }

// // // export default ApiDataComponent;
// //       );
// //     }
    
// //     export default App;
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import GroupingControls from './GroupingControl'; // Make sure this filename is correct
// import SortingControls from './SortingControls'; // Make sure this filename is correct
// import Column from './Column'; // Make sure this filename is correct
// import {
  // groupAndSortTickets,
  // Import your helper functions here
// } from './helper'; // Make sure this filename is correct

// const KanbanBoard = () => {
//   const [tickets, setTickets] = useState([]);
//   const [groupingOption, setGroupingOption] = useState('');
//   const [sortingOption, setSortingOption] = useState('');

//   useEffect(() => {
//     fetchData();
//   }, [groupingOption, sortingOption]);

//   const fetchData = async () => {
//     try {
//       const response = await axios.get('https://api.quicksell.co/v1/internal/frontend-assignment/tickets');
//       setTickets(response.data.tickets); // Assuming tickets are stored in the 'tickets' property of the response
//     } catch (error) {
//       console.error('Error fetching tickets:', error);
//     }
//   };

//   const groupedAndSortedTickets = groupAndSortTickets(tickets, groupingOption, sortingOption);

//   return (
//     <div className="kanban-board">
//       <GroupingControls onSelectGrouping={setGroupingOption} />
//       <SortingControls onSelectSorting={setSortingOption} />
//       {Object.entries(groupedAndSortedTickets).map(([group, ticketsInGroup]) => (
//         <Column key={group} title={group} tickets={ticketsInGroup} />
//       ))}
//     </div>
//   );
// };

// export default KanbanBoard;
