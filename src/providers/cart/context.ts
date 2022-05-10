

export type ContextProps = {
    count: number
    addToCart: number
};

const Context = createContext<ContextProps>({
  isDialogOpen: false,
  showDialog: NOOP_VOID,
  closeDialog: NOOP_VOID,
});

export default Context;
