import React from "react";
import "./styles.css";
import playback_failure_cdn from "./playback_failure_cdn.json";
import playback_failure_timeseries from "./playback_failure_timeseries.json";
import BrushBarChart1 from "./BrushBarChart1";
import BrushBarChart2 from "./BrushBarChart2";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Mux Data API + Recharts Demo</h1>
        <p>
          Using mock data from the Mux Data API, generate some React charts.
        </p>
        Resources:
        <a
          className="App-link"
          href="https://mux.com/data"
          target="_blank"
          rel="noopener noreferrer"
        >
          Mux Data
        </a>
        <a
          className="App-link"
          href="https://api-docs.mux.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Mux Data API
        </a>
        <p>by Olivia Smith (Support Engineer @ Mux)</p>
      </header>
      <body>
        <h1>Video Playback Failure Percentage by CDN</h1>
        This graph visualizes the response from the Metrics Breakdown endpoint,
        grouped by the CDN name. The x-axis represents the CDN name, and the
        y-axis represents playback failure percentage.
        <BrushBarChart1 data={playback_failure_cdn.data} />
        <h1>Video Playback Failure Percentage over Time</h1>
        This graph visualizes the response from the Metrics Timeseries endpoint.
        The x-axis represents time and the y-axis represents the playback
        failure percentage value in purple and concurrent viewers in green.
        <BrushBarChart2 data={playback_failure_timeseries.data} />
      </body>
    </div>
  );
}
