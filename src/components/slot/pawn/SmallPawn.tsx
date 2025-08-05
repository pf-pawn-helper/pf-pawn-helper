import { styled } from "@mui/system";
import { Pawn } from "../../../data/pawn-types";
import SmallPawnBox, { SmallPawnBorderRadius } from "./SmallPawnBox";
import { PawnImage } from "./PawnImage";

type Props = {
  pawn: Pawn;
  selected: boolean;
};

const PlaceholderPawnBox = styled(SmallPawnBox)({
  border: "1px solid grey",
  // We are rotated 180deg to get the text to work
  borderTopRightRadius: SmallPawnBorderRadius,
  borderBottomRightRadius: SmallPawnBorderRadius,
});

const PawnBox = styled(PlaceholderPawnBox)({
  border: "1px solid transparent",
});

const SelectedPawnBox = styled(PawnBox)({
  border: "1px solid transparent",
  filter: "drop-shadow(0 0 5px red)",
});

const SmallPawn = ({ pawn, selected }: Props) => {
  const PawnImageBox = selected ? SelectedPawnBox : PawnBox;

  return (
    <PawnImageBox>
      <PawnImage pawn={pawn} size="small" Placeholder={PlaceholderPawnBox} />
    </PawnImageBox>
  );
};

export default SmallPawn;
