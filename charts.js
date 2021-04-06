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
        "name": "Kingdom of the Netherlands",
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
]
am4core.ready(function() {

// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

var chart = am4core.create("map-dist", am4maps.MapChart);

try {
    chart.geodata = am4geodata_worldHigh;
}
catch (e) {
    chart.raiseCriticalError(new Error("Map geodata could not be loaded. Please download the latest <a href=\"https://www.amcharts.com/download/download-v4/\">amcharts geodata</a> and extract its contents into the same directory as your amCharts files."));
}

chart.projection = new am4maps.projections.Mercator();

// zoomout on background click
chart.chartContainer.background.events.on("hit", function () { zoomOut() });

var colorSet = new am4core.ColorSet();
var morphedPolygon;

// map polygon series (countries)
var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());
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
polygonTemplate.fillOpacity = 0.5;
polygonTemplate.tooltipText = "{name}";

// desaturate filter for countries
var desaturateFilter = new am4core.DesaturateFilter();
desaturateFilter.saturation = 0.25;
polygonTemplate.filters.push(desaturateFilter);

// take a color from color set
polygonTemplate.adapter.add("fill", function (fill, target) {
    return am4core.color("#333333");
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
var pieChart = chart.seriesContainer.createChild(am4charts.PieChart);
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
var countryLabel = chart.chartContainer.createChild(am4core.Label);
countryLabel.text = "Select a country";
countryLabel.fill = am4core.color("#333333");
countryLabel.fontSize = 40;

countryLabel.hiddenState.properties.dy = 1000;
countryLabel.defaultState.properties.dy = 0;
countryLabel.valign = "middle";
countryLabel.align = "right";
countryLabel.marginRight = 50;
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
    var zoomAnimation = chart.zoomToMapObject(polygon, 2.2, true);
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
    var radius = polygon.polygon.measuredWidth / 2 * polygon.globalScale / chart.seriesContainer.scale;
    pieChart.width = radius * 2;
    pieChart.height = radius * 2;
    pieChart.radius = radius;

    var centerPoint = am4core.utils.spritePointToSvg(polygon.polygon.centerPoint, polygon.polygon);
    centerPoint = am4core.utils.svgPointToSprite(centerPoint, chart.seriesContainer);

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


});