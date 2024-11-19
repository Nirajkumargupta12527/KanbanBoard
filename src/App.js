import React from 'react';
import { GroupingProvider } from './contexts/GroupingContext';
import { TicketDataProvider } from './contexts/TicketDataContext';
import KanbanBoard from './KanbanBoard';
import Navbar from './Navbar';

function App() {
  return (
    <TicketDataProvider>
      <GroupingProvider>
        <Navbar/>
        <KanbanBoard />
      </GroupingProvider>
    </TicketDataProvider>
  );
}

export default App;
