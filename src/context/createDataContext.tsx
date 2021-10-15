import React, { useReducer } from 'react';
type Props = {
  children?: React.ReactNode;
};

export default (
  reducer: any,
  actions: { [index: string]: Function },
  initialState: any
) => {
  const Context = React.createContext(initialState);
  console.log('DEBUG actions: ', actions);
  const Provider = ({ children }: any) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const boundActions: { [index: string]: Function } = {};
    for (let key in actions) {
      boundActions[key] = actions[key](dispatch);
    }
    console.log('DEBUG boundActions: ', boundActions);

    return (
      <Context.Provider value={{ state, ...boundActions }}>
        {children}
      </Context.Provider>
    );
  };

  return { Context, Provider };
};
