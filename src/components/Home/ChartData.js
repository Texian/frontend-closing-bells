import AmCharts from "@amcharts/amcharts3-react";

const chartData = [
    {
        "date": "2020-01-01",
        "price": 227,
        "item": "Shovel",
    },
    {
        "date": "2020-01-02",
        "price": 371,
        "item": "Shovel",
    },
    {
        "date": "2020-01-02",
        "price": 433,
        "item": "Shovel",
    },
    {
        "date": "2020-01-02",
        "price": 345,
        "item": "Shovel",
    },
    {
        "date": "2020-01-05",
        "price": 480,
        "item": "Shovel",
    },
    {
        "date": "2020-01-06",
        "price": 386,
        "item": "Shovel",
    },
    {
        "date": "2020-01-07",
        "price": 348,
        "item": "Shovel",
    },
    {
        "date": "2020-01-08",
        "price": 238,
        "item": "Shovel",
    },
    {
        "date": "2020-01-09",
        "price": 218,
        "item": "Shovel",
    },
    {
        "date": "2020-01-10",
        "price": 349,
        "item": "Shovel",
    },
    {
        "date": "2020-01-11",
        "price": 603,
        "item": "Shovel",
        "bulletClass": "lastBullet"
    },
    {
        "date": "2020-01-12",
        "price": 534,
        "item": "Shovel",
    },
    {
        "date": "2020-01-13",
        "price": 425,
        "item": "Shovel",
    },
    {
        "date": "2020-01-13",
        "price": 45,
        "item": "Shovel",
    },
    {
        "date": "2020-01-13",
        "price": 5,
        "item": "Shovel",
    },
    {
        "date": "2020-01-14",
        "price": 470,
        "item": "Shovel",

    },
    {
        "date": "2020-01-14",
        "price": 40,
        "item": "Shovel",

    }
];

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
      title: "price",
      gridAlpha: 0,
      axisAlpha: 0
    }],
  graphs: [{
    id: "g2",
    valueField: "price",
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
    labelText: "[[]]",
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

