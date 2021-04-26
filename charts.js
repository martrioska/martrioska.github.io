map_data = [{
        "name": "Germany",
        "id": "DE",
        "male": "1838",
        "female": "448"
    },
    {
        "name": "France",
        "id": "FR",
        "male": "714",
        "female": "187"
    },
    {
        "name": "United Kingdom",
        "id": "GB",
        "male": "356",
        "female": "102"
    },
    {
        "name": "Austria",
        "id": "AT",
        "male": "310",
        "female": "91"
    },
    {
        "name": "Italy",
        "id": "IT",
        "male": "298",
        "female": "111"
    },
    {
        "name": "Poland",
        "id": "PL",
        "male": "247",
        "female": "118"
    },
    {
        "name": "Spain",
        "id": "ES",
        "male": "233",
        "female": "140"
    },
    {
        "name": "Netherlands",
        "id": "NL",
        "male": "183",
        "female": "72"
    },
    {
        "name": "Hungary",
        "id": "HU",
        "male": "152",
        "female": "55"
    },
    {
        "name": "Sweden",
        "id": "SE",
        "male": "140",
        "female": "52"
    },
    {
        "name": "Belgium",
        "id": "BE",
        "male": "113",
        "female": "23"
    },
    {
        "name": "Denmark",
        "id": "DK",
        "male": "101",
        "female": "52"
    },
    {
        "name": "Slovenia",
        "id": "SI",
        "male": "99",
        "female": "135"
    },
    {
        "name": "Czech Republic",
        "id": "CZ",
        "male": "61",
        "female": "50"
    },
    {
        "name": "Greece",
        "id": "GR",
        "male": "44",
        "female": "12"
    },
    {
        "name": "Romania",
        "id": "RO",
        "male": "44",
        "female": "10"
    },
    {
        "name": "Finland",
        "id": "FI",
        "male": "43",
        "female": "28"
    },
    {
        "name": "Estonia",
        "id": "EE",
        "male": "36",
        "female": "38"
    },
    {
        "name": "Bulgaria",
        "id": "BG",
        "male": "25",
        "female": "11"
    },
    {
        "name": "Croatia",
        "id": "HR",
        "male": "18",
        "female": "7"
    },
    {
        "name": "Lithuania",
        "id": "LT",
        "male": "16",
        "female": "12"
    },
    {
        "name": "Latvia",
        "id": "LV",
        "male": "15",
        "female": "5"
    },
    {
        "name": "Portugal",
        "id": "PT",
        "male": "13",
        "female": "5"
    },
    {
        "name": "Ireland",
        "id": "IE",
        "male": "7",
        "female": "3"
    },
    {
        "name": "Slovakia",
        "id": "SK",
        "male": "5",
        "female": "4"
    },
    {
        "name": "Luxembourg",
        "id": "LU",
        "male": "4",
        "female": "3"
    }
];

// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end


////////// GEO DIST CHART

var geo_dist = am4core.create("map-dist", am4maps.MapChart);

try {
    geo_dist.geodata = am4geodata_worldHigh;
}
catch (e) {
    geo_dist.raiseCriticalError(new Error("Map geodata could not be loaded. Please download the latest <a href=\"https://www.amcharts.com/download/download-v4/\">amcharts geodata</a> and extract its contents into the same directory as your amCharts files."));
}

geo_dist.projection = new am4maps.projections.Mercator();

// zoomout on background click
geo_dist.chartContainer.background.events.on("hit", function () { zoomOut() });

var colorSet = new am4core.ColorSet();
var morphedPolygon;

// map polygon series (countries)
var polygonSeries = geo_dist.series.push(new am4maps.MapPolygonSeries());
polygonSeries.useGeodata = true;
// specify which countries to include
list = [];
for (var i = 0; i < map_data.length; i++) {
    list.push(map_data[i]["id"]);
};
polygonSeries.include = list;


polygonSeries.data = map_data

// country area look and behavior
var polygonTemplate = polygonSeries.mapPolygons.template;
polygonTemplate.strokeOpacity = 1;
polygonTemplate.stroke = am4core.color("#ffffff");
polygonTemplate.fillOpacity = 0.75;
polygonTemplate.tooltipText = "{name}";

