import React from 'react';
import { useTheme } from '@mui/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import { ActionBarProps } from './interfaces';

function ActionBar(props: ActionBarProps) {
  const { onAdd } = props;

  // @ts-ignore
  const isDark = useTheme().palette.mode === 'dark';

  return (
    <Box className="action-bar">
      <Button
        size="small"
        variant={isDark ? 'outlined' : 'contained'}
        color="success"
        endIcon={<AddIcon />}
        onClick={onAdd}
        className="float-right"
      >
        Add Card
      </Button>
    </Box>
  );
}

export default ActionBar;
