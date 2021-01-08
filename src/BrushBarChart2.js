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

export default class BrushBarChart2 extends PureComponent {
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
        <XAxis dataKey="date" />
        <XAxis dataKey="date" padding={{ left: 30, right: 30 }} />
        <YAxis />
        <Tooltip />
        <Legend verticalAlign="top" wrapperStyle={{ lineHeight: "40px" }} />
        <ReferenceLine y={0} stroke="#000" />
        <Brush dataKey="date" height={30} stroke="#8884d8" />
        <Bar dataKey="value" fill="#8884d8" />
        <Bar dataKey="concurrent_viewers" fill="#82ca9d" />
      </BarChart>
    );
  }
}
