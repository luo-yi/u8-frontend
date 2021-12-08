import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/home';
import Kanban from './routes/kanban_board';

const routes = [
  { name: 'Home', path: '/', Component: Home },
  { name: 'Kanban Board', path: '/kanban-board', Component: Kanban },
];

function App() {
  return (
    <Routes>
      {routes.map(({ path, Component }) => (
        <Route
          path={path}
          element={<Component />}
        />
      ))}
    </Routes>
  );
}

export default App;
