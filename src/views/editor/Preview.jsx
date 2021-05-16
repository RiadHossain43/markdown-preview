import React from "react"
import {
} from "reactstrap";
import ReactMarkdown from "react-markdown";

const Preview = ({markdown}) => {
  return (
    <>
      <ReactMarkdown children={markdown}/>
    </>
  );
};

export default Preview;
