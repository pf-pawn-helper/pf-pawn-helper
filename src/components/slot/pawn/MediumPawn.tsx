import { styled } from "@mui/system";
import { Pawn } from "../../../data/pawn-types";
import MediumPawnBox, { PawnBorderRadius } from "./MediumPawnBox";
import { PawnImage } from "./PawnImage";

type Props = {
  pawn: Pawn;
  selected: boolean;
};

const PawnBox = styled(MediumPawnBox)({
  border: "1px solid transparent",
  borderTopLeftRadius: PawnBorderRadius,
  borderTopRightRadius: PawnBorderRadius,
});

const SelectedPawnBox = styled(PawnBox)({
  border: "1px solid transparent",
  filter: "drop-shadow(0 0 5px red)",
});

const MediumPawn = ({ pawn, selected }: Props) => {
  const PawnImageBox = selected ? SelectedPawnBox : PawnBox;

  return (
    <PawnImageBox>
      <PawnImage pawn={pawn} size="medium" />
    </PawnImageBox>
  );
};

export default MediumPawn;
