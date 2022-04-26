import { Box, styled } from "@mui/system";

export const PawnMargin = 6;
export const PawnHeight = 136;
export const PawnWidth = 80;
export const PawnBorderRadius = 30;
export const PawnBorderWidth = 1;

export const SlotWidth = PawnWidth * 3 + PawnMargin * 6 + PawnBorderWidth * 6;
export const SlotHeight = PawnHeight + PawnMargin * 2 + PawnBorderWidth * 2;

const MediumPawnBox = styled(Box)({
  // Ratio is 1:1.7
  width: PawnWidth,
  height: PawnHeight,
  margin: PawnMargin,
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
  textAlign: "center",
});

export default MediumPawnBox;
