import { Paper, styled } from "@mui/material";

type FoldedPagePaperProps = {
  foldDirection: "left" | "right";
  shouldFold?: boolean;
  pageBackground: string;
  behindPageBackground: string;
};

const propKeys = [
  "foldDirection",
  "shouldFold",
  "pageBackground",
  "behindPageBackground",
];

const FoldedPagePaper = styled(Paper, {
  shouldForwardProp: (prop: string) => !propKeys.includes(prop),
})<FoldedPagePaperProps>(
  ({ foldDirection, shouldFold, pageBackground, behindPageBackground }) => ({
    background: pageBackground,
    border: "none",
    position: "relative",
    ":before": shouldFold
      ? {
          content: '""',
          background: behindPageBackground,
          position: "absolute",
          top: "0",
          right: foldDirection === "right" ? "0" : undefined,
          left: foldDirection === "right" ? undefined : "0",
          borderStyle: "solid",
          boxShadow:
            foldDirection === "right"
              ? "-1px 1px 1px gray"
              : "1px 1px 1px gray",
          borderWidth: "0px",
          borderColor: behindPageBackground,
          borderRadius: foldDirection === "right" ? "0 0 0 5px" : "0 0 5px 0",
          transition: "border-width .2s",
        }
      : undefined,
    ":hover": {
      cursor: shouldFold ? "pointer" : "inherit",
    },
    ":hover:before": shouldFold
      ? {
          borderWidth: "12px",
        }
      : undefined,
  })
);

export default FoldedPagePaper;
