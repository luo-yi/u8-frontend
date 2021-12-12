import React, { useState } from 'react';
import clsx from 'clsx';
import { useTheme } from '@mui/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { KanbanCardProps } from './interfaces';
import KanbanCardActions from './KanbanCardActions';

function KanbanCard(props: KanbanCardProps) {
  const {
    item, buttons, actions,
  } = props;

  const {
    id, type, title, description, priority,
  } = item;

  // @ts-ignore
  const isDark = useTheme().palette.mode === 'dark';
  const [isMouseOver, setIsMouseOver] = useState(false);

  const onMouseEnter = () => {
    setIsMouseOver(true);
  };

  const onMouseLeave = () => {
    setIsMouseOver(false);
  };

  return (
    <Card
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="kanban-card"
    >
      { isMouseOver && (
        <Box
          className={clsx('kanban-card-overlay', {
            'kanban-card-overlay-light': !isDark,
            'kanban-card-overlay-dark': isDark,
          })}
        >
          <KanbanCardActions actions={actions} />
        </Box>
      )}

      <Typography variant="h3">
        {`${id}: ${title}`}
      </Typography>

      <Typography variant="subtitle1" style={{ fontSize: 14 }}>
        {`${type}: ${priority} Priority`}
      </Typography>

      <Divider />

      <Typography variant="body1" style={{ fontSize: 14, paddingTop: '12px' }}>
        {description}
      </Typography>

      { buttons }
    </Card>
  );
}

export default KanbanCard;
