import { useState } from "react";

export const usePawnState = () => {
  const [pawnName, setPawnName] = useState<string>("");
  const [pawnNames, setPawnNames] = useState<string[]>([]);
  return { pawnName, setPawnName, pawnNames, setPawnNames };
};
