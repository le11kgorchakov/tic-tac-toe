import { Grid } from "@mui/material";

const Header = () => {
  return (
    <Grid
      style={{
        margin: "100px 500px 100px 500px ",
        border: "solid",
        borderWidth: 5,
        borderColor: "Highlight",
      }}
    >
      <span
        style={{
          justifyContent: "center",
          display: "flex",
          alignItems: "center",
        }}
      >
        TIC TAC TOE
      </span>
    </Grid>
  );
};
export default Header;
