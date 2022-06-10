import * as React from "react";
import Box from "@mui/material/Box";
import { Button, Grid } from "@mui/material";

interface IBoxSx {
  value?: any;
  onClick?: any;
}

export const BoxSx = (params: IBoxSx) => {
  return (
    <Grid>
      <Box component="span" sx={{ p: 4, border: 2 }}>
        <Button onClick={params.onClick}>{params.value}</Button>
      </Box>
    </Grid>
  );
};
