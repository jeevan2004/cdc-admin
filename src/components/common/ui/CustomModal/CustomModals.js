import Modal from "react-bootstrap/Modal";
import logo from "../../../../assets/images/bersHeroLogo.png";
import "./CustomModals.css";

const CustomModals = ({
  title,
  discription,
  centered,
  show,
  handleClose,
  size,
  children,
}) => {
  return (
    <Modal
      show={show}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
      className="custom_modal_outer"
      size={size}
      aria-labelledby="contained-modal-title-vcenter"
      centered={centered || true}
    >
      <Modal.Header closeButton className="bg_primary modal_header">
        <Modal.Title>
          <img className="modal_logo" src={logo} alt="logo" />
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="modal_body">
        <h3 className="text_primary fs_30 fw_semibold">{title}</h3>
        <p>{discription}</p>
        {children}
      </Modal.Body>
    </Modal>
  );
};

export default CustomModals;
