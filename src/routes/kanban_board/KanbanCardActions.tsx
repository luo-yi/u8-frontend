import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Card';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { KanbanCardActionsProps } from './interfaces';

function KanbanCardActions(props: KanbanCardActionsProps) {
  const { actions } = props;

  const [showMenu, setShowMenu] = useState(false);

  return (
    <Box
      p={1}
      className="float-right"
      onMouseLeave={() => setShowMenu(false)}
    >
      <Button
        size="small"
        variant="outlined"
        endIcon={<KeyboardArrowDownIcon />}
        onClick={() => setShowMenu((x) => !x)}
        className="float-right"
      >
        Actions
      </Button>
      <br />
      {showMenu && (
        <Paper className="float-right">
          {actions.map((action) => (
            <MenuItem onClick={action.onClick}>
              {action.label}
            </MenuItem>
          ))}
        </Paper>
      )}
    </Box>
  );
}

export default KanbanCardActions;
