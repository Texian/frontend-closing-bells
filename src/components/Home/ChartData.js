import AmCharts from "@amcharts/amcharts3-react";

const chartData = [
    {
        "date": "2012-01-01",
        "price": 227,
        "item": "New York",
        "townName2": "New York",
        "townSize": 25,
        "latitude": 40.71,
        "duration": 408
    },
    {
        "date": "2012-01-02",
        "distance": 371,
        "townName": "Washington",
        "townSize": 14,
        "latitude": 38.89,
        "duration": 482
    },
    {
        "date": "2012-01-03",
        "distance": 433,
        "townName": "Wilmington",
        "townSize": 6,
        "latitude": 34.22,
        "duration": 562
    },
    {
        "date": "2012-01-04",
        "distance": 345,
        "townName": "Jacksonville",
        "townSize": 7,
        "latitude": 30.35,
        "duration": 379
    },
    {
        "date": "2012-01-05",
        "distance": 480,
        "townName": "Miami",
        "townName2": "Miami",
        "townSize": 10,
        "latitude": 25.83,
        "duration": 501
    },
    {
        "date": "2012-01-06",
        "distance": 386,
        "townName": "Tallahassee",
        "townSize": 7,
        "latitude": 30.46,
        "duration": 443
    },
    {
        "date": "2012-01-07",
        "distance": 348,
        "townName": "New Orleans",
        "townSize": 10,
        "latitude": 29.94,
        "duration": 405
    },
    {
        "date": "2012-01-08",
        "distance": 238,
        "townName": "Houston",
        "townName2": "Houston",
        "townSize": 16,
        "latitude": 29.76,
        "duration": 309
    },
    {
        "date": "2012-01-09",
        "distance": 218,
        "townName": "Dalas",
        "townSize": 17,
        "latitude": 32.8,
        "duration": 287
    },
    {
        "date": "2012-01-10",
        "distance": 349,
        "townName": "Oklahoma City",
        "townSize": 11,
        "latitude": 35.49,
        "duration": 485
    },
    {
        "date": "2012-01-11",
        "distance": 603,
        "townName": "Kansas City",
        "townSize": 10,
        "latitude": 39.1,
        "duration": 890
    },
    {
        "date": "2012-01-12",
        "distance": 534,
        "townName": "Denver",
        "townName2": "Denver",
        "townSize": 18,
        "latitude": 39.74,
        "duration": 810
    },
    {
        "date": "2012-01-13",
        "townName": "Salt Lake City",
        "townSize": 12,
        "distance": 425,
        "duration": 670,
        "latitude": 40.75,
        "alpha":0.4
    },
    {
        "date": "2012-01-14",
        "latitude": 36.1,
        "duration": 470,
        "townName": "Las Vegas",
        "townName2": "Las Vegas",
        "bulletClass": "lastBullet"
    },
    {
        "date": "2012-01-15"
    },
    {
        "date": "2012-01-16"
    },
    {
        "date": "2012-01-17"
    },
    {
        "date": "2012-01-18"
    },
    {
        "date": "2012-01-19"
    }
];

const chartData2 = [{
      "trendLines": [{
        "initialValue": 136.65,
        "initialDate": "2011-08-02",
        "finalValue": 136.65,
        "finalDate": "2011-08-15",
        "lineThickness": 2,
        "lineColor": "#0c0",
    
      }, {
        "initialValue": 140,
        "initialDate": "2011-08-18",
        "finalValue": 140,
        "finalDate": "2011-08-30",
        "lineThickness": 2,
        "lineColor": "#c00",
    
      }, {
        "initialValue": 132,
        "initialDate": "2011-09-10",
        "finalValue": 132,
        "finalDate": "2011-09-25",
        "lineThickness": 2,
        "lineColor": "#0c0",
    
      }, {
        "initialValue": 140,
        "initialDate": "2011-09-14",
        "finalValue": 140,
        "finalDate": "2011-09-27",
        "lineThickness": 2,
        "lineColor": "#c00",
    
      }],
      "dataProvider": [{
        "date": "2011-08-01",
        "open": "136.65",
        "high": "136.96",
        "low": "134.15",
        "close": "136.49"
      }, {
        "date": "2011-08-02",
        "open": "135.26",
        "high": "135.95",
        "low": "131.50",
        "close": "131.85"
      }, {
        "date": "2011-08-05",
        "open": "132.90",
        "high": "135.27",
        "low": "128.30",
        "close": "135.25"
      }]
}];

const chart = AmCharts.makeChart("chartdiv", {
  type: "serial",
  theme: "light",
  dataDateFormat: "YYYY-MM-DD",
  dataProvider: chartData,

  addClassNames: true,
  startDuration: 1,
  color: "#000000",
  marginLeft: 0,

  categoryField: "date",
  categoryAxis: {
    parseDates: true,
    minPeriod: "DD",
    autoGridCount: false,
    gridCount: 15,
    gridAlpha: 0.05,
    gridColor: "#000000",
    axisColor: "#000000",
    dateFormats: [{
        period: 'DD',
        format: 'DD'
    }, {
        period: 'WW',
        format: 'MMM DD'
    }, {
        period: 'MM',
        format: 'MMM'
    }, {
        period: 'YYYY',
        format: 'YYYY'
    }]
  },

  valueAxes: [{
      id: "a1",
      title: "distance",
      gridAlpha: 0,
      axisAlpha: 0
    },{
    id: "a2",
    position: "right",
    gridAlpha: 0,
    axisAlpha: 0,
    labelsEnabled: false
  }],
  graphs: [{
    id: "g1",
    valueField: "distance",
    title: "Price",
    type: "column",
    fillAlphas:  0.9,
    valueAxis:  "a1",
    balloonText:  "[[value]] miles",
    legendValueText:  "[[value]] mi",
    legendPeriodValueText:  "total: [[value.sum]] mi",
    lineColor:  "#263138",
    alphaField:  "alpha",
},{
    id: "g2",
    valueField: "distance",
    classNameField: "bulletClass",
    title: "Date",
    type: "line",
    valueAxis: "a2",
    lineColor: "#a88cdf",
    lineThickness: 4,
    legendValueText: "[[description]]/[[value]]",
    descriptionField: "townName",
    bullet: "round",
    bulletSizeField: "townSize",
    bulletBorderColor: "#a88cdf",
    bulletBorderAlpha: 1,
    bulletBorderThickness: 5,
    bulletColor: "#df8cc2",
    labelText: "[[townName2]]",
    labelPosition: "right",
    balloonText: "price:[[value]]",
    showBalloon: true,
    animationPlayed: true,
  },{
    id: "g3",
    balloonText: "Open:<b>[[open]]</b><br>Low:<b>[[low]]</b><br>High:<b>[[high]]</b><br>Close:<b>[[close]]</b><br>",
    closeField: "close",
    fillColors: "#7f8da9",
    highField: "high",
    lineColor: "#7f8da9",
    lineAlpha: 1,
    fillAlphas: 0,
    lineThickness: 2,
    lowField: "low",
    negativeFillColors: "#db4c3c",
    negativeLineColor: "#db4c3c",
    openField: "open",
    title: "Price:",
    type: "ohlc",
    valueField: "close"
  }],

  chartCursor: {
    zoomable: false,
    categoryBalloonDateFormat: "DD",
    cursorAlpha: 0,
    valueBalloonsEnabled: false
  },
//   legend: {
//     bulletType: "round",
//     equalWidths: false,
//     valueWidth: 120,
//     useGraphSettings: true,
//     color: "#000000"
//   }
});