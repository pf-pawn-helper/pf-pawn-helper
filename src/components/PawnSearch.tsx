import React, { useState } from "react";
import {
  Autocomplete,
  Avatar,
  Box,
  Button,
  IconButton as IconButtonMui,
  TextField,
  Typography,
} from "@mui/material";
import { UniquePawnNames, getFirstPawnByName } from "../data/all-pawns";
import { styled } from "@mui/system";
import {
  Clear,
  FirstPage,
  LastPage,
  NavigateBefore,
  NavigateNext,
} from "@mui/icons-material";

type Props = {
  setPawnName: (name: string) => void;
  pawnNames: string[];
  setPawnNames: (names: string[]) => void;
};

const AlignmentBox = styled(Box)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
});

const IconButton = ({
  Icon,
  click,
  disabled,
}: {
  Icon: React.FC;
  click?: () => void;
  disabled?: boolean;
}) => (
  <IconButtonMui onClick={click} disabled={disabled}>
    <Icon />
  </IconButtonMui>
);

const AutocompleteInput = ({
  pawnName,
  setPawnName,
}: {
  setPawnName: (name: string) => void;
  pawnName: string;
}) => {
  return (
    <Autocomplete
      sx={{ margin: 1, flexGrow: 1 }}
      options={UniquePawnNames}
      disableClearable
      renderInput={(params) => <TextField {...params} label="pawn name" />}
      renderOption={(props, option) => {
        const pawn = getFirstPawnByName(option);
        const info = !pawn ? "" : `${pawn.race}, ${pawn.class}`;
        return (
          <Typography {...props}>
            {option} ({info})
          </Typography>
        );
      }}
      value={pawnName ?? null}
      onChange={(_, val) => setPawnName(val ?? "")}
      blurOnSelect
    />
  );
};

const PawnSearch = ({ setPawnName, pawnNames, setPawnNames }: Props) => {
  const [index, setIndex] = useState<number>(0);

  const setPawnAndProceed = (name: string) => {
    setPawnName(name);
    const newPawnNames = [...pawnNames];
    newPawnNames[index] = name;
    setPawnNames(newPawnNames);
    setIndex(index + 1);
  };

  const clearPawn = () => {
    if (index === pawnNames.length) {
      changePawn(Math.max(0, pawnNames.length - 1))();
      return;
    }

    const newPawnNames = [...pawnNames];
    newPawnNames.splice(index, 1);
    setPawnNames(newPawnNames);
    const newIndex = Math.max(0, index - 1);
    setIndex(newIndex);
    setPawnName(newPawnNames[newIndex]);
  };

  const clearAllPawns = () => {
    setIndex(0);
    setPawnNames([]);
    setPawnName("");
  };

  const changePawn = (index: number) => () => {
    setIndex(index);
    setPawnName(pawnNames[Math.min(index, pawnNames.length - 1)]);
  };

  return (
    <>
      <Typography sx={{ textAlign: "center" }} variant="subtitle1">
        Search for Multiple Pawns{" "}
        <Button onClick={clearAllPawns}>Clear all</Button>
      </Typography>
      <AlignmentBox>
        <IconButton
          Icon={FirstPage}
          disabled={index === 0}
          click={changePawn(0)}
        />
        <IconButton
          Icon={NavigateBefore}
          disabled={index === 0}
          click={changePawn(index - 1)}
        />
        <Avatar>{index + 1}</Avatar>
        <AutocompleteInput
          pawnName={pawnNames[index]}
          setPawnName={setPawnAndProceed}
        />
        <IconButton
          Icon={Clear}
          click={clearPawn}
          disabled={pawnNames.length === 0}
        />
        <IconButton
          Icon={NavigateNext}
          disabled={index === pawnNames.length}
          click={changePawn(index + 1)}
        />
        <IconButton
          Icon={LastPage}
          disabled={index === pawnNames.length}
          click={changePawn(pawnNames.length)}
        />
      </AlignmentBox>
    </>
  );
};

export default PawnSearch;
