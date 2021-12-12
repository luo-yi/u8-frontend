import React from 'react';
import { useTheme } from '@mui/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import GitHubIcon from '@mui/icons-material/GitHub';

function Home() {
  // @ts-ignore
  const isDark = useTheme().palette.mode === 'dark';

  return (
    <Box className="action-bar">
      <Button
        size="small"
        variant={isDark ? 'outlined' : 'contained'}
        endIcon={<GitHubIcon />}
        disableElevation={!isDark}
        className="float-right"
      >
        View In GitHub
      </Button>
    </Box>
  );
}

export default Home;
