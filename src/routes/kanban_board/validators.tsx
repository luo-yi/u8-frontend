import { KanbanItem } from './interfaces';

// eslint-disable-next-line import/prefer-default-export
export const validateForm = (values: KanbanItem, touched: any) => {
  let isValid = true;
  const errors = {} as any;

  if (values.name.length === 0) {
    isValid = false;

    if (touched.name) {
      errors.name = 'Required Field';
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
