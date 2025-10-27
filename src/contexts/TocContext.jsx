import { createContext, useContext } from "react";

export const TocContext = createContext({ items: [] });

export function useToc() {
  return useContext(TocContext);
}
