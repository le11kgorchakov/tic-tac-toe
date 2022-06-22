import { useState } from "react";
import { Grid } from "@mui/material";
import Board from "./components/Board";
import Header from "./components/Header";
import { getWinner } from "./util/winner";

const App = (): JSX.Element => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [stepNumber, setStepNumber] = useState(0);
  const winner = getWinner(history[stepNumber]);
  const [xIsNext, setXisNext] = useState(true);
  const xO = xIsNext ? "X" : "O";

  const handleClick = (i: number) => {
    const historyPoint = history.slice(0, stepNumber + 1);
    const current = historyPoint[stepNumber];
    const squares = [...current];

    if (winner || squares[i]) return;

    squares[i] = xO;
    setHistory([...historyPoint, squares]);
    setStepNumber(historyPoint.length);
    setXisNext(!xIsNext);
  };

  return (
    <Grid
      container
      style={{
        backgroundColor: "blue",
        justifyContent: "center",
      }}
    >
      <Grid>
        <Header />
        <span>{winner ? `WINNER ${winner}` : "NO WINNER"}</span>
      </Grid>
      <Grid item alignItems={"center"}>
        <Board size={history[stepNumber]} onClick={handleClick} />
      </Grid>
    </Grid>
  );
};

export default App;
