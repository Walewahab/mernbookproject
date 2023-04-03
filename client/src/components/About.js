import React from 'react';
import { Box, Typography } from "@mui/material";


const About = () => {
  return (
    <div>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Typography sx={{fontfamily: "fantasy"}} variant="h2">This is a CRUD Aplication</Typography>
        <Typography variant="h2">Build By WALEWAHAB</Typography>
      </Box>
    </div>
  )
}

export default About;