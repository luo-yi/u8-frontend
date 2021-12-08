import React from 'react';
import { KanbanFormProps } from './interfaces';
import { KanbanCardType, Priority } from './enums';

function KanbanForm(props: KanbanFormProps) {
  const {
    form, errors, isValid, onChange, onSubmit,
  } = props;

  const {
    type, name, description, priority,
  } = form;

  return (
    <form onSubmit={onSubmit} className="basic-form border border-radius">
      <div className="form-item">
        <label htmlFor="type">
          Type
          <select name="type" value={type} onChange={onChange}>
            <option value={KanbanCardType.NewFeature}>Feature</option>
            <option value={KanbanCardType.BugFix}>Bug Fix</option>
          </select>
        </label>
      </div>

      <div className="form-item">
        <label htmlFor="name">
          Name*
          <input name="name" onChange={onChange} value={name} />
          { errors.name && (
            <span className="error">
              { errors.name }
            </span>
          )}
        </label>
      </div>

      <div className="form-item">
        <label htmlFor="description">
          Description*
          <textarea name="description" onChange={onChange} value={description} />
          { errors.description && (
            <span className="error">
              { errors.description }
            </span>
          )}
        </label>
      </div>

      <div className="form-item radio-group">
        <label htmlFor="p1">
          Low Priority
          <input type="radio" name="priority" onChange={onChange} checked={priority === Priority.Low} value="Low" />
        </label>
        <label htmlFor="p2">
          Medium Priority
          <input type="radio" name="priority" onChange={onChange} checked={priority === Priority.Medium} value="Medium" />
        </label>
        <label htmlFor="p3">
          High Priority
          <input type="radio" name="priority" onChange={onChange} checked={priority === Priority.High} value="High" />
        </label>
      </div>

      <button type="submit" disabled={!isValid}>
        Submit
      </button>
    </form>
  );
}

export default KanbanForm;
