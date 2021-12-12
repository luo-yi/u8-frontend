import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useForm, useArray, useLocalStorage } from '../../common/hooks';
import { KanbanItem } from './interfaces';
import { KanbanCardType, Priority } from './enums';
import { validateForm } from './validators';
import KanbanFormModal from './KanbanFormModal';
import KanbanColumn from './KanbanColumn';
import ActionBar from './ActionBar';
import './styles.css';

const formInitial = {
  title: '',
  description: '',
  priority: Priority.Low,
  type: KanbanCardType.NewFeature,
};

function KanbanBoard() {
  // -------------------------------- State -------------------------------- //
  // ----------------------------------------------------------------------- //
  const [kanbanItemCountLocal, setKanbanItemCountLocal] = useLocalStorage<number>('kanbanItemCount', 0);
  const [kanbanItemCount, setKanbansCount] = useState<number>(kanbanItemCountLocal);

  const [backlogLocal, setBacklogLocal] = useLocalStorage<KanbanItem[]>('backlog', []);
  const backlog = useArray<KanbanItem>(backlogLocal);

  const [inProgressLocal, setInProgressLocal] = useLocalStorage<KanbanItem[]>('inProgress', []);
  const inProgress = useArray<KanbanItem>(inProgressLocal);

  const [completedLocal, setCompletedLocal] = useLocalStorage<KanbanItem[]>('completed', []);
  const completed = useArray<KanbanItem>(completedLocal);

  const form = useForm<KanbanItem>(formInitial, validateForm);
  const [formOpen, setFormOpen] = useState(false);

  // ----------------------------- useEffects ------------------------------ //
  // ----------------------------------------------------------------------- //
  useEffect(() => setKanbanItemCountLocal(kanbanItemCount), [kanbanItemCount]);
  useEffect(() => setBacklogLocal(backlog.value), [backlog]);
  useEffect(() => setInProgressLocal(inProgress.value), [inProgress]);
  useEffect(() => setCompletedLocal(completed.value), [completed]);

  // --------------------------- Event Handlers ---------------------------- //
  // ----------------------------------------------------------------------- //
  const onFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    backlog.append({ ...form.values, id: kanbanItemCount });
    form.reset();
    setKanbansCount((c) => c + 1);
    setFormOpen(false);
  };

  const onFormClose = () => {
    form.reset();
    setFormOpen(false);
  };

  // ------------------------------- Render -------------------------------- //
  // ----------------------------------------------------------------------- //
  const moveItem = (item: KanbanItem, fromArray: any, toArray: any) => {
    fromArray.removeById(item.id);

    if (toArray !== null) {
      toArray.append(item);
    }
  };

  const createBacklogActions = (item: KanbanItem) => ([
    { label: 'In Progress', onClick: () => moveItem(item, backlog, inProgress) },
    { label: 'Completed', onClick: () => moveItem(item, backlog, completed) },
    { label: 'Delete', onClick: () => moveItem(item, backlog, null) },
  ]);

  const createInProgressActions = (item: KanbanItem) => ([
    { label: 'Backlog', onClick: () => moveItem(item, inProgress, backlog) },
    { label: 'Completed', onClick: () => moveItem(item, inProgress, completed) },
    { label: 'Delete', onClick: () => moveItem(item, inProgress, null) },
  ]);

  const createCompletedActions = (item: KanbanItem) => ([
    { label: 'Backlog', onClick: () => moveItem(item, completed, backlog) },
    { label: 'In Progress', onClick: () => moveItem(item, completed, inProgress) },
    { label: 'Delete', onClick: () => moveItem(item, completed, null) },
  ]);

  const columns = [
    { title: 'Backlog', items: backlog.value, createActions: createBacklogActions },
    { title: 'In Progress', items: inProgress.value, createActions: createInProgressActions },
    { title: 'Completed', items: completed.value, createActions: createCompletedActions },
  ];

  return (
    <Box className="main">
      <ActionBar onAdd={() => setFormOpen(true)} />

      <Grid container spacing={2} className="main-body">
        {columns.map((column) => (
          <Grid xs={12} md={4} item>
            <KanbanColumn
              title={column.title}
              items={column.items}
              createActions={column.createActions}
            />
          </Grid>
        ))}
      </Grid>

      <KanbanFormModal
        form={form.values}
        errors={form.errors}
        isValid={form.isValid}
        onChange={form.onChange}
        onSubmit={onFormSubmit}
        onClose={onFormClose}
        open={formOpen}
      />
    </Box>
  );
}

export default KanbanBoard;
