import { Box, styled } from "@mui/system";
import React from "react";
import { Pawn } from "../../data/pawn-types";
import MediumPawn from "./pawn/MediumPawn";
import MediumPawnBox, { SlotHeight, SlotWidth } from "./pawn/MediumPawnBox";
import SmallPawn from "./pawn/SmallPawn";
import SmallPawnBox from "./pawn/SmallPawnBox";

type Props = {
  pawns: Pawn[];
  pawn?: Pawn;
  isRight?: boolean;
};

const SlotBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  flexWrap: "wrap",
  height: SlotHeight,
  width: SlotWidth,
});

const getSmallPawnOrPlaceholder = (thisPawn?: Pawn, pawn?: Pawn) => {
  return thisPawn ? (
    <SmallPawn pawn={thisPawn} selected={thisPawn.name === pawn?.name} />
  ) : (
    <SmallPawnBox />
  );
};

const getMediumPawnOrPlaceholder = (thisPawn?: Pawn, pawn?: Pawn) => {
  return thisPawn ? (
    <MediumPawn pawn={thisPawn} selected={thisPawn.name === pawn?.name} />
  ) : (
    <MediumPawnBox />
  );
};

const getSmallOrMediumPawns = (
  full?: Pawn,
  top?: Pawn,
  bottom?: Pawn,
  selected?: Pawn
) => {
  if (full) {
    return getMediumPawnOrPlaceholder(full, selected);
  }

  return (
    <>
      {getSmallPawnOrPlaceholder(top, selected)}
      {getSmallPawnOrPlaceholder(bottom, selected)}
    </>
  );
};

const SmallSlotDisplay = ({ pawns, pawn, isRight }: Props) => {
  const left = pawns.find((p) => p.position === "Left");
  const leftTop = pawns.find((p) => p.position === "Left Top");
  const leftBottom = pawns.find((p) => p.position === "Left Bottom");
  const leftError = left && (leftTop || leftBottom);

  const middle = pawns.find((p) => p.position === "Middle");
  const middleTop = pawns.find((p) => p.position === "Middle Top");
  const middleBottom = pawns.find((p) => p.position === "Middle Bottom");
  const middleError = middle && (middleTop || middleBottom);

  const right = pawns.find((p) => p.position === "Right");
  const rightTop = pawns.find((p) => p.position === "Right Top");
  const rightBottom = pawns.find((p) => p.position === "Right Bottom");
  const rightError = right && (rightTop || rightBottom);

  const error = leftError || rightError || middleError;

  return (
    <SlotBox sx={error ? { backgroundColor: "Moccasin" } : {}}>
      {isRight
        ? getSmallOrMediumPawns(right, rightTop, rightBottom, pawn)
        : getSmallOrMediumPawns(left, leftTop, leftBottom, pawn)}
      {getSmallOrMediumPawns(middle, middleTop, middleBottom, pawn)}
      {!isRight
        ? getSmallOrMediumPawns(right, rightTop, rightBottom, pawn)
        : getSmallOrMediumPawns(left, leftTop, leftBottom, pawn)}
    </SlotBox>
  );
};

export default SmallSlotDisplay;
