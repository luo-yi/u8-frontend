import React, { useState, useEffect } from 'react';
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

  const [noteTitle, setNoteTitle] = useState(title);
  const [noteBody, setNoteBody] = useState(body);

  useEffect(() => {
    setNoteTitle(title);
    setNoteBody(body);
  }, [id]);

  const onTitleChange = (e: any) => {
    setNoteTitle(e.target.value);
    debounce(onChange, 500)(e);
  };

  const onBodyChange = (e: any) => {
    setNoteBody(e.target.value);
    debounce(onChange, 500)(e);
  };

  return (
    <Card className="note-card">
      <Checkbox
        id={`note-selected-${id}`}
        size="small"
        className="note-selector"
        checked={selected}
        onChange={onSelect}
      />

      <TextField
        id={`note-title-${id}`}
        size="small"
        name="title"
        label={`Note #${id}`}
        value={noteTitle}
        onChange={onTitleChange}
        className="note-field"
        variant="standard"
        error={status === NoteStatus.NotComplete}
      />

      <TextField
        id={`note-body-${id}`}
        multiline
        rows={6}
        maxRows={6}
        size="small"
        name="body"
        label={status}
        value={noteBody}
        onChange={onBodyChange}
        className="note-field"
        variant="standard"
        error={status === NoteStatus.NotComplete}
      />
    </Card>
  );
}

export default Note;
