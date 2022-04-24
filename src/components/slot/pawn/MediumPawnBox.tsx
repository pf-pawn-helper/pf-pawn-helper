import { Box, styled } from "@mui/system";

export const PawnMargin = 6;
export const PawnHeight = 170;
export const PawnWidth = 100;
export const PawnBorderRadius = 30;

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
