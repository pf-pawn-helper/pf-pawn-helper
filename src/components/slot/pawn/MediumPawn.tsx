import { styled } from "@mui/system";
import React from "react";
import { Pawn } from "../../../data/pawn-types";
import MediumPawnBox, { PawnBorderRadius } from "./MediumPawnBox";

type Props = {
  pawn: Pawn;
  selected: boolean;
};

const PawnBox = styled(MediumPawnBox)({
  border: "1px solid transparent",
  borderTopLeftRadius: PawnBorderRadius,
  borderTopRightRadius: PawnBorderRadius,
});

const SelectedPawnBox = styled(PawnBox)({
  border: "1px solid transparent",
  filter: "drop-shadow(0 0 5px red)",
});

const PawnImage = styled("img")({
  borderTopLeftRadius: PawnBorderRadius,
  borderTopRightRadius: PawnBorderRadius,
});

const MediumPawn = ({ pawn, selected }: Props) => {
  const PawnImageBox = selected ? SelectedPawnBox : PawnBox;

  return (
    <PawnImageBox>
      <PawnImage
        src={`/pf-pawn-helper/pawns/${pawn.name.toUpperCase()}.jpg`}
        alt={pawn.name}
      />
    </PawnImageBox>
  );
};

export default MediumPawn;
