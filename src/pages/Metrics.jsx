import { useContext } from "react";
import { Link } from "react-router-dom";

import { MetricsContext } from "../App";
import {
  monthlyVisitsOptions,
  uriVisitsOptions,
  countryVisitsOptions,
} from "../utils/highOptions";

import Highcharts from "highcharts";
import HighMaps from "highcharts/highmaps";
import HighchartsReact from "highcharts-react-official";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Spinner from "react-bootstrap/Spinner";

const Metrics = () => {
  const {
    metrics: { data, loading },
  } = useContext(MetricsContext);

  let monthlyVisits, uriVisits, mapVisits;
  if (data !== null) {
    monthlyVisits = monthlyVisitsOptions(data.months);
    uriVisits = uriVisitsOptions(data.uris);
    mapVisits = countryVisitsOptions(data.locations);
  }

  return (
    <div>
      <Row>
        <Col lg="6">
          <h2>Site Metrics</h2>
          <p>
            When a user accesses this website, the request is passed to the
            user's closest AWS data center. In AWS lingo, this is called an{" "}
            <Link to="https://aws.amazon.com/cloudfront/features/?whats-new-cloudfront.sort-by=item.additionalFields.postDateTime&whats-new-cloudfront.sort-order=desc#Global_Edge_Network">
              edge point location
            </Link>
            . The request metadata gets stored in log files, denoting the URI
            (website path, like homepage etc.), IP address, device information
            and other useful details.
          </p>
          <p>
            I developed a series of functions that reads the previous days log
            files, inserts it into Databricks and computes a JSON file which
            these graphs use below. All of the infrastructure is written in
            Cloudformation YAML, Lambda functions with Python, and the front end
            (this website) in React. Orchestration is done with Github actions.
          </p>
        </Col>
        <Col lg="6">
          {loading && (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                padding: "40px",
              }}
            >
              <Spinner animation="grow" variant="primary" size="lg" />
            </div>
          )}
          {data !== null && (
            <HighchartsReact
              highcharts={HighMaps}
              constructorType={"mapChart"}
              options={mapVisits}
            />
          )}
        </Col>
      </Row>
      <Row>
        <Col lg="6">
          {loading && (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                padding: "40px",
              }}
            >
              <Spinner animation="grow" variant="primary" size="lg" />
            </div>
          )}
          {data !== null && (
            <HighchartsReact highcharts={Highcharts} options={monthlyVisits} />
          )}
        </Col>

        <Col lg="6">
          {loading && (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                padding: "40px",
              }}
            >
              <Spinner animation="grow" variant="primary" size="lg" />
            </div>
          )}
          {data !== null && (
            <HighchartsReact highcharts={Highcharts} options={uriVisits} />
          )}
        </Col>
      </Row>
    </div>
  );
};

export default Metrics;
