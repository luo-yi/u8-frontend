import { KanbanItem } from './interfaces';

// eslint-disable-next-line import/prefer-default-export
export const validateForm = (values: KanbanItem, touched: any) => {
  let isValid = true;
  const errors = {} as any;

  if (values.title.length === 0) {
    isValid = false;

    if (touched.title) {
      errors.title = 'Required Field';
    }
  }

  if (values.description.length === 0) {
    isValid = false;

    if (touched.description) {
      errors.description = 'Required Field';
    }
  }

  return { errors, isValid };
};