// desaturate filter for countries
var desaturateFilter = new am4core.DesaturateFilter();
desaturateFilter.saturation = 1;
polygonTemplate.filters.push(desaturateFilter);

// take a color from color set
var set = ["#d5e7e5", "#C4ddda", "#B0C6C4", "#9CB0AE", "#899A98", "#758482", "#626E6D", "#e8cdda"]
polygonTemplate.adapter.add("fill", function (fill, target) {
    if (target.dataItem.dataContext) {
        var rate_male = parseInt(target.dataItem.dataContext.male)/(parseInt(target.dataItem.dataContext.male) + parseInt(target.dataItem.dataContext.female))
        if(rate_male <= 0.50) {
            return am4core.color(set[7])
        }
        else if(rate_male <= 0.55) {
            return am4core.color(set[0])
        }
        else if(rate_male <= 0.625) {
            return am4core.color(set[1])
        }
        else if(rate_male <= 0.675) {
            return am4core.color(set[2])
        }
        else if(rate_male <= 0.725) {
            return am4core.color(set[3])
        }
        else if(rate_male <= 0.775) {
            return am4core.color(set[4])
        }
        else if(rate_male <= 0.85) {
            return am4core.color(set[5])
        }
        else
            return am4core.color(set[6]);
    }
})

// set fillOpacity to 1 when hovered
var hoverState = polygonTemplate.states.create("hover");
hoverState.properties.fillOpacity = 1;

// what to do when country is clicked
polygonTemplate.events.on("hit", function (event) {
    event.target.zIndex = 1000000;
    selectPolygon(event.target);
})

// Pie chart
var pieChart = geo_dist.seriesContainer.createChild(am4charts.PieChart);
// Set width/heigh of a pie chart for easier positioning only
pieChart.width = 100;
pieChart.height = 100;
pieChart.hidden = true; // can't use visible = false!

// because defauls are 50, and it's not good with small countries
pieChart.chartContainer.minHeight = 1;
pieChart.chartContainer.minWidth = 1;

var pieSeries = pieChart.series.push(new am4charts.PieSeries());
pieSeries.dataFields.value = "value";
pieSeries.dataFields.category = "category";
pieSeries.data = [{ value: 100, category: "Male" }, { value: 20, category: "Female" }];

var dropShadowFilter = new am4core.DropShadowFilter();
dropShadowFilter.blur = 4;
pieSeries.filters.push(dropShadowFilter);

var sliceTemplate = pieSeries.slices.template;
sliceTemplate.fillOpacity = 1;
sliceTemplate.strokeOpacity = 0;

var activeState = sliceTemplate.states.getKey("active");
activeState.properties.shiftRadius = 0; // no need to pull on click, as country circle under the pie won't make it good

var sliceHoverState = sliceTemplate.states.getKey("hover");
sliceHoverState.properties.shiftRadius = 0; // no need to pull on click, as country circle under the pie won't make it good

// we don't need default pie chart animation, so change defaults
var hiddenState = pieSeries.hiddenState;
hiddenState.properties.startAngle = pieSeries.startAngle;
hiddenState.properties.endAngle = pieSeries.endAngle;
hiddenState.properties.opacity = 0;
hiddenState.properties.visible = false;

// series labels
var labelTemplate = pieSeries.labels.template;
labelTemplate.nonScaling = true;
labelTemplate.fill = am4core.color("#333333");
labelTemplate.fontSize = 10;
labelTemplate.padding(4, 9, 4, 9);
pieSeries.ticks.template.disabled = true;
pieSeries.alignLabels = false;
labelTemplate.text = "{value.percent.formatNumber('#.0')}%";
labelTemplate.radius = am4core.percent(-40);

// we need pie series to hide faster to avoid strange pause after country is clicked
pieSeries.hiddenState.transitionDuration = 200;

