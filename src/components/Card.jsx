import React from "react";
import { Box } from "@chakra-ui/react";

function Redc(props) {
  return (
    <div id="card">
      <Box bg="white" w="40%" p={4} color="black">
        {props.name}
      </Box>
    </div>
  );
}

export default Redc;
