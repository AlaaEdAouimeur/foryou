import { ReactNode, useState } from "react";
import Context from "./context";

type Props = {
  children: ReactNode;
};

const WDialogProvider = ({ children }: Props) => {
  const [cart, setCart] = useState<number[]>([]);

  const addToCart = (productId?: number) => {
    if (productId) {
      if (!isItemInCart(productId)) {
        setCart(cart.concat(productId));
      }
    }
  };
  const removeFromCart = (productId?: number) => {
    setCart(cart.filter((id) => id !== productId));
  };
  const isItemInCart = (productId?: number) => cart.includes(productId || -1);

  return (
    <Context.Provider
      value={{
        cart: cart,
        addToCart: addToCart,
        removeFromCart: removeFromCart,
        isItemInCart: isItemInCart,
      }}
    >
      {children}
    </Context.Provider>
  );
};
export default WDialogProvider;
