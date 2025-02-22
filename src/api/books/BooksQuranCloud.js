import { Box } from "@mui/material";
import BoxApiInfo from "../../core/main/BoxApiInfo";
import Endpoints from "../../components/Endpoints";
import NavBar from "../../navigation/NavBar";
import BoxTestCrud from "../../tools/components/BoxTestCrud";

const BooksQuranCloud = () => {
  return (
    <Box>
      <NavBar link="/BooksDash" route2="/QuranCloud" />
      <Box />
      <BoxTestCrud />
      <Box>
        <BoxApiInfo baseEndpoint="https://api.alquran.cloud/v1" />
        <Endpoints header="GET" endpoint="/quran/en.asad" />
      </Box>
    </Box>
  );
};

export default BooksQuranCloud;
