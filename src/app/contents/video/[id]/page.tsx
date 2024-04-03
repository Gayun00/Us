import React from "react";

interface Props {
  params: { id: string };
}

const VideoContentPage = ({ params }: Props) => {
  return <div>{params.id}</div>;
};

export default VideoContentPage;
