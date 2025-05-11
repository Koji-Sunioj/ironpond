import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";

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
