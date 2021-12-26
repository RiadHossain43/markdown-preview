import React from "react"
import {
  Card,
  CardBody,
  Col,
} from "reactstrap";
import InputArea from "./InputArea"
import Preview from "./Preview"

const Editor = () => {
  let [markdown,setMarkdown] = React.useState('')
  return (
    <>
      <Col lg="12 mb-3">
        <Card className="bg-secondary shadow border-0">
          <CardBody className="px-lg-5 py-lg-5">
            <div className="text-center text-muted mb-4">
              <small>Mark down preview</small>
            </div>
            <Preview markdown={markdown}/>
          </CardBody>
        </Card>
      </Col>
      <Col lg="12">
        <Card className="bg-secondary shadow border-0">
          <CardBody className="px-lg-5 py-lg-5">
            <div className="text-center text-muted mb-4">
              <small>Create a new document</small>
            </div>
            <InputArea setMarkdown={setMarkdown} />
          </CardBody>
        </Card>
      </Col>
    </>
  );
};

export default Editor;
