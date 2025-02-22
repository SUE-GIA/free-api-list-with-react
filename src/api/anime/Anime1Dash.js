import { Box, Grid } from "@mui/material";
import NavBar from "../../navigation/NavBar";
import CardRouting from "../../components/CardRouting";

const AnimeDash = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* Navigation bar */}
      <NavBar link="/AnimeDash" />

      {/* Cards in a grid layout */}
      <Grid container spacing={2} sx={{ p: 3 }}>
        {/* Card for Nekos */}
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <CardRouting
            cardName="Nekos"
            navigateTo="Nekos"
            tags=""
            description=""
            difficulty=""
          />
        </Grid>

        {/* Card for StudioGhibli */}
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <CardRouting
            cardName="StudioGhibli"
            navigateTo="StudioGhibli"
            tags=""
            description=""
            difficulty=""
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default AnimeDash;
