import { paperClasses } from "@mui/material";
import Container from "react-bootstrap/Container";
import "../styles/portfolio.css";
import { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
export default function PortfolioPage(props) {


    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [selected, setSelected] = useState({});

  props = require("../data/portfolio-projects.json");
  // for (var i=0;i<7;i++) {
  //     props[i] = {
  //         title: "This is a test post",
  //         image: "https://picsum.photos/500/300",
  //     }
  // }
const projects = [...props]
  var elements = [];
  for (var i = 0; i < props.length; i++) {
    const project = projects[i];
    elements.push(
      <div key={i + 1} className={"portfolio div" + (i + 1)} onClick={()=>{console.log(project);setSelected({...project});handleShow()}}>
        <img className="project-image" src={props[i].image}></img>
        <div className="project-body">
          <h4>{props[i].title}</h4>
        </div>
      </div>
    );
  }
  return (
    <>
      <Container>
        <div className="parent">{elements}</div>
      </Container>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title as="h1">{selected.title}</Modal.Title>
          <br></br>
          <br></br>
            <Modal.Title as="p">{selected.technologies ? selected.technologies.map((tech) => tech) : ""}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{selected.description}
        <br></br>
        <a href={selected.repo}>Code</a>
        <br></br>
        <a href={selected.live}>Live</a>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