// country label
var countryLabel = geo_dist.chartContainer.createChild(am4core.Label);
countryLabel.text = "Select a country";
countryLabel.fill = am4core.color("#333333");
countryLabel.fontSize = 20;

countryLabel.hiddenState.properties.dy = 1000;
countryLabel.defaultState.properties.dy = 0;
countryLabel.valign = "middle";
countryLabel.align = "left";
countryLabel.marginLeft = 50;
countryLabel.background = new am4core.RoundedRectangle();
countryLabel.background.fill = am4core.color("#ffffff")
countryLabel.hide(0);
countryLabel.show();

// select polygon
function selectPolygon(polygon) {
    if (morphedPolygon != polygon) {
        var animation = pieSeries.hide();
        if (animation) {
            animation.events.on("animationended", function () {
                morphToCircle(polygon);
            })
        }
        else {
            morphToCircle(polygon);
        }
    }
}

// fade out all countries except selected
function fadeOut(exceptPolygon) {
    for (var i = 0; i < polygonSeries.mapPolygons.length; i++) {
        var polygon = polygonSeries.mapPolygons.getIndex(i);
        if (polygon != exceptPolygon) {
            polygon.defaultState.properties.fillOpacity = 0.5;
            polygon.animate([{ property: "fillOpacity", to: 0.5 }, { property: "strokeOpacity", to: 1 }], polygon.polygon.morpher.morphDuration);
        }
    }
}

function zoomOut() {
    if (morphedPolygon) {
        pieSeries.hide();
        morphBack();
        fadeOut();
        countryLabel.hide();
        morphedPolygon = undefined;
    }
}

function morphBack() {
    if (morphedPolygon) {
        morphedPolygon.polygon.morpher.morphBack();
        var dsf = morphedPolygon.filters.getIndex(0);
        dsf.animate({ property: "saturation", to: 0.25 }, morphedPolygon.polygon.morpher.morphDuration);
    }
}

function morphToCircle(polygon) {


    var animationDuration = polygon.polygon.morpher.morphDuration;
    // if there is a country already morphed to circle, morph it back
    morphBack();
    // morph polygon to circle
    polygon.toFront();
    polygon.polygon.morpher.morphToSingle = true;
    var morphAnimation = polygon.polygon.morpher.morphToCircle();

    polygon.strokeOpacity = 0; // hide stroke for lines not to cross countries

    polygon.defaultState.properties.fillOpacity = 1;
    polygon.animate({ property: "fillOpacity", to: 1 }, animationDuration);

    // animate desaturate filter
    var filter = polygon.filters.getIndex(0);
    filter.animate({ property: "saturation", to: 1 }, animationDuration);

    // save currently morphed polygon
    morphedPolygon = polygon;

    // fade out all other
    fadeOut(polygon);

    // hide country label
    countryLabel.hide();

    if (morphAnimation) {
        morphAnimation.events.on("animationended", function () {
            zoomToCountry(polygon);
        })
    }
    else {
        zoomToCountry(polygon);
    }
}

function zoomToCountry(polygon) {
    var zoomAnimation = geo_dist.zoomToMapObject(polygon, 2.2, true);
    if (zoomAnimation) {
        zoomAnimation.events.on("animationended", function () {
            showPieChart(polygon);
        })
    }
    else {
        showPieChart(polygon);
    }
}


function showPieChart(polygon) {
    polygon.polygon.measure();
    var radius = polygon.polygon.measuredWidth / 2 * polygon.globalScale / geo_dist.seriesContainer.scale;
    pieChart.width = radius * 2;
    pieChart.height = radius * 2;
    pieChart.radius = radius;

    var centerPoint = am4core.utils.spritePointToSvg(polygon.polygon.centerPoint, polygon.polygon);
    centerPoint = am4core.utils.svgPointToSprite(centerPoint, geo_dist.seriesContainer);

    pieChart.x = centerPoint.x - radius;
    pieChart.y = centerPoint.y - radius;

    var fill = polygon.fill;
    var desaturated = fill.saturate(0.3);

    for (var i = 0; i < pieSeries.dataItems.length; i++) {
        var dataItem = pieSeries.dataItems.getIndex(i);
        if (i == 0) {
            dataItem.value = polygon.dataItem.dataContext.male;
            dataItem.slice.fill = am4core.color("#c4ddda");
        }
        else {
            dataItem.value = polygon.dataItem.dataContext.female;
            dataItem.slice.fill = am4core.color("#e8cdda");
        }
    }

    pieSeries.show();
    pieChart.show();

    countryLabel.text = "{name}:\n{female} Female\n{male} Male";
    countryLabel.dataItem = polygon.dataItem;
    countryLabel.fill = am4core.color("#333333");
    countryLabel.show();
}



