import React from "react";
import { Switch } from "antd";
export const newAnnouncements = {
  datasource: [
    {
      key: 1,
      ChildName: "Rohit",
      Gender: "Male",
      Age: "15 years",
      ParentName: "Rao",
      PhoneNumber: "9000802002",
      Appointment: "24 Aug 2024-4.00PM",
      Status: "New",
    },
    {
      key: 2,
      ChildName: "Suvarna",
      Gender: "Female",
      Age: "16 years",
      ParentName: "Srinivas",
      PhoneNumber: "9000802001",
      Appointment: "24 Aug 2024-4.00PM",
      Status: "New",
    },
    {
      key: 3,
      ChildName: "Ramarao",
      Gender: "Male",
      Age: "10 years",
      ParentName: "Gangadhar",
      PhoneNumber: "9000802003",
      Appointment: "24 Aug 2024-4.00PM",
      Status: " New",
    },
  ],
  column: [
    {
      title: "ChildName",
      dataIndex: "ChildName",
      key: "ChildName",
    },
    {
      title: "Gender",
      dataIndex: "Gender",
      key: "Gender",
    },
    {
      title: "Age",
      dataIndex: "Age",
      key: "Age",
    },
    {
      title: "ParentName",
      dataIndex: "ParentName",
      key: "ParentName",
    },
    {
      title: "PhoneNumber",
      dataIndex: "PhoneNumber",
      key: "PhoneNumber",
    },
    {
      title: "Appointment",
      dataIndex: "Appointment",
      key: "Appointment",
    },
    {
      title: "Status",
      dataIndex: "Status",
      key: "Status",
      render: (text, record) => (
        <div
          style={{
            backgroundColor: "#FBD09C",
            borderRadius: "4px",
            textAlign: "center",
          }}
        >
          {text}
        </div>
      ),
    },
  ],
};

export const ongoing = {
  datasource: [
    {
      ChildName: "Rohit",
      Gender: "Male",
      Age: "15 years",
      ParentName: "Rao",
      PhoneNumber: "9000802002",
      Appointment: "24 Aug 2024-4.00PM",
      Status: "Ongoing",
    },
    {
      ChildName: "Suvarna",
      Gender: "Female",
      Age: "16 years",
      ParentName: "Srinivas",
      PhoneNumber: "9000802001",
      Appointment: "24 Aug 2024-4.00PM",
      Status: "Ongoing",
    },
    {
      ChildName: "Ramarao",
      Gender: "Male",
      Age: "10 years",
      ParentName: "Gangadhar",
      PhoneNumber: "9000802003",
      Appointment: "24 Aug 2024-4.00PM",
      Status: " Ongoing",
    },
  ],
  column: [
    {
      title: "ChildName",
      dataIndex: "ChildName",
    },
    {
      title: "Gender",
      dataIndex: "Gender",
    },
    {
      title: "Age",
      dataIndex: "Age",
    },
    {
      title: "ParentName",
      dataIndex: "ParentName",
    },
    {
      title: "PhoneNumber",
      dataIndex: "PhoneNumber",
    },
    {
      title: "Appointment",
      dataIndex: "Appointment",
    },
    {
      title: "Status",
      dataIndex: "Status",
      render: (text, record) => (
        <div
          style={{
            backgroundColor: "#F0FF93",
            borderRadius: "4px",
            textAlign: "center",
          }}
        >
          {text}
        </div>
      ),
    },
  ],
};

export const completed = {
  datasource: [
    {
      ChildName: "Rohit",
      Gender: "Male",
      Age: "15 years",
      ParentName: "Rao",
      PhoneNumber: "9000802002",
      Appointment: "24 Aug 2024-4.00PM",
      payment: "Success",
      Status: "Success",
    },
    {
      ChildName: "Suvarna",
      Gender: "Female",
      Age: "16 years",
      ParentName: "Srinivas",
      PhoneNumber: "9000802001",
      Appointment: "24 Aug 2024-4.00PM",
      payment: "Success",
      Status: "Success",
    },
    {
      ChildName: "Ramarao",
      Gender: "Male",
      Age: "10 years",
      ParentName: "Gangadhar",
      PhoneNumber: "9000802003",
      Appointment: "24 Aug 2024-4.00PM",
      payment: "Success",
      Status: " Success",
    },
  ],
  columns: [
    {
      title: "ChildName",
      dataIndex: "ChildName",
    },
    {
      title: "Gender",
      dataIndex: "Gender",
    },
    {
      title: "Age",
      dataIndex: "Age",
    },
    {
      title: "ParentName",
      dataIndex: "ParentName",
    },
    {
      title: "PhoneNumber",
      dataIndex: "PhoneNumber",
    },
    {
      title: "Appointment",
      dataIndex: "Appointment",
    },
    {
      title: "Payment",
      dataIndex: "payment",
      render: (text, record) => <div style={{ color: "#A0FFB1;" }}>{text}</div>,
    },
    {
      title: "Status",
      dataIndex: "Status",
      render: (text, record) => (
        <div
          style={{
            backgroundColor: "#A0FFB1;",
            borderRadius: "4px",
            textAlign: "center",
          }}
        >
          {text}
        </div>
      ),
    },
  ],
};

