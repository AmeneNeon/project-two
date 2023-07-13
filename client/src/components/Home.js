import React from "react";
import { Box, Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <Box display="flex" flexDirection="column" alignItems="center">
        {/* <Typography sx={{fontFamily:"fantasy"}} variant="h2" gutterBottom>
          This is a CRUD Application
        </Typography> */}

        <Button
          variant="contained"
          sx={{ marginTop: 15, background: "rgb(237, 81, 19)" }}
          LinkComponent={Link}
          to="/auth"
        >
          <Typography variant="h3">View All products</Typography>
        </Button>
      </Box>
    </div>
  );
}

export default Home;
