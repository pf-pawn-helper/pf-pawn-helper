import { Typography } from "@mui/material";
import { Box, styled } from "@mui/system";
import React from "react";
import { Separator } from "../../data/pawn-types";
import { SlotHeight, SlotWidth } from "./pawn/MediumPawnBox";

type Props = {
  separator?: Separator;
};

const CenterBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: SlotHeight,
  width: SlotWidth,
});

const SeparatorDisplay = ({ separator }: Props) => {
  const hasRaces = separator && separator.races.length > 0;

  return (
    <CenterBox>
      {separator &&
        separator.races.map((race, index) => (
          <React.Fragment key={race}>
            <Typography>{race}</Typography>
            {index < separator.races.length - 1 && (
              <Typography>&amp;</Typography>
            )}
          </React.Fragment>
        ))}
      {hasRaces && <Typography>({separator.class})</Typography>}
      {separator && !hasRaces && <Typography>{separator.class}</Typography>}
    </CenterBox>
  );
};

export default SeparatorDisplay;
