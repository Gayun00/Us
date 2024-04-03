import React from "react";

interface Props {
  params: { id: string };
}

const AudioContentPage = ({ params }: Props) => {
  return <div>{params.id}</div>;
};

export default AudioContentPage;
