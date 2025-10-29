// src/contexts/CatalogContext.js
import { createContext, useContext } from "react";
export const CatalogContext = createContext({ items: [] });
export const useCatalog = () => useContext(CatalogContext);
