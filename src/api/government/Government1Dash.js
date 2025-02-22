import { Box } from "@mui/material";
import BtnRouting from "../../components/BtnRouting";
import NavBar from "../../navigation/NavBar";

const GovernmentDash = () => {
  return (
    <Box>
      <NavBar link="/GovernmentDash" />
      <Box>
        <BtnRouting btnName="" navigateTo="" />
      </Box>
    </Box>
  );
};

export default GovernmentDash;
