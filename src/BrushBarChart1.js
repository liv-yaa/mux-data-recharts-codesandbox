import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  Brush,
  ReferenceLine,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

export default class BrushBarChart1 extends PureComponent {
  static jsfiddleUrl = "https://jsfiddle.net/alidingling/mc8r7e6p/";

  render() {
    return (
      <BarChart
        width={900}
        height={300}
        data={this.props.data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="field" padding={{ left: 30, right: 30 }} />
        <YAxis padding={{ left: 30, right: 30 }} />
        <Tooltip />
        <Legend verticalAlign="top" wrapperStyle={{ lineHeight: "40px" }} />
        <ReferenceLine y={0} stroke="#000" />
        <Brush dataKey="field" height={30} stroke="#8884d8" />
        <Bar dataKey="value" fill="#8884d8" />
        {/* <Bar dataKey="views" fill="#82ca9d" /> */}
      </BarChart>
    );
  }
}
