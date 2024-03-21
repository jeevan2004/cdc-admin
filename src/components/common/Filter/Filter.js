import React, { useState } from "react";
import { Button, Modal } from "antd";
import { DatePicker, Space, Select } from "antd";
import { Row, Col, Form } from "react-bootstrap";

function Filter() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };
  // select dropdown
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  return (
    <>
      <Button
        style={{ padding: "10px 10px 29px 10px" }}
        className="filter-button"
        onClick={showModal}
      >
        <i style={{ fontSize: "20px" }} className="fa fa-filter"></i>
      </Button>
      <Modal
        title="Filter"
        visible={true}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <Row>
          <Form.Label style={{ fontWeight: 600 }}>Date</Form.Label>
          <Col>
            <Space direction="vertical">
              <DatePicker style={{ width: "200px" }} onChange={onChange} />
            </Space>
          </Col>
        </Row>
        <Row className="mt-2">
          <Form.Label style={{ fontWeight: 600 }}>Slot</Form.Label>
          <Col>
            <Space wrap>
              <Select
                defaultValue="Select"
                style={{
                  width: 200,
                }}
                onChange={handleChange}
                options={[
                  {
                    value: "jack",
                    label: "Jack",
                  },
                  {
                    value: "lucy",
                    label: "Lucy",
                  },
                  {
                    value: "Yiminghe",
                    label: "yiminghe",
                  },
                ]}
              />
            </Space>
          </Col>
        </Row>
        <div className="button-container">
          <Button
            key="cancel"
            className="custom-reset-button me-2"
            onClick={handleCancel}
          >
            Reset
          </Button>
          <Button key="ok" className="custom-apply-button" onClick={handleOk}>
            Apply
          </Button>
        </div>
      </Modal>
    </>
  );
}

export default Filter;
