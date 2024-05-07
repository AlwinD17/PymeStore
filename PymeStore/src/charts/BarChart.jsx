import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Year", "Ventas", "Gastos", "Ganancias"],
  ["2018", 1000, 400, 200],
  ["2019", 1170, 460, 250],
  ["2020", 660, 1120, 300],
  ["2021", 1030, 540, 350],
  ["2022", 370, 460, 250],
  ["2023", 460, 1220, 320],
  ["2024", 1230, 240, 250],
];

export const options = {
  chart: {
    title: "Desempeño de la compañía",
    subtitle: "Ventas, gastos y ganancias: 2018-2024",
  },
};

export default function BarChart() {
  return (
    <Chart
      chartType="Bar"
      width="100%"
      height="350px"
      data={data}
      options={options}
    />
  );
}