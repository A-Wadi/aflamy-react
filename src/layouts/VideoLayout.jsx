import React from "react";

const VideoLayout = ({ children, ...rest }) => {
  return (
    <div className="video-layout">
      {children}
    </div>
  );
};

export default VideoLayout;
