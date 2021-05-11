$.ajaxSetup({
    async: false
});
var json_data;
$.getJSON("source/data.json", function(json){
    json_data = json;
});

//---------- 100 PICTOGRAMS CHARTS---------

var json_percList = json_data["historians_prop"];

var json_artchives_tot = json_data["artchives_genders"];


$( document ).ready(function() {
	 var femaleNumber = json_percList["female"]
     $('.line3').children().slice(femaleNumber*2).attr('src','svg/matrioska2.svg'); // green
});

$(window).on('load', function () {
	var femaleNumber_string = json_percList["female"].toString()
	var percentage_string = femaleNumber_string + "%"
      $('.percentage-number').text(percentage_string)
 });
 

$( document ).ready(function() {
	 var femaleNumber = json_artchives_tot["female"]
     $('.line4').children().slice(femaleNumber*2).attr('src','svg/matrioska2.svg'); // green
});


//---------- COUNTER FILL --------

var json_artHistorians = json_data["historians"];

var json_artchives_classes = json_data["artchives_stats"];

var totCount = json_artHistorians["tot"]
var menCount = json_artHistorians["male"]
var womenCount = json_artHistorians["female"]
var nonBinaryCount = json_artHistorians["non-binary"]

$(window).on('load', function () {
      $('.count-tot').text(totCount)
      $('.count-men').text(menCount)
      $('.count-women').text(womenCount)
      $('.count-non-binary').text(nonBinaryCount)
 });
 
var totCollections = json_artchives_classes["collections"]
var totCollectors = json_artchives_classes["collectors"]
var totKeepers  = json_artchives_classes["keepers"]
 
 $(window).on('load', function () {
      $('.count-collections').text(totCollections)
      $('.count-collectors').text(totCollectors)
      $('.count-keepers').text(totKeepers)
 });
 
 
// ----------- COUNTER ANIMATION-----------------

$(window).on('scroll.scroll2',function() {
    if (checkVisible($('.count-section1'))) { 
      $('.count-tot').text(totCount)
      $('.count-men').text(menCount)
      $('.count-women').text(womenCount)
      $('.count-non-binary').text(nonBinaryCount)
	$(".count").each(function () {
  $(this)
    .prop("Counter", 0)
    .animate(
      {
        Counter: $(this).text()
      },
      {
        duration: 1600,
        easing: "swing",
        step: function (now) {
          $(this).text(Math.ceil(now));
        }
      }
    );
});
        $(window).off('scroll.scroll2');
    } else {
         // do nothing
    }
});




$(window).on('scroll.scroll7',function() {
    if (checkVisible($('.count-section2'))) { 
      $('.count-tot').text(totCount)
      $('.count-men').text(menCount)
      $('.count-women').text(womenCount)
      $('.count-non-binary').text(nonBinaryCount)
		$('.count-section-text').delay(1000).fadeIn(2000);
		$(".count2").each(function () {
  $(this)
    .prop("Counter", 0)
    .animate(
      {
        Counter: $(this).text()
      },
      {
        duration: 3000,
        easing: "swing",
        step: function (now) {
          $(this).text(Math.ceil(now));
        }
      }
    );
});
        $(window).off('scroll.scroll7');
    } else {
         // do nothing
    }
});

$(window).on('scroll.scroll39',function() {
    if (checkVisible($('.count-section3'))) { 
		$('.count-section-text3').delay(1000).fadeTo(2000,1);
		$('.statement-bold').delay(2500).fadeTo(2000,1);
	  $('.count-collections').text(totCollections)
      $('.count-collectors').text(totCollectors)
      $('.count-keepers').text(totKeepers)
		$(".count3").each(function () {
  $(this)
    .prop("Counter", 0)
    .animate(
      {
        Counter: $(this).text()
      },
      {
        duration: 3000,
        easing: "swing",
        step: function (now) {
          $(this).text(Math.ceil(now));
        }
      }
    );
});
        $(window).off('scroll.scroll39');
    } else {
         // do nothing
    }
});
 

//---------- map chart---------

var map_data = json_data['geo_data'];


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
    'normal': json_data['active_normal'],
    'proporional': json_data['active_prop']
};

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
    'normal': json_data['scholarly_normal'],
    'proporional': json_data['scholarly_prop']
};

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
        btns = document.getElementsByClassName("switch-btn")
        for (var i = 0; i < btns.length; i++) {
           btns.item(i).firstChild.data ="Switch to Normal View";
        }
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
        btns = document.getElementsByClassName("switch-btn")
        for (var i = 0; i < btns.length; i++) {
           btns.item(i).firstChild.data ="Switch to Proporional View";
        }
    }
}

/////////// FEMALE OCCUPATION CHARTS ///////////

var female_occ_chart = am4core.create("alt-occ-female", am4charts.XYChart);

// Add data
female_occ_chart.data = json_data['occ_data_female'];

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
male_occ_chart.data = json_data['occ_data_male'];

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
nested_pie.data = json_data['inst_data'];

// Add and configure Series
var instPieSeries = nested_pie.series.push(new am4charts.PieSeries());

instPieSeries.dataFields.value = "value";
instPieSeries.dataFields.category = "category";
instPieSeries.data = [{ value: get_country_nums()['male'], category: "Male"}, { value: get_country_nums()['female'], category: "Female" }];
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
instPieSeries2.data = [{ value: get_inst_nums()['male'], category: "Male" }, { value: get_inst_nums()['female'], category: "Female" }];
instPieSeries2.slices.template.stroke = am4core.color("#fff");
instPieSeries2.slices.template.strokeWidth = 2;
instPieSeries2.slices.template.strokeOpacity = 1;
instPieSeries2.slices.template.states.getKey("hover").properties.shiftRadius = 0;
instPieSeries2.slices.template.states.getKey("hover").properties.scale = 1.1;
instPieSeries2.slices.template.tooltipText = "{category} Art Historians in the Institution: {value}";
instPieSeries2.labels.template.text = "{category} Art Historians in the Institution: {value}";

var instLabel = nested_pie.chartContainer.createChild(am4core.Label);
instLabel.text = get_inst_nums()["institution"].replaceAll(" ", "\n");
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
        var inst = get_inst_nums();
        var loc = get_country_nums();

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

function get_country_nums() {
    var country = document.getElementById("inst-countries").value;
    var loc;
    for (var j = 0; j < map_data.length; j++) {
            if(map_data[j]["name"] == country) {
                loc = map_data[j]
            }
        }
    return loc;
}

function get_inst_nums() {
    var country = document.getElementById("inst-countries").value;
    var inst;
    for (var j = 0; j < nested_pie.data.length; j++) {
            if(nested_pie.data[j]["country"] == country) {
                inst = nested_pie.data[j]
            }
        }
    return inst;
}






