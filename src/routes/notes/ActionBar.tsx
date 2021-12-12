import React from 'react';
import { useTheme } from '@mui/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import DeselectIcon from '@mui/icons-material/Deselect';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { ActionBarProps } from './interfaces';
import { NoteStatus } from './enums';

function ActionBar(props: ActionBarProps) {
  const {
    onAdd, onDeselect, onDelete, onMarkAs, selected,
  } = props;

  const [markAsMenuAnchor, setMarkAsMenuAnchor] = React.useState(null);

  const onMarkAsComplete = () => {
    onMarkAs(NoteStatus.Complete);
    setMarkAsMenuAnchor(null);
  };

  const onMarkAsNotComplete = () => {
    onMarkAs(NoteStatus.NotComplete);
    setMarkAsMenuAnchor(null);
  };

  // @ts-ignore
  const isDark = useTheme().palette.mode === 'dark';

  return (
    <Box className="action-bar">
      <Button
        size="small"
        variant={isDark ? 'outlined' : 'contained'}
        color="success"
        endIcon={<AddIcon />}
        disableElevation={!isDark}
        onClick={onAdd}
        className="float-right"
      >
        Add Note
      </Button>

      <Button
        size="small"
        variant="outlined"
        color="error"
        endIcon={<DeleteIcon />}
        onClick={onDelete}
        disabled={selected.length === 0}
        style={{ marginRight: '12px' }}
      >
        Delete
      </Button>

      <Button
        size="small"
        variant="outlined"
        color="primary"
        endIcon={<DeselectIcon />}
        onClick={onDeselect}
        disabled={selected.length === 0}
        style={{ marginRight: '12px' }}
      >
        Deselect
      </Button>

      <Button
        size="small"
        variant="outlined"
        onClick={(e: any) => setMarkAsMenuAnchor(e.currentTarget)}
        disabled={selected.length === 0}
        endIcon={<KeyboardArrowDownIcon />}
      >
        Mark As
      </Button>

      <Menu
        anchorEl={markAsMenuAnchor}
        open={Boolean(markAsMenuAnchor)}
        onClose={() => setMarkAsMenuAnchor(null)}
      >
        <MenuItem onClick={onMarkAsComplete}>
          {NoteStatus.Complete}
        </MenuItem>
        <MenuItem onClick={onMarkAsNotComplete}>
          {NoteStatus.NotComplete}
        </MenuItem>
      </Menu>
    </Box>
  );
}

export default ActionBar;
