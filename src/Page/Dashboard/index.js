import React from "react";
import FrameDashboard from "../../Component/FrameDashboard";
import "./dashboard.css";
import CardMenu from "../../Component/CardMenu";
import Heijunka from "../../Assets/heijunka.gif";
import { Col, Row } from "react-bootstrap";
import StagingImg from "../../Assets/staging1.png";
import InventoryImg from "../../Assets/inventory2.gif";
import ReceivingImg from "../../Assets/receiving2.gif";
import EroImg from "../../Assets/ero2.png";
import { RiStackOverflowFill } from "react-icons/ri";
import DekidakaImg from "../../Assets/dekidaka.gif";

function Dashboard() {
  return (
    <div>
      <FrameDashboard>
        <div className="cover-content">
          <div className="title-content">
            <RiStackOverflowFill style={{ marginRight: 4 }} />
            Production Planning
          </div>
          <div className="content-menu">
            <Row>
              <Col lg={3} className="mb-3 mt-3 mr-3 ml-3">
                <CardMenu
                  title={"E-Kanban"}
                  desc={""}
                  srcImg={Heijunka}
                  to={"/e-kanban"}
                  colorTitle={"primary"}
                />
              </Col>
              <Col lg={3} className="mb-3 mt-3 mr-3 ml-3">
                <CardMenu
                  title={"E-Staging"}
                  desc={""}
                  srcImg={StagingImg}
                  to={"/e-staging"}
                  colorTitle={"success"}
                />
              </Col>
              <Col lg={3} className="mb-3 mt-3 mr-3 ml-3">
                <CardMenu
                  title={"E-Inventory"}
                  desc={""}
                  srcImg={InventoryImg}
                  to={"/e-kanban"}
                  colorTitle={"warning"}
                />
              </Col>
              <Col lg={3} className="mb-3 mt-3 mr-3 ml-3">
                <CardMenu
                  title={"E-Receiving"}
                  desc={""}
                  srcImg={ReceivingImg}
                  to={"/e-receiving"}
                  colorTitle={"secondary"}
                />
              </Col>
            </Row>
            <Row>
              <Col lg={3} className="mb-3 mt-3 mr-3 ml-3">
                <CardMenu
                  title={"E-Request Order"}
                  desc={""}
                  srcImg={EroImg}
                  to={"/e-ro"}
                  colorTitle={"secondary"}
                />
              </Col>
            </Row>
          </div>
        </div>
        <div className="cover-content">
          <div className="title-content">
            <RiStackOverflowFill style={{ marginRight: 4 }} />
            Production
          </div>
          <div className="content-menu">
            <Row>
              <Col lg={3} className="mb-3 mt-3 mr-3 ml-3">
                <CardMenu
                  title={"E-Dekidaka"}
                  desc={""}
                  srcImg={DekidakaImg}
                  to={"/e-kanban"}
                  colorTitle={"primary"}
                />
              </Col>
              <Col lg={3} className="mb-3 mt-3 mr-3 ml-3">
                <CardMenu
                  title={"Leader Control"}
                  desc={""}
                  srcImg={StagingImg}
                  to={"/e-staging"}
                  colorTitle={"success"}
                />
              </Col>
              <Col lg={3} className="mb-3 mt-3 mr-3 ml-3">
                <CardMenu
                  title={"AGV Control"}
                  desc={""}
                  srcImg={InventoryImg}
                  to={"/e-kanban"}
                  colorTitle={"warning"}
                />
              </Col>
              <Col lg={3} className="mb-3 mt-3 mr-3 ml-3">
                <CardMenu
                  title={"SOP DX"}
                  desc={""}
                  srcImg={ReceivingImg}
                  to={"/e-receiving"}
                  colorTitle={"secondary"}
                />
              </Col>
            </Row>
            <Row>
              <Col lg={3} className="mb-3 mt-3 mr-3 ml-3">
                <CardMenu
                  title={"Misuzhumashi"}
                  desc={""}
                  srcImg={EroImg}
                  to={"/e-ro"}
                  colorTitle={"danger"}
                />
              </Col>
              <Col lg={3} className="mb-3 mt-3 mr-3 ml-3">
                <CardMenu
                  title={"Traceability"}
                  desc={""}
                  srcImg={EroImg}
                  to={"/e-ro"}
                  colorTitle={"primary"}
                />
              </Col>
            </Row>
          </div>
        </div>
      </FrameDashboard>
    </div>
  );
}

export default Dashboard;
