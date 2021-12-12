import { useState } from 'react';

function useArray<T extends object>(initialArray: T[] = []) {
  const [value, setValue] = useState(initialArray);

  const append = (item: T) => setValue((arr) => [...arr, item]);

  const clear = () => setValue([]);

  const removeAtIndex = (index: number) => {
    const newArray = [...value];
    newArray.splice(index, 1);
    setValue(newArray);
  };

  const removeById = (id: any) => setValue((arr) => arr.filter((x: any) => x.id !== id));

  const removeByIds = (ids: any[]) => {
    setValue((arr) => {
      const newArr = arr.filter((x: any) => !ids.includes(x.id));
      return newArr;
    });
  };

  return {
    value, append, clear, removeAtIndex, removeById, removeByIds, setValue,
  };
}

export default useArray;
