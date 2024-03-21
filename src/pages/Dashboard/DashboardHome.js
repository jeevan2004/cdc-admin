import { useEffect, useState } from "react";

import "./dashboard.css";
import { Card, Col, Row } from "react-bootstrap";
import New from "../../assets/images/new.svg";
import Assign from "../../assets/images/assign.svg";
import Ongoing from "../../assets/images/ongoing.svg";
import Complete from "../../assets/images/completed.svg";
import SearchBar from "../../components/common/SearchBar/SearchBar";
import { newAnnouncements } from "../../utils/constant";
import { Table } from "antd";

const DashboardHome = () => {
  const [startDate, setStartDate] = useState("");
  const [petType, setPetType] = useState("");
  const [serviceType, setServiceType] = useState("");
  const dataSource = newAnnouncements?.datasource;
  const columns = newAnnouncements?.column;
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRows
      );
    },
  };
  return (
    <>
      <div className="dashboard">
        <div className="page-header">
          <Row>
            <h4 style={{ color: "#000000" }} className="page-title">
              Dashboard
            </h4>
          </Row>
        </div>
        <div>
          <Card className="card-container user_details">
            <div className="flex_between mb-3">
              <p>User</p>
              <input type="date" />
            </div>
            <ul>
              <li>
                <p>
                  112
                  <span>Total No. of Booking</span>
                </p>
              </li>
              <li style={{ background: " rgba(233, 243, 255, 1)" }}>
                <span>
                  <img src={New} alt="" />
                </span>
                <p>
                  54
                  <span>new</span>
                </p>
              </li>
              <li style={{ background: "rgba(255, 214, 233, 1)" }}>
                <span>
                  <img src={Assign} alt="" />
                </span>
                <p>
                  112
                  <span>Assign</span>
                </p>
              </li>
              <li style={{ background: "rgba(231, 212, 255, 1)" }}>
                <span>
                  <img src={Ongoing} alt="" />
                </span>
                <p>
                  112
                  <span>Ongoing</span>
                </p>
              </li>
              <li style={{ background: " rgba(225, 255, 230, 1)" }}>
                <span>
                  <img src={Complete} alt="" />
                </span>
                <p>
                  112
                  <span>Completed</span>
                </p>
              </li>
            </ul>
          </Card>
        </div>

        <div>
          <Card className="card-container">
            <div className="table-content">
              <Row className="page-header">
                <Col>
                  <div className="d-flex justify-content-between">
                    <h5 style={{ color: "#362F29" }} className="page-title">
                      New({dataSource.length})
                    </h5>
                    <div className="d-flex">
                      <SearchBar />
                    </div>
                  </div>
                </Col>
              </Row>
              <Table
                dataSource={dataSource}
                columns={columns}
                rowSelection={rowSelection}
                className="table-responsive table"
                pagination={{
                  total: dataSource.length,
                  showTotal: (total, range) =>
                    `Showing results ${range[1]} of ${total} entries`,
                  showSizeChanger: true,
                  pageSizeOptions: [5, 10, 15, 20],
                }}
              />
            </div>
          </Card>
        </div>
      </div>
    </>
  );
};

export default DashboardHome;