////////SCHOLARLY WORK CHARTS - 1: ACTIVE HISTORIANS

// Create chart instance
var sw_col1 = am4core.create("sw-col1", am4charts.XYChart);

historian_data = {
    'normal': [
    {
        "range": "1820 - 1839",
        "male": 212,
        "female": 6
    },
    {
        "range": "1840 - 1859",
        "male": 353,
        "female": 7
    },
    {
        "range": "1860 - 1879",
        "male": 559,
        "female": 14
    },
    {
        "range": "1880 - 1899",
        "male": 881,
        "female": 44
    },
    {
        "range": "1900 - 1919",
        "male": 1315,
        "female": 123
    },
    {
        "range": "1920 - 1939",
        "male": 1704,
        "female": 361
    },
    {
        "range": "1940 - 1959",
        "male": 1936,
        "female": 640
    },
    {
        "range": "1960 - 1979",
        "male": 1798,
        "female": 787
    },
    {
        "range": "1980 - 1999",
        "male": 1342,
        "female": 716
    },
    {
        "range": "2000 - 2019",
        "male": 745,
        "female": 482
    },
    {
        "range": "2020 - 2039",
        "male": 77,
        "female": 73
    }
],
'proporional': [
    {
        "range": "1820 - 1839",
        "male": "97.25",
        "female": "2.75"
    },
    {
        "range": "1840 - 1859",
        "male": "98.06",
        "female": "1.94"
    },
    {
        "range": "1860 - 1879",
        "male": "97.56",
        "female": "2.44"
    },
    {
        "range": "1880 - 1899",
        "male": "95.24",
        "female": "4.76"
    },
    {
        "range": "1900 - 1919",
        "male": "91.45",
        "female": "8.55"
    },
    {
        "range": "1920 - 1939",
        "male": "82.52",
        "female": "17.48"
    },
    {
        "range": "1940 - 1959",
        "male": "75.16",
        "female": "24.84"
    },
    {
        "range": "1960 - 1979",
        "male": "69.56",
        "female": "30.44"
    },
    {
        "range": "1980 - 1999",
        "male": "65.21",
        "female": "34.79"
    },
    {
        "range": "2000 - 2019",
        "male": "60.72",
        "female": "39.28"
    },
    {
        "range": "2020 - 2039",
        "male": "51.33",
        "female": "48.67"
    }
]};

sw_col1.flag = 'normal'
sw_col1.data = historian_data['normal']

var categoryAxis = sw_col1.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "range";
categoryAxis.renderer.grid.template.location = 0;


var sw1_valueAxis = sw_col1.yAxes.push(new am4charts.ValueAxis());
sw1_valueAxis.renderer.inside = true;
sw1_valueAxis.renderer.labels.template.disabled = true;
sw1_valueAxis.min = 0;

sw_col1.colors.list = [
    am4core.color("#c4ddda"),
    am4core.color("#e8cdda")
];

// Create series
function createSeriesSW1(field, name) {
  
  // Set up series
  var series = sw_col1.series.push(new am4charts.ColumnSeries());
  series.name = name;
  series.dataFields.valueY = field;
  series.dataFields.categoryX = "range";
  series.sequencedInterpolation = true;
  
  // Make it stacked
  series.stacked = true;
  
  // Configure columns
  series.columns.template.width = am4core.percent(60);
  series.columns.template.tooltipText = "[bold]{name}[/]\n[font-size:14px]{categoryX}: {valueY}";
  
  // Add label
  var labelBullet = series.bullets.push(new am4charts.LabelBullet());
  labelBullet.label.text = "{valueY}";
  labelBullet.locationY = 0.5;
  labelBullet.label.hideOversized = true;
  
  return series;
}

