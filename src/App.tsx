import React from "react";
// import logo from "./logo.svg";

import { Grid } from "@mui/material";
import { BoxSx } from "./components/Box";

function App() {
  const [val, setVal] = React.useState("");
  const clickHandler = () => {
    setVal("X");
    console.log(val);
  };

  return (
    <Grid container>
      <BoxSx onClick={() => clickHandler()} value={"X"} />
    </Grid>
  );
}

export default App;
