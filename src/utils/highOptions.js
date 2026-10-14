import worldMap from "@highcharts/map-collection/custom/world-lowres.geo.json";

export const countryVisitsOptions = (countries) => {
  const series = countries.map((country)=>[country["country"].toLowerCase(),country["visits"]])
  const mapOptions = {
    chart: {
      map: worldMap,
    },
    title: {
      text: "Website traffic per country",
    },
    mapNavigation: {
      enabled: true,
      buttonOptions: {
        alignTo: "spacingBox",
      },
    },
    colorAxis: {
      min: 0,
    },
    series: [
      {
        name: "Requests",
        states: {
          hover: {
            color: "#BADA55",
          },
        },

        data: series,
      },
    ],
  };
  return mapOptions; 
}

export const uriVisitsOptions = (metrics) => {

  const visits = metrics.map((dict) => dict.visits);
  const uris = metrics.map((dict) => dict.uri);

  const chartOptions = {
    chart: {
      type: "column",
    },
    title: {
      text: "Website uri visits",
    },
    xAxis: [
      {
        categories: uris,
        title: {
          text: "uri",
        },
      },
    ],
    yAxis: [
      {
        title: {
          text: "count",
        },
      },
    ],
    series: [
      {
        name: "visits",
        data: visits,
      },
    ],
  };
  return chartOptions
}

export const monthlyVisitsOptions = (metrics) => {
  metrics.sort((prev, next) => {
    if (prev.month < next.month) return -1;
    if (prev.month > next.month) return 1;
    return 0;
  });

  const visits = metrics.map((dict) => dict.visits);
  const dates = metrics.map((dict) => dict.month.substring(0,7));

  const chartOptions = {
    chart: {
      type: "line",
    },
    title: {
      text: "Monthly visitors",
    },
    xAxis: [
      {
        categories: dates,
        title: {
          text: "month",
        },
      },
    ],
    yAxis: [
      {
        title: {
          text: "count",
        },
      },
    ],
    series: [
      {
        name: "visits",
        data: visits,
      },
    ],
  };

  return chartOptions;
};
