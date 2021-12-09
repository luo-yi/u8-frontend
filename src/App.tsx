import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './common/layout';
import Home from './routes/home';
import UnitEight from './routes/unit_eight';
import KanbanBoard from './routes/kanban_board';

const routes = [
  { name: 'Home', path: '/', Component: Home },
  { name: 'Kanban Board', path: '/kanban-board', Component: KanbanBoard },
  { name: '?????', path: '/unit-eight', Component: UnitEight },
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
