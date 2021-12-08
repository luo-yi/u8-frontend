import React, { useState, useEffect } from 'react';
import { FormEvent } from '../../common/interfaces';
import { useForm, useArray, useLocalStorage } from '../../common/hooks';
import { KanbanItem } from './interfaces';
import { KanbanCardType, Priority } from './enums';
import { validateForm } from './validators';
import KanbanForm from './KanbanForm';
import KanbanCard from './KanbanCard';

const formInitial = {
  name: '',
  description: '',
  priority: Priority.Low,
  type: KanbanCardType.NewFeature,
};

function Kanban() {
  // -------------------------------- State -------------------------------- //
  // ----------------------------------------------------------------------- //
  const [kanbanItemCountLocal, setKanbanItemCountLocal] = useLocalStorage<number>('kanbanItemCount', 0);
  const [kanbanItemCount, setKanbansCount] = useState<number>(kanbanItemCountLocal);

  const [backlogLocal, setBacklogLocal] = useLocalStorage<KanbanItem[]>('backlog', []);
  const backlog = useArray<KanbanItem>(backlogLocal);

  const [completedLocal, setCompletedLocal] = useLocalStorage<KanbanItem[]>('completed', []);
  const completed = useArray<KanbanItem>(completedLocal);

  const form = useForm<KanbanItem>(formInitial, validateForm);

  // ----------------------------- useEffects ------------------------------ //
  // ----------------------------------------------------------------------- //
  useEffect(() => setKanbanItemCountLocal(kanbanItemCount), [kanbanItemCount]);
  useEffect(() => setBacklogLocal(backlog.value), [backlog]);
  useEffect(() => setCompletedLocal(completed.value), [completed]);

  // --------------------------- Event Handlers ---------------------------- //
  // ----------------------------------------------------------------------- //
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    backlog.append({ ...form.values, id: kanbanItemCount });
    form.reset();
    setKanbansCount((c) => c + 1);
  };

  const setCompleted = (kanbanItem: KanbanItem) => () => {
    backlog.removeById(kanbanItem.id);
    completed.append(kanbanItem);
  };

  // ------------------------------- Render -------------------------------- //
  // ----------------------------------------------------------------------- //
  const renderBacklogButtons = (kanbanItem: KanbanItem) => (
    <>
      <button type="button" onClick={setCompleted(kanbanItem)}>
        Set Completed
      </button>
      <button type="button" onClick={() => backlog.removeById(kanbanItem.id)}>
        Delete
      </button>
    </>
  );

  const renderCompletedButtons = (kanbanItem: KanbanItem) => (
    <button type="button" onClick={() => completed.removeById(kanbanItem.id)}>
      Delete
    </button>
  );

  return (
    <main>
      <div className="row">
        <div className="p-12 col-lg-3 col-md-4 col-xs-8 col-xs-offset-2 col-md-offset-0">
          <KanbanForm
            form={form.values}
            errors={form.errors}
            isValid={form.isValid}
            onChange={form.onChange}
            onSubmit={onSubmit}
          />
        </div>

        <div className="col-xs-12 col-md-8">
          <div className="row">
            <div className="p-12 col-sm-6 col-xs-12">
              <h2 className="border-bottom">Backlog</h2>

              { backlog.value.map((kanbanItem) => (
                <KanbanCard
                  kanbanItem={kanbanItem}
                  buttons={renderBacklogButtons(kanbanItem)}
                />
              ))}
            </div>

            <div className="p-12 col-sm-6 col-xs-12">
              <h2 className="border-bottom">Completed</h2>

              { completed.value.map((kanbanItem) => (
                <KanbanCard
                  kanbanItem={kanbanItem}
                  buttons={renderCompletedButtons(kanbanItem)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Kanban;
