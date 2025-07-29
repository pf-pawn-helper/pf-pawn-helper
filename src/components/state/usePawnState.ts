import { useQueryParam, useQueryParamArray } from "../../hooks/useQueryParams";

export const usePawnState = () => {
  const [pawnName, setPawnName] = useQueryParam("p", ""); // "p" for pawn (singular); reduces url length
  const [pawnNames, setPawnNames] = useQueryParamArray("l", []); // "l" for list (of pawns); reduces url length
  return { pawnName, setPawnName, pawnNames, setPawnNames };
};
