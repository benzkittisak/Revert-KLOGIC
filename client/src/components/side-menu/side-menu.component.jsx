import React from "react";
import { Link } from "react-router-dom";
import { Accordion } from "react-bootstrap";

const SideMenu = () => {
  return (
    <aside className="main-sidebar">
      <div className="sidebar-section">
        <ul className="sidebar-menu sidebar" data-widget="sidebar">
          <li>
            <Link to={process.env.PUBLIC_URL + "/account"}>
              <i className="fas fa-home"></i>
              <span>หน้าแรก</span>
            </Link>
          </li>
          <li>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <i className="fad fa-archive"></i>
                  <span>ลงทะเบียน</span>
                </Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li>
                      <Link to={process.env.PUBLIC_URL + "/account/register"}>
                        <i className="fad fa-archive"></i>
                        <span>ลงทะเบียน</span>
                      </Link>
                    </li>
                    <li>
                      <Link to={process.env.PUBLIC_URL + "/account/register"}>
                        <i className="fad fa-book-medical"></i>
                        <span>เพิ่มวิชาเรียน</span>
                      </Link>
                    </li>
                    <li>
                      <Link to={process.env.PUBLIC_URL + "/account/register"}>
                        <i className="fad fa-ballot-check"></i>
                        <span>เปลี่ยนตอนเรียน</span>
                      </Link>
                    </li>
                    <li>
                      <Link to={process.env.PUBLIC_URL + "/account/register"}>
                        <i className="fad fa-book"></i>
                        <span>ถอนวิชาเรียน</span>
                      </Link>
                    </li>
                    <li>
                      <Link to={process.env.PUBLIC_URL + "/account/register"}>
                        <i className="fad fa-book-reader"></i>
                        <span>รักษาสภาพ</span>
                      </Link>
                    </li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </li>
          <li>
            <Accordion>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  <i className="fad fa-comment-alt-lines"></i>
                  <span>สอบถามข้อมูล</span>
                </Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li>
                      <Link to={process.env.PUBLIC_URL + "/account/register"}>
                        <i className="fad fa-graduation-cap"></i>
                        <span>ผลลงทะเบียน</span>
                      </Link>
                    </li>
                    <li>
                      <Link to={process.env.PUBLIC_URL + "/account/register"}>
                        <i className="fad fa-clipboard-list-check"></i>
                        <span>ผลการเรียน</span>
                      </Link>
                    </li>
                    <li>
                      <Link to={process.env.PUBLIC_URL + "/account/register"}>
                        <i className="fad fa-ballot-check"></i>
                        <span>ตารางเรียน/สอบ</span>
                      </Link>
                    </li>
                    <li>
                      <Link to={process.env.PUBLIC_URL + "/account/register"}>
                        <i className="fad fa-book"></i>
                        <span>ประวัตินักศึกษา</span>
                      </Link>
                    </li>
                    <li>
                      <Link to={process.env.PUBLIC_URL + "/account/register"}>
                        <i className="fad fa-calendar-alt"></i>
                        <span>ตรวจสอบจบ</span>
                      </Link>
                    </li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </li>
          <li>
            <Link to={process.env.PUBLIC_URL + "/account"}>
            <i className="fad fa-key"></i>
              <span>เปลี่ยนรหัสผ่าน</span>
            </Link>
          </li>
          <li>
            <Link to={process.env.PUBLIC_URL + "/account"}>
            <i className="fad fa-wifi-1"></i>
              <span>บัญชี WiFi</span>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default SideMenu;
