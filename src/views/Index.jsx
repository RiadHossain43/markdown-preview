import React from "react";
// reactstrap components
import {
  Container
} from "reactstrap";

import Header from "components/Headers/Header";
import MarkDown from "components/MarkDown/MarkDown";
import InputArea from "./editor/InputArea";
const Index = (props) => {
  let [markdown,setMarkdown] = React.useState('')
  React.useEffect(()=>setMarkdown(''),[])
  return (
    <>
      <Header />
      <Container fluid>
        <MarkDown markdown={markdown}/>
        <InputArea setMarkdown={setMarkdown}/>
      </Container>
    </>
  );
};

export default Index;
