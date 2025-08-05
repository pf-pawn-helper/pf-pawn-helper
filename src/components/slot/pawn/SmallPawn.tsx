import { styled } from "@mui/system";
import { Pawn } from "../../../data/pawn-types";
import SmallPawnBox, {
  SmallPawnBorderRadius,
  SmallPawnHeight,
  SmallPawnWidth,
} from "./SmallPawnBox";

type Props = {
  pawn: Pawn;
  selected: boolean;
};

const PawnBox = styled(SmallPawnBox)({
  border: "1px solid transparent",
  // We are rotated 180deg to get the text to work
  borderTopRightRadius: SmallPawnBorderRadius,
  borderBottomRightRadius: SmallPawnBorderRadius,
});

const SelectedPawnBox = styled(PawnBox)({
  border: "1px solid transparent",
  filter: "drop-shadow(0 0 5px red)",
});

const PawnImage = styled("img")({
  borderTopLeftRadius: SmallPawnBorderRadius,
  borderTopRightRadius: SmallPawnBorderRadius,
  // hacky hacky, I don't know why I must specify these...
  position: "absolute",
  left: "10px",
  width: SmallPawnHeight,
  height: SmallPawnWidth,
  transform: "rotate(90deg)",
});

const SmallPawn = ({ pawn, selected }: Props) => {
  const PawnImageBox = selected ? SelectedPawnBox : PawnBox;

  return (
    <PawnImageBox>
      <PawnImage
        src={`/pf-pawn-helper/pawns/${pawn.name.toUpperCase()}.jpg`}
        alt={pawn.name}
      />
    </PawnImageBox>
  );
};

export default SmallPawn;