createSeriesSW1("male", "Active Male Historians");
createSeriesSW1("female", "Active Female Historians");

// Legend
sw_col1.legend = new am4charts.Legend();


////////SCHOLARLY WORK CHARTS - 2: SCHOLARLY WORK

// Create chart instance
var sw_col2 = am4core.create("sw-col2", am4charts.XYChart);

scholarly_data = {
    'normal': [
    {
        "range": "1820 - 1839",
        "male": 2,
        "female": 0
    },
    {
        "range": "1840 - 1859",
        "male": 8,
        "female": 0
    },
    {
        "range": "1860 - 1879",
        "male": 106,
        "female": 0
    },
    {
        "range": "1880 - 1899",
        "male": 45,
        "female": 0
    },
    {
        "range": "1900 - 1919",
        "male": 436,
        "female": 7
    },
    {
        "range": "1920 - 1939",
        "male": 529,
        "female": 54
    },
    {
        "range": "1940 - 1959",
        "male": 655,
        "female": 194
    },
    {
        "range": "1960 - 1979",
        "male": 828,
        "female": 248
    },
    {
        "range": "1980 - 1999",
        "male": 874,
        "female": 272
    },
    {
        "range": "2000 - 2019",
        "male": 1334,
        "female": 492
    },
    {
        "range": "2020 - 2039",
        "male": 6,
        "female": 6
    }
],
'proporional': [
    {
        "range": "1820 - 1839",
        "male": "100.0",
        "female": "0.0"
    },
    {
        "range": "1840 - 1859",
        "male": "100.0",
        "female": "0.0"
    },
    {
        "range": "1860 - 1879",
        "male": "100.0",
        "female": "0.0"
    },
    {
        "range": "1880 - 1899",
        "male": "100.0",
        "female": "0.0"
    },
    {
        "range": "1900 - 1919",
        "male": "98.42",
        "female": "1.58"
    },
    {
        "range": "1920 - 1939",
        "male": "90.74",
        "female": "9.26"
    },
    {
        "range": "1940 - 1959",
        "male": "77.15",
        "female": "22.85"
    },
    {
        "range": "1960 - 1979",
        "male": "76.95",
        "female": "23.05"
    },
    {
        "range": "1980 - 1999",
        "male": "76.27",
        "female": "23.73"
    },
    {
        "range": "2000 - 2019",
        "male": "73.06",
        "female": "26.94"
    },
    {
        "range": "2020 - 2039",
        "male": "50.0",
        "female": "50.0"
    }
]};

sw_col2.flag = 'normal'
sw_col2.data = scholarly_data['normal']

var categoryAxis = sw_col2.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "range";
categoryAxis.renderer.grid.template.location = 0;


var sw2_valueAxis = sw_col2.yAxes.push(new am4charts.ValueAxis());
sw2_valueAxis.renderer.inside = true;
sw2_valueAxis.renderer.labels.template.disabled = true;
sw2_valueAxis.min = 0;

sw_col2.colors.list = [
    am4core.color("#c4ddda"),
    am4core.color("#e8cdda")
];

// Create series
function createSeriesSW2(field, name) {
  
  // Set up series
  var series = sw_col2.series.push(new am4charts.ColumnSeries());
  series.name = name;
  series.dataFields.valueY = field;
  series.dataFields.categoryX = "range";
  series.sequencedInterpolation = true;
  
  // Make it stacked
  series.stacked = true;
  
  // Configure columns
  series.columns.template.width = am4core.percent(60);
  series.columns.template.tooltipText = "[bold]{name}[/]\n[font-size:14px]{categoryX}: {valueY}";
  
  // Add label
  var labelBullet = series.bullets.push(new am4charts.LabelBullet());
  labelBullet.label.text = "{valueY}";
  labelBullet.locationY = 0.5;
  labelBullet.label.hideOversized = true;
  
  return series;
}

