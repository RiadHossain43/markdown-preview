import React from "react";
// reactstrap components
import {
  Container,
} from "reactstrap";

import Header from "components/Headers/Header";

const Index = (props) => {
  
  return (
    <>
      <Header />
      <Container fluid>
        <h3>Hello world</h3>
      </Container>
    </>
  );
};

export default Index;
