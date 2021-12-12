import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import KanbanCard from './KanbanCard';
import { KanbanColumnProps } from './interfaces';

function KanbanColumn(props: KanbanColumnProps) {
  const { items, title, createActions } = props;

  return (
    <Box>
      <Typography variant="h2">
        {title}
      </Typography>

      <Divider />

      { items.map((kanbanItem) => (
        <KanbanCard
          item={kanbanItem}
          buttons={<div />}
          actions={createActions(kanbanItem)}
        />
      ))}
    </Box>
  );
}

export default KanbanColumn;
