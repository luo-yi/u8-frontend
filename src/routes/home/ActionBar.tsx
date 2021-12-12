import React from 'react';
import { useTheme } from '@mui/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import GitHubIcon from '@mui/icons-material/GitHub';

function ActionBar(props: { githubURL: string }) {
  const { githubURL } = props;

  // @ts-ignore
  const isDark = useTheme().palette.mode === 'dark';

  return (
    <Box className="action-bar">
      <a href={githubURL} target="_blank" rel="noreferrer">
        <Button
          size="small"
          variant={isDark ? 'outlined' : 'contained'}
          endIcon={<GitHubIcon />}
          disableElevation={!isDark}
          className="float-right"
        >
          View In GitHub
        </Button>
      </a>
    </Box>
  );
}

export default ActionBar;
