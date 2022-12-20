import React, { useState, useEffect } from "react";
import {
  Button,
  Form,
  Row,
  Col,
  Container,
  InputGroup,
  Card,
} from "react-bootstrap";

const Chat = () => {
  return (
    <>
      <Container
        fluid
        className="py-5 vh-100"
        style={{ backgroundColor: "#CDC4F9" }}
      >
        <Row>
          <Col md="12">
            <Card id="chat3" style={{ borderRadius: "15px" }}>
              <Card.Body>
                <Row>
                  <Col md="6" lg="5" xl="4" className="mb-4 mb-md-0 border-end">
                    <div className="p-3">
                      <InputGroup className="rounded mb-3">
                        <input
                          className="form-control rounded"
                          placeholder="Search"
                          type="search"
                        />
                      </InputGroup>

                      <div
                        style={{
                          position: "relative",
                          height: "520px",
                          overflowX: "hidden",
                        }}
                      >
                        <div className="mb-0">
                          <li className="p-2 border-bottom">
                            <a
                              href="#!"
                              className="d-flex justify-content-between"
                            >
                              <div className="d-flex flex-row">
                                <div>
                                  <img
                                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                                    alt="avatar"
                                    className="d-flex align-self-center me-3"
                                    width="60"
                                  />
                                  <span className="badge bg-success badge-dot"></span>
                                </div>
                                <div className="pt-1">
                                  <p className="fw-bold mb-0">Marie Horwitz</p>
                                  <p className="small text-muted">
                                    Hello, Are you there?
                                  </p>
                                </div>
                              </div>
                              <div className="pt-1">
                                <p className="small text-muted mb-1">
                                  Just now
                                </p>
                                <span className="badge bg-danger rounded-pill float-end">
                                  3
                                </span>
                              </div>
                            </a>
                          </li>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col md="6" lg="7" xl="8">
                    <div className="border-bottom d-flex flex-row align-items-center justify-content-start p-2">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                        alt="avatar 1"
                        style={{ width: "45px", height: "100%" }}
                      />
                      <p className="pt-3 ps-2 fw-bold">User Name</p>
                    </div>
                    <div
                      style={{
                        position: "relative",
                        height: "520px",
                        overflowX: "hidden",
                      }}
                      className="pt-3 pe-3"
                    >
                      <div className="d-flex flex-row justify-content-start">
                        <img
                          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp"
                          alt="avatar 1"
                          style={{ width: "45px", height: "100%" }}
                        />
                        <div>
                          <p
                            className="small p-2 ms-3 mb-1 rounded-3"
                            style={{ backgroundColor: "#f5f6f7" }}
                          >
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                          </p>
                          <p className="small ms-3 mb-3 rounded-3 text-muted float-end">
                            12:00 PM | Aug 13
                          </p>
                        </div>
                      </div>

                      <div className="d-flex flex-row justify-content-end">
                        <div>
                          <p className="small p-2 me-3 mb-1 text-white rounded-3 bg-primary">
                            Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco laboris nisi ut aliquip ex ea commodo
                            consequat.
                          </p>
                          <p className="small me-3 mb-3 rounded-3 text-muted">
                            12:00 PM | Aug 13
                          </p>
                        </div>
                        <img
                          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                          alt="avatar 1"
                          style={{ width: "45px", height: "100%" }}
                        />
                      </div>
                    </div>
                    <div className="text-muted d-flex justify-content-start align-items-center pe-3 pt-3 mt-2">
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        id="exampleFormControlInput2"
                        placeholder="Type message...."
                      />
                      <Button variant="primary" className="ms-2 py-2">
                        Send
                      </Button>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Chat;
