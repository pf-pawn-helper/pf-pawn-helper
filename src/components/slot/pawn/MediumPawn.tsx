import { Typography } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";
import { Pawn } from "../../../data/pawn-types";
import MediumPawnBox, { PawnBorderRadius } from "./MediumPawnBox";

type Props = {
  pawn: Pawn;
  selected: boolean;
};

const SelectedTypography = styled(Typography)({
  backgroundColor: "yellow",
});

const PawnBox = styled(MediumPawnBox)({
  border: "1px solid black",
  borderTopLeftRadius: PawnBorderRadius,
  borderTopRightRadius: PawnBorderRadius,
});

const MediumPawn = ({ pawn, selected }: Props) => {
  const Text = selected ? SelectedTypography : Typography;

  return (
    <PawnBox>
      <Text variant="caption">{pawn.name}</Text>
    </PawnBox>
  );
};

export default MediumPawn;
