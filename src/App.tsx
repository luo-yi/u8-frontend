import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './common/layout';
import Home from './routes/home';
import Note from './routes/notes';
import KanbanBoard from './routes/kanban_board';

const routes = [
  { name: 'Home', path: '/', Component: Home },
  { name: 'Notes', path: '/notes', Component: Note },
  { name: 'Kanban Board', path: '/kanban-board', Component: KanbanBoard },
];

function App() {
  return (
    <Layout routes={routes}>
      <Routes>
        {routes.map(({ path, Component }) => (
          <Route
            path={path}
            element={<Component />}
          />
        ))}
      </Routes>
    </Layout>
  );
}

export default App;