createSeriesSW2("male", "Scholarly Work by Male Historians");
createSeriesSW2("female", "Scholarly Work by Female Historians");

// Legend
sw_col2.legend = new am4charts.Legend();



function switch_sw_col1() {
    if (sw_col1.flag === 'normal') {
        sw_col1.data = historian_data['proporional'];
        sw_col1.flag = 'proporional';
        sw1_valueAxis.strictMinMax = true;
        sw_col2.data = scholarly_data['proporional'];
        sw_col2.flag = 'proporional';
        sw2_valueAxis.strictMinMax = true;
        sw_col1.appear();
        sw_col2.appear();
        document.getElementById("switch-btn").firstChild.data ="Switch to Normal View";
    }
    else if (sw_col1.flag === 'proporional') {
        sw_col1.data = historian_data['normal'];
        sw_col1.flag = 'normal';
        sw1_valueAxis.strictMinMax = false;
        sw_col2.data = scholarly_data['normal'];
        sw_col2.flag = 'normal';
        sw2_valueAxis.strictMinMax = false;
        sw_col1.appear();
        sw_col2.appear();
        document.getElementById("switch-btn").firstChild.data ="Switch to Proporional View";
    }
}

/////////// FEMALE OCCUPATION CHARTS ///////////

var female_occ_chart = am4core.create("alt-occ-female", am4charts.XYChart);

// Add data
female_occ_chart.data = [
    {
        "gender": "female",

        "occupation": "University teacher",

        "occupation": "university teacher",

        "number": 243
    },
    {
        "gender": "female",

        "occupation": "Writer",

        "occupation": "writer",

        "number": 185
    },
    {
        "gender": "female",

        "occupation": "Exhibition curator",

        "occupation": "exhibition curator",

        "number": 127
    },
    {
        "gender": "female",

        "occupation": "Curator",

        "occupation": "curator",

        "number": 114
    },
    {
        "gender": "female",

        "occupation": "Archaeologist",

        "occupation": "archaeologist",

        "number": 100
    },
    {
        "gender": "female",

        "occupation": "Historian",

        "occupation": "historian",

        "number": 92
    },
    {
        "gender": "female",

        "occupation": "Art critic",

        "occupation": "art critic",

        "number": 73
    },
    {
        "gender": "female",

        "occupation": "Architectural historian",

        "occupation": "architectural historian",

        "number": 53
    },
    {
        "gender": "female",

        "occupation": "Translator",

        "occupation": "translator",

        "number": 44
    },
    {
        "gender": "female",

        "occupation": "Journalist",

        "occupation": "journalist",

        "number": 41
    },
    // {
    //     "gender": "female",
    //     "occupation": "teacher",
    //     "number": 40
    // },
    // {
    //     "gender": "female",
    //     "occupation": "author",
    //     "number": 38
    // },
    // {
    //     "gender": "female",
    //     "occupation": "librarian",
    //     "number": 35
    // },
    // {
    //     "gender": "female",
    //     "occupation": "museum director",
    //     "number": 35
    // },
    // {
    //     "gender": "female",
    //     "occupation": "architect",
    //     "number": 30
    // }
];

female_occ_chart.colors.list = [
    am4core.color("#e8cdda")
]
// Create axes
var categoryAxis = female_occ_chart.yAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "occupation";
categoryAxis.numberFormatter.numberFormat = "#";
categoryAxis.renderer.inversed = true;

var  valueAxis = female_occ_chart.xAxes.push(new am4charts.ValueAxis()); 

// Create series
var female_occ_chart_series = female_occ_chart.series.push(new am4charts.ColumnSeries());
female_occ_chart_series.dataFields.valueX = "number";
female_occ_chart_series.dataFields.categoryY = "occupation";
female_occ_chart_series.name = "number";
female_occ_chart_series.columns.template.propertyFields.fill = am4core.color("#c4ddda");
female_occ_chart_series.columns.template.tooltipText = "{valueX} female {categoryY}s";
female_occ_chart_series.columns.template.column.stroke = am4core.color("#fff");
female_occ_chart_series.columns.template.column.strokeOpacity = 0.2;

