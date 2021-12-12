import React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { KanbanFormModalProps } from './interfaces';
import { KanbanCardType, Priority } from './enums';

function KanbanFormModal(props: KanbanFormModalProps) {
  const {
    form, errors, isValid, onChange, onSubmit, open, onClose,
  } = props;

  const {
    type, title, description, priority,
  } = form;

  return (
    <Modal open={open} onClose={onClose}>
      <Card className="kanban-form-card">
        <Typography variant="h2" style={{ fontSize: '28px' }}>
          Add Card
          <IconButton onClick={onClose} className="float-right">
            <CloseIcon />
          </IconButton>
        </Typography>

        <Divider />
        <br />

        <Box component="form" textAlign="center" onSubmit={onSubmit}>
          <TextField
            select
            size="small"
            name="type"
            label="Card Type"
            value={type}
            onChange={onChange}
            className="kanban-form-item"
          >
            <MenuItem value={KanbanCardType.NewFeature}>
              {KanbanCardType.NewFeature}
            </MenuItem>
            <MenuItem value={KanbanCardType.BugFix}>
              {KanbanCardType.BugFix}
            </MenuItem>
          </TextField>

          <TextField
            select
            size="small"
            name="priority"
            label="Priority"
            value={priority}
            onChange={onChange}
            className="kanban-form-item"
          >
            <MenuItem value={Priority.Low}>
              {Priority.Low}
            </MenuItem>
            <MenuItem value={Priority.Medium}>
              {Priority.Medium}
            </MenuItem>
            <MenuItem value={Priority.High}>
              {Priority.High}
            </MenuItem>
          </TextField>

          <TextField
            size="small"
            name="title"
            label="Title *"
            value={title}
            onChange={onChange}
            className="kanban-form-item"
            error={errors.title !== undefined}
            helperText={errors.title}
          />

          <TextField
            multiline
            rows={6}
            maxRows={6}
            size="small"
            name="description"
            label="Description *"
            value={description}
            onChange={onChange}
            className="kanban-form-item"
            error={errors.description !== undefined}
            helperText={errors.description}
          />

          <Button disabled={!isValid} variant="outlined" type="submit">
            Create
          </Button>
        </Box>
      </Card>
    </Modal>
  );
}

export default KanbanFormModal;
