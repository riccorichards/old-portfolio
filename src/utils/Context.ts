import { createContext } from "react";

export interface InitialSection {
  section: string | null;
  setSection: (v: string) => void;
}

const Context = createContext<InitialSection | null>(null);

export default Context;