/////////// MALE OCCUPATION CHARTS ///////////

var male_occ_chart = am4core.create("alt-occ-male", am4charts.XYChart);

// Add data
male_occ_chart.data = [
    {
        "gender": "male",

        "occupation": "University teacher",

        "occupation": "university teacher",

        "number": 1356
    },
    {
        "gender": "male",

        "occupation": "Archaeologist",

        "occupation": "archaeologist",

        "number": 759
    },
    {
        "gender": "male",

        "occupation": "Writer",

        "occupation": "writer",

        "number": 653
    },
    {
        "gender": "male",

        "occupation": "Architectural historian",

        "occupation": "architectural historian",

        "number": 458
    },
    {
        "gender": "male",

        "occupation": "Historian",

        "occupation": "historian",

        "number": 398
    },
    {
        "gender": "male",

        "occupation": "Architect",

        "occupation": "architect",

        "number": 344
    },
    {
        "gender": "male",

        "occupation": "Painter",

        "occupation": "painter",

        "number": 280
    },
    {
        "gender": "male",

        "occupation": "Art critic",

        "occupation": "art critic",

        "number": 280
    },
    {
        "gender": "male",

        "occupation": "Curator",

        "occupation": "curator",

        "number": 252
    },
    {
        "gender": "male",

        "occupation": "Exhibition curator",

        "occupation": "exhibition curator",

        "number": 207
    },
    // {
    //     "gender": "male",
    //     "occupation": "journalist",
    //     "number": 195
    // },
    // {
    //     "gender": "male",
    //     "occupation": "anthropologist",
    //     "number": 167
    // },
    // {
    //     "gender": "male",
    //     "occupation": "teacher",
    //     "number": 154
    // },
    // {
    //     "gender": "male",
    //     "occupation": "author",
    //     "number": 140
    // },
    // {
    //     "gender": "male",
    //     "occupation": "poet",
    //     "number": 137
    // }
];

male_occ_chart.colors.list = [
    am4core.color("#c4ddda")
]
// Create axes
var categoryAxis = male_occ_chart.yAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "occupation";
categoryAxis.numberFormatter.numberFormat = "#";
categoryAxis.renderer.inversed = true;

var  valueAxis = male_occ_chart.xAxes.push(new am4charts.ValueAxis()); 

// Create series
var male_occ_chart_series = male_occ_chart.series.push(new am4charts.ColumnSeries());
male_occ_chart_series.dataFields.valueX = "number";
male_occ_chart_series.dataFields.categoryY = "occupation";
male_occ_chart_series.name = "number";
male_occ_chart_series.columns.template.propertyFields.fill = am4core.color("#c4ddda");
male_occ_chart_series.columns.template.tooltipText = "{valueX} male {categoryY}s";
male_occ_chart_series.columns.template.column.stroke = am4core.color("#fff");
male_occ_chart_series.columns.template.column.strokeOpacity = 0.2;

/////////////// NESTED PIE CHART //////////////

var nested_pie = am4core.create("nested-pie", am4charts.PieChart);

// Let's cut a hole in our Pie chart the size of 40% the radius
nested_pie.innerRadius = am4core.percent(40);

// Add data
nested_pie.data = [
    {
        "institution": "German Archaeological Institute",
        "male": "428",
        "female": "49",
        "country": "Germany"
    },
    {
        "institution": "Acad\u00e9mie des Inscriptions et Belles-Lettres",
        "male": "93",
        "female": "4",
        "country": "France"
    },
    {
        "institution": "Royal Swedish Academy of Letters, History and Antiquities",
        "male": "87",
        "female": "12",
        "country": "Sweden"
    },
    {
        "institution": "Austrian Archaeological Institute",
        "male": "66",
        "female": "4",
        "country": "Austria"
    },
    {
        "institution": "Real Academia de Bellas Artes de San Fernando",
        "male": "53",
        "female": "3",
        "country": "Spain"
    },
    {
        "institution": "British Academy",
        "male": "51",
        "female": "7",
        "country": "United Kingdom"
    },
    {
        "institution": "Royal Netherlands Academy of Arts and Sciences",
        "male": "48",
        "female": "4",
        "country": "Netherlands"
    },
    {
        "institution": "Lincean Academy",
        "male": "54",
        "female": "3",
        "country": "Italy"
    },
    {
        "institution": "Hungarian Academy of Sciences",
        "male": "31",
        "female": "1",
        "country": "Hungary"
    }
];

