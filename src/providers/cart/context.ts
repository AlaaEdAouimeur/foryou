import { createContext } from "react";
import { NOOP_VOID } from '../../constants/common';

export type ContextProps = {
    cart: number[]
    addToCart: (productId?: number) => void;
    removeFromCart: (productId?: number) => void;
    isItemInCart: (productId?: number) => boolean;
};

const Context = createContext<ContextProps>({
    cart: [],
    addToCart: NOOP_VOID,
    removeFromCart: NOOP_VOID,
    isItemInCart: () => false,
});

export default Context;
