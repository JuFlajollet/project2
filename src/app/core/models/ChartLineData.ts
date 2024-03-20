/* 
example of a regular line chart data:
data format is multi series
[
    {
      "name": "Germany",
      "series": [
        {
          "name": "2010",
          "value": 7300000
        },
        {
          "name": "2011",
          "value": 8940000
        }
      ]
    },
  
    {
      "name": "USA",
      "series": [
        {
          "name": "2010",
          "value": 7870000
        },
        {
          "name": "2011",
          "value": 8270000
        }
      ]
    }
  ] */

import { ChartLineDataSerie } from "./ChartLineDataSerie";

export class ChartLineData {
    name!: string;
    series!: ChartLineDataSerie[];
}