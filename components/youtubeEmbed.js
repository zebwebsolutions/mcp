import React from 'react';

const YouTubeEmbed = (props) => {
  const embedCode = props.embed;

  return (
    <div dangerouslySetInnerHTML={{ __html: embedCode }} />
  );
};

export default YouTubeEmbed;