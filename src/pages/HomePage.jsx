import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Alert from "react-bootstrap/Alert";

import { Link } from "react-router-dom";

import { skills, summaries, imgStyle } from "../utils/data.js";

const HomePage = ({ mode }) => {
  return (
    <>
      <Row className="mb-2">
        <Col>
          <h1>Hello there</h1>
          <p>
            My name is Koji Inoue, a professional with strong a background in
            ERP integrations and Software Development. Having a wide range of
            interests and technical skills to offer you and your organization, I
            am ready to tackle the next project and deliver well rounded
            solutions with your team. Scroll down for more information.
          </p>
        </Col>
        <Alert>
          <p>
            Update October 2026: I have been recently accepted to Aalto EE's
            Data Engineering and AI FEC (further educated with companies)
            program. This program specalizes in educating IT professionals to
            work in a Data Engineering role, while simultaneously working at
            company to understand their needs for a span of six months for a fee
            of 8,400 euros to Aalto EE - after which a work contract is
            negotiated.
          </p>

          <p>
            If you know a company or a start up in which would benefit from my
            skills or participation in this program,{" "}
            <Link to={"https://www.linkedin.com/in/koji-inoue-14647b56/"}>
              please get in touch with me
            </Link>{" "}
            and I will be happy to discuss more details.
          </p>
        </Alert>
      </Row>
      <Row className="mb-2">
        <h2>I am a...</h2>
        {summaries.map((summary) => {
          const { photo, title, content } = summary;
          return (
            <Col lg={4} className="mb-3" key={title}>
              <Card bg={mode}>
                <Card.Img variant="top" src={photo} style={imgStyle} />
                <Card.Body>
                  <Card.Title>{title}</Card.Title>
                  <Card.Text
                    dangerouslySetInnerHTML={{ __html: content }}
                  ></Card.Text>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
      <Row className="mb-2">
        <h2>In summary, I have skills in... </h2>
        {skills.map(
          (skill) =>
            !skill.title.includes("People and culture") && (
              <p key={skill.title}>
                <strong>{skill.title}</strong>
              </p>
            )
        )}
        <p>
          ...and many other interpersonal, client facing or team building
          skills!
        </p>
      </Row>
    </>
  );
};

export default HomePage;
