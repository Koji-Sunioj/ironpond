import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Routes, Route, BrowserRouter } from "react-router-dom";

import About from "./pages/About";
import Resume from "./pages/Resume";
import Metrics from "./pages/Metrics";
import HomePage from "./pages/HomePage";
import NavBar from "./components/NavBar";
import Portfolio from "./pages/Portfolio";
import Container from "react-bootstrap/Container";

import { useEffect, createContext, useState } from "react";

export const MetricsContext = createContext(null);

const App = () => {
  const metricsUrl =
    "https://ironpondstack-logbucketcc3b17e8-1t5bduk77ymwx.s3.amazonaws.com/app_data/metrics.json";
  const [metrics, setMetrics] = useState({
    data: null,
    loading: false,
  });

  useEffect(() => {
    fetchMetrics();
  }, []);

  const fetchMetrics = async () => {
    setMetrics({ data: null, loading: true });
    const request = await fetch(metricsUrl);
    const { status } = request;

    if (status === 200) {
      const data = await request.json();
      setMetrics({ data: data, loading: false });
    }
  };

  return (
    <MetricsContext.Provider value={{metrics}}>
      <BrowserRouter>
        <NavBar />
        <Container>
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/metrics" element={<Metrics />}></Route>
            <Route path="/resume" element={<Resume />}></Route>
            <Route path="/portfolio" element={<Portfolio />}></Route>
            <Route path="/about" element={<About />}></Route>
          </Routes>
        </Container>
      </BrowserRouter>
    </MetricsContext.Provider>
  );
};

export default App;