// Add and configure Series
var instPieSeries = nested_pie.series.push(new am4charts.PieSeries());

instPieSeries.dataFields.value = "value";
instPieSeries.dataFields.category = "category";
instPieSeries.data = [{ value: 1838, category: "Male"}, { value: 448, category: "Female" }];
instPieSeries.colors.list = [
    am4core.color("#c4ddda"),
    am4core.color("#e8cdda")
]

instPieSeries.slices.template.stroke = am4core.color("#fff");
instPieSeries.slices.template.strokeWidth = 2;
instPieSeries.slices.template.strokeOpacity = 1;

// Disabling labels and ticks on inner circle
instPieSeries.labels.template.disabled = true;
instPieSeries.ticks.template.disabled = true;

// Disable sliding out of slices
instPieSeries.slices.template.states.getKey("hover").properties.shiftRadius = 0;
instPieSeries.slices.template.states.getKey("hover").properties.scale = 0.9;
instPieSeries.slices.template.tooltipText = "{category} Art Historians in the Country: {value}";

// Add second series
var instPieSeries2 = nested_pie.series.push(new am4charts.PieSeries());
instPieSeries2.colors.list = [
    am4core.color("#c4ddda"),
    am4core.color("#e8cdda")
]

instPieSeries2.dataFields.value = "value";
instPieSeries2.dataFields.category = "category";
instPieSeries2.data = [{ value: 428, category: "Male" }, { value: 49, category: "Female" }];
instPieSeries2.slices.template.stroke = am4core.color("#fff");
instPieSeries2.slices.template.strokeWidth = 2;
instPieSeries2.slices.template.strokeOpacity = 1;
instPieSeries2.slices.template.states.getKey("hover").properties.shiftRadius = 0;
instPieSeries2.slices.template.states.getKey("hover").properties.scale = 1.1;
instPieSeries2.slices.template.tooltipText = "{category} Art Historians in the Institution: {value}";
instPieSeries2.labels.template.text = "{category} Art Historians in the Institution: {value}";

var instLabel = nested_pie.chartContainer.createChild(am4core.Label);
instLabel.text = "German\nArchaeological\nInstitute";
instLabel.fill = am4core.color("#333333");
instLabel.fontSize = 20;

instLabel.hiddenState.properties.dy = 1000;
instLabel.defaultState.properties.dy = 0;
instLabel.valign = "middle";
instLabel.align = "left";
instLabel.marginLeft = 50;
instLabel.background = new am4core.RoundedRectangle();
instLabel.background.fill = am4core.color("#ffffff")
instLabel.hide(0);
instLabel.show();

function inst_countries() {
    var country = document.getElementById("inst-countries").value;
    for (var i = 0; i < instPieSeries.dataItems.length; i++) {
        var innerDataItem = instPieSeries.dataItems.getIndex(i);
        var outerDataItem = instPieSeries2.dataItems.getIndex(i);
        var inst, loc;
        for (var j = 0; j < nested_pie.data.length; j++) {
            if(nested_pie.data[j]["country"] == country) {
                inst = nested_pie.data[j]
            }
        }
        for (var j = 0; j < map_data.length; j++) {
            if(map_data[j]["name"] == country) {
                loc = map_data[j]
            }
        }

        instLabel.text = inst["institution"].replaceAll(" ", "\n")
        if (i == 0) {
            innerDataItem.value = loc["male"];
            outerDataItem.value = inst["male"];
        }
        else {
            innerDataItem.value = loc["female"];
            outerDataItem.value = inst["female"];
        }
    }
}






