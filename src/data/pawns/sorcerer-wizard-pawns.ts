import { SorcererWizardBook } from "../books";
import { Pawn, Separator } from "../pawn-types";
import { BookHelper } from "./pawn-helpers";

export const SorcererWizardPawns: (Pawn | Separator)[] = new BookHelper(
  SorcererWizardBook
).constructBook();
