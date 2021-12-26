import React from "react"
import {
  Button,
  FormGroup,
  Form,
  Input,
  InputGroup,
} from "reactstrap";

const InputArea = ({setMarkdown}) => {
  return (
    <Form role="form">
      <FormGroup className="mb-3">
        <InputGroup className="input-group-alternative">
          <Input
            placeholder="Title"
            type="email"
            autoComplete="new-email"
          />
        </InputGroup>
      </FormGroup>
      <FormGroup>
        <InputGroup className="input-group-alternative">
          <Input
            placeholder="Write new document..."
            type="textarea"
            rows='15'
            onChange={({currentTarget:input})=>setMarkdown(input.value)}
          />
        </InputGroup>
      </FormGroup>
      <div className="text-right">
        <Button className="my-4" color="primary" type="button">
          Create
        </Button>
      </div>
    </Form>
  );
};

export default InputArea;
