am4core.ready(function() {

// Themes begin
am4core.useTheme(am4themes_spiritedaway);
am4core.useTheme(am4themes_animated);
// Themes end

// Create chart instance
var chart = am4core.create("chartdiv", am4charts.XYChart);

// Add data
chart.data = [ 
            {
            "Pjname": "รวม (ทุกโครงการ)",
            "recieve": 1,
            "แผนจัดหาพัสดุ": 2000, //ต้องเป็นยอดเต็มแล้วลบค่าจำนวนของrecieve
            "เปิด PR แล้ว": 1000,
            "เปิด PO แล้ว": 8000,
            "พัสดุที่ใช้ไป": 6000,
            "แผนการใช้พัสดุ": 9000,
            "พัสดุคงคลัง": 1000
            
          }, {
            "Pjname": "คพจ.2",
            "recieve": 1200,
            "แผนจัดหาพัสดุ": 1000,
            "เปิด PR แล้ว": 2200,
            "เปิด PO แล้ว": 1800,
            "พัสดุที่ใช้ไป": 300,
            "แผนการใช้พัสดุ": 2200,
            "พัสดุคงคลัง": 200
          }, {
            "Pjname": "คพญ.2",
            "recieve": 250,
            "แผนจัดหาพัสดุ": 350,
            "เปิด PR แล้ว": 350,
            "เปิด PO แล้ว": 300,
            "พัสดุที่ใช้ไป": 200,
            "แผนการใช้พัสดุ": 350,
            "พัสดุคงคลัง": 50
          }, {
            "Pjname": "คฟม.2",
            "recieve": 1200,
            "แผนจัดหาพัสดุ": 2200,
            "เปิด PR แล้ว": 2200,
            "เปิด PO แล้ว": 1800,
            "พัสดุที่ใช้ไป": 300,
            "แผนการใช้พัสดุ": 2200,
            "พัสดุคงคลัง": 200
          }, {
            "Pjname": "คพจ.1",
            "recieve": 250,
            "แผนจัดหาพัสดุ": 350,
            "เปิด PR แล้ว": 350,
            "เปิด PO แล้ว": 300,
            "พัสดุที่ใช้ไป": 200,
            "แผนการใช้พัสดุ": 350,
            "พัสดุคงคลัง": 50
          }, {
            "Pjname": "คพญ.1",
            "recieve": 1200,
            "แผนจัดหาพัสดุ": 2200,
            "เปิด PR แล้ว": 2200,
            "เปิด PO แล้ว": 1800,
            "พัสดุที่ใช้ไป": 300,
            "แผนการใช้พัสดุ": 2200,
            "พัสดุคงคลัง": 200
          }, {
            "Pjname": "ผู้ใช้ไฟ",
            "recieve": 250,
            "แผนจัดหาพัสดุ": 350,
            "เปิด PR แล้ว": 350,
            "เปิด PO แล้ว": 300,
            "พัสดุที่ใช้ไป": 200,
            "แผนการใช้พัสดุ": 350,
            "พัสดุคงคลัง": 50
          } ];

var categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis())
categoryAxis.dataFields.category = 'Pjname'
categoryAxis.renderer.inversed = true
categoryAxis.renderer.grid.template.location = 0
// categoryAxis.renderer.cellStartLocation = getCellStartLocation(_.size(data))
// categoryAxis.renderer.cellEndLocation = getCellEndLocation(_.size(data))
categoryAxis.renderer.minGridDistance = 10
categoryAxis.strictMinMax = true
categoryAxis.renderer.grid.template.disabled = true
categoryAxis.renderer.labels.template.background = new am4core.RoundedRectangle()
categoryAxis.renderer.labels.template.dx = -5
categoryAxis.renderer.labels.template.background.cornerRadius(
16,
16,
16,
16
)
categoryAxis.renderer.labels.template.textAlign = 'end'
categoryAxis.renderer.labels.template.padding(4, 16, 4, 16)
categoryAxis.renderer.labels.template.fontSize = 14

// categoryAxis.renderer.labels.template.background.adapter.add('fill',am4core.color('#FF6565'))

var valueAxis = chart.xAxes.push(new am4charts.ValueAxis())
//valueAxis.title.text = 'Local country offices'
valueAxis.title.fontWeight = 'bold'
valueAxis.title.fontSize = 16
valueAxis.title.marginTop = 15
valueAxis.title.marginBottom = 15
valueAxis.renderer.opposite = false
valueAxis.renderer.labels.template.fontSize = 16

// Create series
function createSeries(field, name, stacked, TTT) {
    var series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.valueX = field;
    series.dataFields.categoryY = "Pjname";
    series.name = name;
    series.columns.template.tooltipText = TTT;
    series.stacked = stacked;
    series.columns.template.width = am4core.percent(90);
    series.sequencedInterpolation = true
    
    
    var valueLabel = series.bullets.push(new am4charts.LabelBullet())
    valueLabel.label.text = "{newValueX.formatNumber('#.a')}"
    valueLabel.label.fill = am4core.color('#7f3f90')
    valueLabel.label.hideOversized = false
    valueLabel.label.truncate = false
    valueLabel.label.fontSize = 12

    series.fill = '#7F3F90'
    valueLabel.label.horizontalCenter = 'left'
    valueLabel.label.dx = 9

    if(field === 'recieve'){
        series.fill = '#D3B3DB'
    }
    else if(field === 'เปิด PO แล้ว'){
        series.fill = '#64CFF1'
    }
    else if(field === 'เปิด PR แล้ว'){
        series.fill = '#464BB8'
    }
    else if(field === 'พัสดุที่ใช้ไป'){
        series.fill = '#66A062'
    }
    else if(field === 'แผนการใช้พัสดุ'){
        series.fill = '#454548'
    }
    else if(field === 'พัสดุคงคลัง'){
        series.fill = '#FFC428'
    }
    else if(field === 'ความต้องการพัสดุ'){
        series.fill = '#FFC428'
    }
}

createSeries("recieve", "พัศดุที่ส่งมอบแล้ว", false, "{name}: [bold]{valueX}[/]");
createSeries("แผนจัดหาพัสดุ", "แผนจัดหาพัสดุ", true, "{name}คงเหลือ: [bold]{valueX}[/]");
createSeries("เปิด PO แล้ว", "เปิด PO แล้ว", false, "{name}: [bold]{valueX}[/]");
createSeries("เปิด PR แล้ว", "เปิด PR แล้ว", true, "{name}คงเหลือ: [bold]{valueX}[/]");
createSeries("พัสดุที่ใช้ไป", "พัสดุที่ใช้ไป", false, "{name}: [bold]{valueX}[/]");
createSeries("แผนการใช้พัสดุ", "แผนการใช้พัสดุ", true, "{name}คงเหลือ: [bold]{valueX}[/]");
createSeries("พัสดุคงคลัง", "พัสดุคงคลัง", false, "{name}: [bold]{valueX}[/]");
createSeries("ความต้องการพัสดุ", "ความต้องการพัสดุ", false, "{name}: [bold]{valueX}[/]");

// Add legend
chart.legend = new am4charts.Legend();

}); // end am4core.ready()