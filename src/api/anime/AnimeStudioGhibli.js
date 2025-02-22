import { Box } from "@mui/material";
import BoxApiInfo from "../../core/main/BoxApiInfo";
import Endpoints from "../../components/Endpoints";
import NavBar from "../../navigation/NavBar";

import BoxTestCrud from "../../tools/components/BoxTestCrud";

const AnimeStudioGhibli = () => {
  return (
    <Box>
      {/* Navigation bar */}
      <NavBar link="/Animedash" route2="/StudioGhibli" />

      <Box>
        <BoxTestCrud />

        {/* API information box */}
        <BoxApiInfo baseEndpoint="https://ghibliapi.vercel.app" />

        {/* Endpoints */}
        <Endpoints
          header="GET"
          endpoint="/films"
          description="The Films endpoint returns information about all of the Studio Ghibli films."
        />
      </Box>
    </Box>
  );
};

export default AnimeStudioGhibli;
