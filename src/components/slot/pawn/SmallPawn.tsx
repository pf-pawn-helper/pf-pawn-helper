import { Typography } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";
import { Pawn } from "../../../data/pawn-types";
import SmallPawnBox, { SmallPawnBorderRadius } from "./SmallPawnBox";

type Props = {
  pawn: Pawn;
  selected: boolean;
};

const SelectedTypography = styled(Typography)({
  backgroundColor: "yellow",
});

const PawnBox = styled(SmallPawnBox)({
  border: "1px solid black",
  // We are rotated 180deg to get the text to work
  borderTopRightRadius: SmallPawnBorderRadius,
  borderBottomRightRadius: SmallPawnBorderRadius,
});

const SmallPawn = ({ pawn, selected }: Props) => {
  const Text = selected ? SelectedTypography : Typography;

  return (
    <PawnBox>
      <Text variant="caption">{pawn.name}</Text>
    </PawnBox>
  );
};

export default SmallPawn;
