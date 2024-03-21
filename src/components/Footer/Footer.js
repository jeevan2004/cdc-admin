import { Children } from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row, Stack } from "react-bootstrap";
// import {
//   FOOTER_COL1_MENU,
//   FOOTER_COL2_MENU,
//   FOOTER_COL3_MENU,
//   FOOTER_BOTTOM_LINKS,
//   FOOTER_SOCIAL_LINKS,
// } from "../../utils/constant";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="top_footer">
        <Container>
          <Row>
            <Col md={8}>
              <Row>
                <Col md={3}>
                  <h5 className="text_primary fs_15 fw_semibold">CONTACT US</h5>
                  {/* <ul>
                    {Children.toArray(
                      FOOTER_COL1_MENU.map((el) => (
                        <li>
                          <Link
                            title={el.name}
                            className="fs_15 fw_light"
                            to={el.path}
                          >
                            {el.name}
                          </Link>
                        </li>
                      ))
                    )}
                  </ul> */}
                </Col>
                <Col md={3}>
                  <h5 className="text_primary fs_15 fw_semibold">
                    OUR SOFTWARE
                  </h5>
                  {/* <ul>
                    {Children.toArray(
                      FOOTER_COL2_MENU.map((el) => (
                        <li>
                          <Link
                            title={el.name}
                            className="fs_15 fw_light"
                            to={el.path}
                          >
                            {el.name}
                          </Link>
                        </li>
                      ))
                    )}
                  </ul> */}
                </Col>
                <Col md={3}>
                  <h5 className="text_primary fs_15 fw_semibold">
                    NEWS & EVENTS
                  </h5>
                  {/* <ul>
                    {Children.toArray(
                      FOOTER_COL3_MENU.map((el) => (
                        <li>
                          <Link
                            title={el.name}
                            className="fs_15 fw_light"
                            to={el.path}
                          >
                            {el.name}
                          </Link>
                        </li>
                      ))
                    )}
                  </ul> */}
                </Col>
                <Col md={3}></Col>
              </Row>
              <Row className="align-items-end">
                <Col md={3}>
                  {/* <img className="img-fluid" src={logo} alt="Footer Logo" /> */}
                </Col>
                <Col md={6}>
                  <div className="form-group">
                    <label className="text_primary fs_15 mb-2 fw_semibold">
                      SUBSCRIBE TO OUR MAILING LIST
                    </label>
                    <Stack direction="horizontal" gap={3}>
                      <input
                        className="form-control border-0 fs_15 fw_light text_primary"
                        id="email"
                        name="email"
                        placeholder="Enter your email address here"
                        type="email"
                        autoComplete="off"
                      />
                      <button className="custom_btn btn_secondary btn_sm">
                        JOIN
                      </button>
                    </Stack>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col md={4}>
              {/* <img
                className="img-fluid w-100"
                src={footerImg}
                alt="Footer Images"
              /> */}
            </Col>
          </Row>
        </Container>
      </div>
      <div className="bg_primary bottom_footer">
        <Container>
          <Row>
            <Col md={8}>
              {/* <div className="bottom_links">
                {Children.toArray(
                  FOOTER_BOTTOM_LINKS.map((el, ind) => (
                    <>
                      <Link
                        className="fs_15 fw_light text_white"
                        title={el.name}
                        to={el.path}
                      >
                        {el.name}
                      </Link>
                      {FOOTER_BOTTOM_LINKS.length - 1 !== ind && (
                        <span className="seprator fs_15 fw_light text_white">
                          |
                        </span>
                      )}
                    </>
                  ))
                )}
              </div> */}
            </Col>
            <Col md={4}>
              {/* <div className="bottom_icons">
                {Children.toArray(
                  FOOTER_SOCIAL_LINKS.map((el) => (
                    <div onClick={() => window.open(el.path)}>
                      <el.icon />
                    </div>
                  ))
                )}
              </div> */}
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
