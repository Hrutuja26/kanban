// priority.js

export const groupTicketsByPriority = (tickets) => {
    const grouped = {
      Urgent: [],
      High: [],
      Medium: [],
      Low: [],
      'No priority': [],
    };
  
    tickets.forEach(ticket => {
      if (ticket.priority === 4) {
        grouped.Urgent.push(ticket);
      } else if (ticket.priority === 3) {
        grouped.High.push(ticket);
      } else if (ticket.priority === 2) {
        grouped.Medium.push(ticket);
      } else if (ticket.priority === 1) {
        grouped.Low.push(ticket);
      } else {
        grouped['No priority'].push(ticket);
      }
    });
  
    return grouped;
  };
  