import { createContext } from "react";

// context api for state management
export const countContext = createContext({ count: 0, setCount: () => {} });
