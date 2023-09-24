import { PageNext } from "@rsuite/icons";
import React, { useState } from "react";
import { Table } from "react-bootstrap";
import { Button, Form, Modal } from "rsuite";

function MasterLine() {
  const [lineId, setLineId] = useState("");
  const [line, setLine] = useState("");
  const [machine, setMachine] = useState("");
  const [tableLine, setTableLine] = useState([]);
  const [showFormLine, setShowFormLine] = useState(false);
  const [showFormMachine, setShowMachine] = useState(false);

  const handleSaveLine = () => {
    const data = {
      LINE_NAME: line,
    };
  };

  const handleSaveMachine = () => {
    const data = {
      LINE_ID: lineId,
      MACHINE_NAME: machine,
    };
  };

  return (
    <div>
      <div style={{ textAlign: "right" }}>
        <Button appearance="primary" onClick={() => setShowFormLine(true)}>
          Add Line
        </Button>
      </div>
      <div className="title-section"> Master Line</div>
      <Table hover>
        <thead>
          <tr>
            <th>No</th>
            <th>Line Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tableLine.map((value, index) => {
            return (
              <tr>
                <td>{index + 1}</td>
                <td>{value.LINE_NAME}</td>
                <td>
                  <Button>
                    view detail <PageNext />{" "}
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>

      {line && (
        <>
          <div style={{ marginTop: 5, textAlign: "right" }}>
            <Button appearance="primary" onClick={() => setShowMachine(true)}>
              Add Machine
            </Button>
          </div>
          <div className="title-section">Master Machine of {line}</div>
          <Table hover>
            <thead>
              <th>No</th>
              <th>Machine Name</th>
              <th>Actions</th>
            </thead>
          </Table>
        </>
      )}

      <Modal open={showFormLine} onClose={() => setShowFormLine(false)}>
        <Modal.Header>
          <Modal.Title style={{ fontWeight: "bold" }}>
            Register Line
          </Modal.Title>
        </Modal.Header>
        <Form fluid>
          <Modal.Body>
            <Form.Group>
              <Form.ControlLabel>Line Name</Form.ControlLabel>
              <Form.Control type="text" placeholder="Enter Line Name" />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={handleSaveLine} appearance="primary">
              Ok
            </Button>
            <Button onClick={() => setShowFormLine(false)} appearance="subtle">
              Cancel
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
      <Modal open={showFormMachine} onClose={() => setShowMachine(false)}>
        <Modal.Header>
          <Modal.Title>Register Machine</Modal.Title>
        </Modal.Header>
        <Form>
          <Modal.Body>
            <Form.Group>
              <Form.ControlLabel>Line Name</Form.ControlLabel>
              <Form.Control type="text" placeholder="Enter Line Name" />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={handleSaveMachine} appearance="primary">
              Ok
            </Button>
            <Button onClick={() => setShowMachine(false)} appearance="subtle">
              Cancel
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </div>
  );
}

export default MasterLine;
