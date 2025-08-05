import { styled } from "@mui/system";
import { Pawn } from "../../../data/pawn-types";
import { PawnBorderRadius as MediumPawnBorderRadius } from "./MediumPawnBox";
import {
  SmallPawnBorderRadius,
  SmallPawnHeight,
  SmallPawnWidth,
} from "./SmallPawnBox";
import { useEffect, useState } from "react";

type PawnImageProps = {
  pawn: Pawn;
  size: "small" | "medium";
  Placeholder: React.FC<{ children: React.ReactNode }>;
};

const Medium = styled("img")({
  borderTopLeftRadius: MediumPawnBorderRadius,
  borderTopRightRadius: MediumPawnBorderRadius,
});

const Small = styled("img")({
  borderTopLeftRadius: SmallPawnBorderRadius,
  borderTopRightRadius: SmallPawnBorderRadius,
  // hacky hacky, I don't know why I must specify these...
  position: "absolute",
  left: "10px",
  width: SmallPawnHeight,
  height: SmallPawnWidth,
  transform: "rotate(90deg)",
});

export const PawnImage = ({ pawn, size, Placeholder }: PawnImageProps) => {
  const src = `/pf-pawn-helper/pawns/${pawn.name.toUpperCase()}.jpg`;
  const alt = pawn.name;
  const ImageComponent = size === "small" ? Small : Medium;

  const [imageLoading, setImageLoading] = useState(true);

  useEffect(() => {
    setImageLoading(true);
  }, [src, setImageLoading]);

  return (
    <>
      {imageLoading && <Placeholder>...</Placeholder>}
      <ImageComponent
        style={{ display: imageLoading ? "none" : "block" }}
        src={src}
        alt={alt}
        onLoad={() => setImageLoading(false)}
      />
    </>
  );
};
