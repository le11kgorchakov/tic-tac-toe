import { Grid } from "@mui/material";
import Square from "./Square";

interface IBoard {
  size: number[][];
  winner?: any;
  onClick: (i: number) => void; // React.MouseEventHandler<HTMLButtonElement> | undefined;
}

const Board = (params: IBoard): JSX.Element => {
  return (
    <Grid
      container
      style={{
        border: "solid",
        borderWidth: 30,
        borderColor: "Highlight",
        justifyContent: "center",
        alignItems: "center",
        display: "grid",
        gridTemplate: "repeat(3, 1fr) / repeat(3, 1fr)",
        gap: "1rem",
      }}
    >
      {params.size.map((cur, i) => (
        <Square key={i} value={cur} onClick={() => params.onClick(i)} />
      ))}
    </Grid>
  );
};
export default Board;
