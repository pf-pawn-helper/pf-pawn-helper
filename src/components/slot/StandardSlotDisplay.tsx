import { Box, styled } from "@mui/system";
import React from "react";
import { Pawn, SlotPosition } from "../../data/pawn-types";
import MediumPawn from "./pawn/MediumPawn";
import MediumPawnBox from "./pawn/MediumPawnBox";

type Props = {
  pawns: Pawn[];
  pawn?: Pawn;
  isRight?: boolean;
};

const SlotBox = styled(Box)({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
});

const slotPositions: SlotPosition[] = ["Left", "Middle", "Right"];

const hasSlotErrors = (pawns: Pawn[]) => {
  const pawnPositions = pawns.map((p) => p.position);
  return (
    slotPositions.some(
      (position) =>
        pawnPositions.filter((pawnPosition) => pawnPosition === position)
          .length > 1
    ) ||
    pawnPositions.some((pawnPosition) => !slotPositions.includes(pawnPosition))
  );
};

const getPawnOrPlaceholder = (
  pawns: Pawn[],
  position: SlotPosition,
  pawn?: Pawn
) => {
  const thisPawn = pawns.find((p) => p.position === position);

  if (thisPawn) {
    return (
      <MediumPawn
        key={position}
        pawn={thisPawn}
        selected={thisPawn.name === pawn?.name}
      />
    );
  }

  return <MediumPawnBox key={position} />;
};

const StandardSlotDisplay = ({ pawns, pawn, isRight }: Props) => {
  const positions = isRight ? [...slotPositions].reverse() : [...slotPositions];
  const error = hasSlotErrors(pawns);

  return (
    <SlotBox sx={error ? { backgroundColor: "Moccasin" } : {}}>
      {positions.map((position) => getPawnOrPlaceholder(pawns, position, pawn))}
    </SlotBox>
  );
};

export default StandardSlotDisplay;
