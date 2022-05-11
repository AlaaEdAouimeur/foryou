import { useContext } from "react";

import Context from "./context";

const useCartProvider = () => useContext(Context);

export default useCartProvider;
