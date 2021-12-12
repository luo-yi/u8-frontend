import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import ActionBar from './ActionBar';
import YoutubeEmbed from './YoutubeEmbed';
import './styles.css';

const githubURL = 'https://github.com/luo-yi/u8';
const embedId = 'jNQXAC9IVRw';

function Home() {
  return (
    <Box className="main">
      <ActionBar githubURL={githubURL} />

      <Box className="main-body">
        <Box px={12}>
          <Card>
            <YoutubeEmbed embedId={embedId} />
          </Card>
        </Box>
      </Box>
    </Box>
  );
}

export default Home;
