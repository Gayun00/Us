import React from "react";

interface Props {
  params: { id: string };
}

const TextContentPage = ({ params }: Props) => {
  return <div>{params.id}</div>;
};

export default TextContentPage;
