import React from 'react';
import debounce from 'lodash.debounce';
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import { NoteProps } from './interfaces';
import { NoteStatus } from './enums';

function Note(props: NoteProps) {
  const {
    id,
    title,
    body,
    status,
    selected,
    onChange,
    onSelect,
  } = props;

  return (
    <Card className="note-card">
      <Checkbox
        size="small"
        className="note-selector"
        checked={selected}
        onChange={onSelect}
      />

      <TextField
        size="small"
        name="title"
        label={`Note #${id}`}
        defaultValue={title}
        onChange={debounce(onChange, 500)}
        className="note-field"
        variant="standard"
        error={status === NoteStatus.NotComplete}
      />

      <TextField
        multiline
        rows={6}
        maxRows={6}
        size="small"
        name="body"
        label={status}
        defaultValue={body}
        onChange={debounce(onChange, 500)}
        className="note-field"
        variant="standard"
        error={status === NoteStatus.NotComplete}
      />
    </Card>
  );
}

export default Note;
