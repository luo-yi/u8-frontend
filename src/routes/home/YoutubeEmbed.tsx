import React from 'react';
import Box from '@mui/material/Box';

function YoutubeEmbed(props: { embedId: string }) {
  const { embedId } = props;

  return (
    <Box className="video-responsive">
      <iframe
        width="853"
        height="480"
        src={`https://www.youtube.com/embed/${embedId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </Box>
  );
}

export default YoutubeEmbed;
