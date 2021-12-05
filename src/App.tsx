import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import "./App.css";
import RSA from "./rsa/RSA";
import ModuloCaculate from "./rsa/Modulo";
import SignRSA from "./rsa/SignRSA";
import SignCheckRSA from "./rsa/SignRSACheck";

const App = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img src="./RSA_logo.png" alt="logo" height="50" />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#rsa-1">Xây dựng RSA</Nav.Link>
            <Nav.Link href="#rsa-2">Tính mũ theo modulo</Nav.Link>
            <Nav.Link href="#rsa-3">Ký văn bản</Nav.Link>
            <Nav.Link href="#rsa-4">Kiểm tra chữ ký</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div style={{ padding: "0 50px" }}>
        <div className="site-layout-background">
          <Switch>
            <Route path="/rsa-1" component={RSA} />
            <Route path="/rsa-2" component={ModuloCaculate} />
            <Route path="/rsa-3" component={SignRSA} />
            <Route path="/rsa-4" component={SignCheckRSA} />
            <Route path="*" component={DefaultRedirect} />
          </Switch>
        </div>
      </div>
    </>
  );
};

export default App;

const DefaultRedirect: React.FC = () => {
  useEffect(() => {
    window.location.href = "/#/rsa-1";
  }, []);
  return <></>;
};
