import React, { useState, useEffect } from 'react';
import axios from 'axios';
import GroupingControls from './GroupingControls';
import SortingControls from './SortingControls';
import Column from './Column';
import Card from './Card'; // Import the Card component
import {
  groupAndSortTickets,
  groupTicketsByStatus,
  groupTicketsByUser,
  groupTicketsByPriority,
  sortTicketsByPriority,
  sortTicketsByTitle,
} from './helpers'; // Import the helper functions

const KanbanBoard = () => {
  const [tickets, setTickets] = useState([]);
  const [groupingOption, setGroupingOption] = useState('');
  const [sortingOption, setSortingOption] = useState('');
  const [newCardTitle, setNewCardTitle] = useState('');
  const [newCardPriority, setNewCardPriority] = useState('');
  

  useEffect(() => {
    fetchData();
  }, [groupingOption, sortingOption]);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://api.quicksell.co/v1/internal/frontend-assignment/tickets');
      setTickets(response.data.tickets);
    } catch (error) {
      console.error('Error fetching tickets:', error);
    }
  };

  const groupedAndSortedTickets = groupAndSortTickets(tickets, groupingOption, sortingOption);

  const handleFormSubmit = event => {
    event.preventDefault();

    const newCard = {
      title: newCardTitle,
      priority: newCardPriority,
      // Add other properties as needed
    };

    setTickets([...tickets, newCard]);

    setNewCardTitle('');
    setNewCardPriority('');
  };

  return (
    <div className="kanban-board">
      <GroupingControls onSelectGrouping={setGroupingOption} />
      <SortingControls onSelectSorting={setSortingOption} />
      <div className="card-container">
        <form onSubmit={handleFormSubmit}>
          <input
            type="text"
            placeholder="Title"
            value={newCardTitle}
            onChange={event => setNewCardTitle(event.target.value)}
          />
          <input
            type="text"
            placeholder="Priority"
            value={newCardPriority}
            onChange={event => setNewCardPriority(event.target.value)}
          />
          <button type="submit">Add Card</button>
        </form>
        {Object.entries(groupedAndSortedTickets).map(([group, ticketsInGroup]) => (
          <Column key={group} title={group}>
            {ticketsInGroup.map(ticket => (
              <Card key={ticket.id} ticket={ticket} />
            ))}
          </Column>
        ))}
      </div>
    </div>
  );
};

export default KanbanBoard;
