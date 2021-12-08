import React from 'react';
import { KanbanCardProps } from './interfaces';

const styles = {
  card: {
    background: 'white',
    padding: '12px',
    marginBottom: '12px',
  },
  description: {
    padding: '4px 0px',
  },
};

function KanbanCard(props: KanbanCardProps) {
  const {
    kanbanItem, buttons,
  } = props;

  const {
    id, type, name, description, priority,
  } = kanbanItem;

  return (
    <div style={styles.card} className="border border-radius">
      <div className="border-bottom">
        <h3 className="no-margin">
          {`${id}: ${name}`}
        </h3>
        <p className="no-margin">
          {`${type}: ${priority} Priority`}
        </p>
      </div>

      <div className="border-bottom">
        <p style={styles.description}>
          {description}
        </p>
      </div>

      <br />

      { buttons }
    </div>
  );
}

export default KanbanCard;