export const cancelled = {
  datasource: [
    {
      PatientName: "Rohit",
      Gender: "Male",
      Years: "50 years",
      AppointmentType: "Online",
      DateandTime: "24 Aug,2024 - 4:00 PM",
      Status: " Canceled",
    },
    {
      PatientName: "Suvarna",
      Gender: "Female",
      Years: "40 years",
      AppointmentType: "In-Person",
      DateandTime: "24 Aug,2024 - 4:00 PM",
      Status: " Canceled",
    },
    {
      PatientName: "Ramarao",
      Gender: "Male",
      Years: "56 years",
      AppointmentType: "Online",
      DateandTime: "24 Aug,2024 - 4:00 PM",
      Status: " Cancelled",
    },
  ],
  column: [
    {
      title: "Patient Name",
      dataIndex: "PatientName",
    },
    {
      title: "Gender",
      dataIndex: "Gender",
    },
    {
      title: "Years",
      dataIndex: "Years",
    },
    {
      title: "Appointment Type",
      dataIndex: "AppointmentType",
      align: "center",
    },
    {
      title: "Date/Time",
      dataIndex: "DateandTime",
    },
    {
      title: "Status",
      dataIndex: "Status",
      align: "center",
      render: (text, record) => (
        <div
          style={{
            backgroundColor: "#FCD2CC",
            borderRadius: "4px",
            textAlign: "center",
          }}
        >
          {text}
        </div>
      ),
    },
  ],
};
const onChange = (checked) => {
  console.log(`switch to ${checked}`);
};
export const Employees = {
  datasource: [
    {
      EmployeeName: "Rohit",
      Role: "Physician",
      Department: "General Physician",
      PhoneNumber: "9000802002",
      Status: "",
    },
    {
      EmployeeName: "Suvarna",
      Role: "Surgeon",
      Department: "Surgical",
      PhoneNumber: "9000802003",
      Status: "",
    },
    {
      EmployeeName: "Ramarao",
      Role: "Dentist",
      Department: "Dentals",
      PhoneNumber: "9000802004",
      Status: "",
    },
  ],
  column: [
    {
      title: "EmployeeName",
      dataIndex: "EmployeeName",
    },
    {
      title: "Role",
      dataIndex: "Role",
    },
    {
      title: "Department",
      dataIndex: "Department",
    },
    {
      title: "PhoneNumber",
      dataIndex: "PhoneNumber",
    },
    {
      title: "Status",
      dataIndex: "Status",
      render: (text, record) => (
        <Switch size="small" defaultChecked onChange={onChange} />
      ),
    },
    {
      title: "",
      dataIndex: "ViewProfile",
      align: "center",
      render: (text, record) => (
        <a href="#" style={{ color: "#3C77E9", textDecoration: "none" }}>
          {" "}
          View Profile
        </a>
      ),
    },
  ],
};
export const Concerns = {
  datasource: [
    {
      SNo: "1",
      Concerns: "Migrane",
      CreatedOn: "12-12-2022",
      Status: "",
    },
    {
      SNo: "2",
      Concerns: "Stomach Pain",
      CreatedOn: "12-12-2022",
      Status: "",
    },
  ],
  column: [
    {
      title: "SNo",
      dataIndex: "SNo",
    },
    {
      title: "Concerns",
      dataIndex: "Concerns",
    },
    {
      title: "CreatedOn",
      dataIndex: "CreatedOn",
    },
    {
      title: "Status",
      dataIndex: "Status",
      render: (text, record) => (
        <Switch size="small" defaultChecked onChange={onChange} />
      ),
    },
  ],
};
export const Roles = {
  datasource: [
    {
      SNo: "1",
      Role: "Staff",
      Department: "Frontdesk",
      CreatedOn: "12-12-2022",
      Status: "",
    },
    {
      SNo: "2",
      Role: "Staff2",
      Department: "Front Desk",
      CreatedOn: "12-12-2022",
      Status: "",
    },
  ],
  column: [
    {
      title: "SNo",
      dataIndex: "SNo",
    },
    {
      title: "Role",
      dataIndex: "Role",
    },
    {
      title: "Department",
      dataIndex: "Department",
    },
    {
      title: "CreatedOn",
      dataIndex: "CreatedOn",
    },
    {
      title: "Status",
      dataIndex: "Status",
      render: (text, record) => (
        <Switch size="small" defaultChecked onChange={onChange} />
      ),
    },
  ],
};
export const Departments = {
  datasource: [
    {
      SNo: "1",
      Department: "Frontdesk",
      CreatedOn: "12-12-2022",
      Status: "",
    },
    {
      SNo: "2",
      Department: "Front Desk",
      CreatedOn: "12-12-2022",
      Status: "",
    },
  ],
  column: [
    {
      title: "SNo",
      dataIndex: "SNo",
    },
    {
      title: "Department",
      dataIndex: "Department",
    },
    {
      title: "CreatedOn",
      dataIndex: "CreatedOn",
    },
    {
      title: "Status",
      dataIndex: "Status",
      render: (text, record) => (
        <Switch size="small" defaultChecked onChange={onChange} />
      ),
    },
  ],
};
export const Specialists = {
  datasource: [
    {
      SNo: "1",
      SpecialistName: "Dentist",
      CreatedOn: "12-12-2022",
      Status: "",
    },
    {
      SNo: "2",
      SpecialistName: "Caridologist",
      CreatedOn: "12-12-2022",
      Status: "",
    },
  ],
  column: [
    {
      title: "SNo",
      dataIndex: "SNo",
    },
    {
      title: "SpecialistName",
      dataIndex: "SpecialistName",
    },
    {
      title: "CreatedOn",
      dataIndex: "CreatedOn",
    },
    {
      title: "Status",
      dataIndex: "Status",
      render: (text, record) => (
        <Switch size="small" defaultChecked onChange={onChange} />
      ),
    },
  ],
};
