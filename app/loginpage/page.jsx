"use client";
import React, { useState } from "react";
import Login from "../Components/Login";
import Signup from "../Components/Signup";
import { Row, Col, Container } from "reactstrap";

export default function Page() {
  const [login, setLogin] = useState(true);
  return (
    <>
      <div className="login-area">
        <Container>
          <Row className="justify-content-center">
            <Col md="6">
              {login ? <Login /> : <Signup />}
              <button
                onClick={() => setLogin(!login)}
                className="w-100 text-center mt-3 bg-transparent border-0 text-primary"
              >
                {login
                  ? "Dont have an account sign up"
                  : "Already have an account login here"}
              </button>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
