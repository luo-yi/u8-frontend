import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import { useArray, useLocalStorage, useSelector } from '../../common/hooks';
import { NoteInterface } from './interfaces';
import { NoteStatus } from './enums';
import Note from './Note';
import ActionBar from './ActionBar';
import './styles.css';

function Notes() {
  // -------------------------------- State -------------------------------- //
  // ----------------------------------------------------------------------- //
  const [noteCountLocal, setNoteCountLocal] = useLocalStorage<number>('noteCount', 0);
  const [noteCount, setNoteCount] = useState<number>(noteCountLocal);

  const [notesLocal, setNotesLocal] = useLocalStorage<NoteInterface[]>('notes', []);
  const notes = useArray<NoteInterface>(notesLocal);

  const selector = useSelector();

  // ----------------------------- useEffects ------------------------------ //
  // ----------------------------------------------------------------------- //
  useEffect(() => setNoteCountLocal(noteCount), [noteCount]);
  useEffect(() => setNotesLocal(notes.value), [notes]);

  // --------------------------- Event Handlers ---------------------------- //
  // ----------------------------------------------------------------------- //
  const onAdd = () => {
    notes.append({
      id: String(noteCount),
      title: '',
      body: '',
      status: NoteStatus.NotComplete,
    });
    setNoteCount((x) => x + 1);
  };

  const onChange = (idx: number) => (e: any) => {
    notes.setValue((arr) => {
      const newArr = [...arr];

      newArr[idx] = {
        ...newArr[idx],
        [e.target.name]: e.target.value,
      };

      return newArr;
    });
  };

  const onDelete = () => {
    notes.removeByIds(selector.selected);
    selector.clear();
  };

  const onMarkAs = (status: string) => {
    notes.setValue((arr) => (
      arr.map((elem) => {
        if (selector.selected.includes(elem.id)) {
          return { ...elem, status };
        }
        return elem;
      })
    ));
    selector.clear();
  };

  // ------------------------------- Render -------------------------------- //
  // ----------------------------------------------------------------------- //
  return (
    <Box className="main">
      <ActionBar
        selected={selector.selected}
        onAdd={onAdd}
        onDeselect={() => selector.clear()}
        onDelete={onDelete}
        onMarkAs={onMarkAs}
      />

      <Box className="main-body">
        <Grid container spacing={2}>
          {notes.value.map((note, idx) => (
            <Grid xs={6} lg={4} xl={3} item>
              <Note
                id={note.id}
                title={note.title}
                body={note.body}
                status={note.status}
                selected={selector.isSelected(note.id)}
                onChange={onChange(idx)}
                onSelect={(e: any) => selector.set(note.id, e.target.checked)}
              />
            </Grid>
          ))}
        </Grid>
      </Box>

      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        open={selector.selected.length > 0}
      >
        <Alert severity="info" className="notes-snackbar">
          {selector.selected.length > 0 && `${selector.selected.length} Note${selector.selected.length === 1 ? '' : 's'} Selected`}
        </Alert>
      </Snackbar>
    </Box>
  );
}

export default Notes;
