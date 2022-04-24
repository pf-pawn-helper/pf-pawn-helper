import React from "react";
import {
  Autocomplete,
  Box,
  Divider,
  TextField,
  Typography,
} from "@mui/material";
import allPawns, { getFirstPawnByName } from "../data/all-pawns";

const unique = (array: string[]) => [...Array.from(new Set(array))];

type Props = {
  pawnName: string;
  setPawnName: (name: string) => void;
};

const PawnSearch = ({ pawnName, setPawnName }: Props) => {
  const names = unique(
    allPawns
      .filter((p) => !p.isSeparator)
      .map((p) => (p.isSeparator ? "separator" : p.name))
  ).sort();

  return (
    <Box>
      <Box>
        <Typography variant="h3">Pawn Search</Typography>
      </Box>
      <Divider variant="middle" />
      <Box sx={{ m: 1 }}>
        <Autocomplete
          options={names}
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
          value={pawnName || null}
          onChange={(_, val) => setPawnName(val ?? "")}
        />
      </Box>
    </Box>
  );
};

export default PawnSearch;
