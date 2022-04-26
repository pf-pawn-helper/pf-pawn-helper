import { Box, styled } from "@mui/system";

export const SmallPawnMargin = 6;
export const SmallPawnHeight = 60;
export const SmallPawnWidth = 80;
export const SmallPawnBorderRadius = 25;

const SmallPawnBox = styled(Box)({
  // Ratio is 1:0.75
  width: SmallPawnWidth,
  height: SmallPawnHeight,
  margin: SmallPawnMargin,
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-end",
  textAlign: "center",
  justifyContent: "center",
  writingMode: "vertical-rl",
  transform: "rotate(180deg)",
});

export default SmallPawnBox;
