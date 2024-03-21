import React from "react";
import { Row, Col } from "react-bootstrap";
import { Table } from "antd";
import { Card } from "react-bootstrap";

import SearchBar from "../common/SearchBar/SearchBar";
import { newAnnouncements } from "../../utils/constant";
import Filter from "../common/Filter/Filter";
function New() {
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
    <div>
      <div className="page-header">
        <Row>
          <h4 style={{ color: "#000000" }} className="page-title">
            Appointment
          </h4>
        </Row>
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
                    <Filter />
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
  );
}

export default New;
