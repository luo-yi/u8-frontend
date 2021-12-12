import { useState } from 'react';

const emptyState = {
  map: {},
  selected: [],
};

function useSelector() {
  const [state, setState] = useState({ map: {}, selected: [] as any[] });
  const { map, selected } = state;

  // @ts-ignore
  const isSelected = (key: any) => Boolean(map[key]);

  const set = (key: any, value: boolean) => {
    setState((obj) => {
      const newMap = { ...obj.map, [key]: value } as any;
      const newSelected = Object.keys(newMap).filter((k) => Boolean(newMap[k]));
      return { map: newMap, selected: newSelected };
    });
  };

  const clear = () => {
    setState(emptyState);
  };

  return {
    selected, isSelected, set, clear,
  };
}

export default useSelector;
