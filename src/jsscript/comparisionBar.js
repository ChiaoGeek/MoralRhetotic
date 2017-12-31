var comparisionbar = function (id, d3) {

  var width = 370
  var height = 400
  var bar_height = 18
  var bar_margin = 50

  var color = function (i) {
    var colorArray = [
      "rgb(96,	162,	248	)",
      "rgb(144,	138,	235	)",
      "rgb(247,	205,	85	)",
      "rgb(237,	130,	142	)",
      "rgb(149,	211,	143	)"
    ]
    return colorArray[i]
  }

  var data = [
    {"name": "Care", "value": 0.8 },
    {"name": "Fairness", "value": 0.7},
    {"name": "Loyalty", "value": 0.6},
    {"name": "Authority", "value": 0.3},
    {"name": "Sanctity", "value": 0.2},
  ]

  var value = []
  var name = []
  for (var i = 0; i < data.length; i++) {
    value.push(data[i].value)
    name.push(data[i].name)
  }

  var linear = d3.scaleLinear()
    .domain([0, 1])
    .range([0, width])


  var svg_bar = d3.select(id).append("svg")
    .attr("width", width)
    .attr("height", height)
    .attr("class", "bar-svg")
    .attr("style", "margin-left:55px;")

  var svg_rect_background = svg_bar.append('g')
    .attr("class", "svg-g-rect-background")

  var svg_rect = svg_bar.append('g')
    .attr("class", "svg-g-rect")

  var svg_text = svg_bar.append('g')
    .attr("class", "svg-g-text")

  var svg_number = svg_bar.append('g')
    .attr("class", "svg-g-number")

  var svg_circle = svg_bar.append('g')
    .attr("class", "svg-g-circle")


  // rect background
  svg_rect_background.selectAll("rect")
    .data(data)
    .enter()
    .append("rect")
    .attr("class", "rect-class-background")
    .attr("height", bar_height)
    .attr("width", function (d, i) {
        return linear(1)
    })
    .attr('fill', "rgb(228,241,253)")
    .attr('y', function (d, i) {
        return  (i + 1) * (bar_height + bar_margin)
    })
    .attr('x', 0)
    .attr("style", "cursor: pointer")
    .attr("rx", bar_height/2)
    .attr("ry", bar_height/2)

  // rect
  svg_rect.selectAll("rect")
    .data(data)
    .enter()
    .append("rect")
    .transition()
    .duration(500)
    .attr("class", "rect-class")
    .attr("height", bar_height)
    .attr("width", function (d, i) {
        return linear(d.value)
    })
    .attr('fill', function (d, i) {
        return color(i)
    })
    .attr('y', function (d, i) {
        return  (i + 1) * (bar_height + bar_margin)
    })
    .attr('x', 0)
    .attr("style", "cursor: pointer;")
    .attr("rx", bar_height/2)
    .attr("ry", bar_height/2)





  d3.selectAll('.rect-class')
    .on('mouseover', function (d, i) {
      d3.select(this)
        .attr('style', 'stroke-width:2; stroke:yellow')

    })
    .on('mouseout', function (d, i) {
      d3.select(this).attr('style', '')
    })

  svg_text.selectAll("text")
    .data(data)
    .enter()
    .append("text")
    .attr('style', 'font-size:13px;font-weight:400;')
    .transition()
    .duration(500)
    .attr('x', function (d, i) {
      return 0
    })
    .attr('y', function (d, i) {
      return 0
    })
    .attr('dx', function () {
      return 25
    })
    .attr('dy', function (d, i) {
      return i * (bar_height + bar_margin) + 58
    })
    .attr('fill', '#393939')
    .text(function (d) {
      return d.name
    })


    svg_number.selectAll("text")
      .data(data)
      .enter()
      .append("text")
      .attr('style', 'font-size:13px;font-weight:400;')
      .transition()
      .duration(500)
      .attr('x', function (d, i) {
        return 0
      })
      .attr('y', function (d, i) {
        return 0
      })
      .attr('dx', function () {
        return (width - 28)
      })
      .attr('dy', function (d, i) {
        return i * (bar_height + bar_margin) + 58
      })
      .attr('fill', '#393939')
      .text(function (d) {
        return d.value
      })

    svg_circle.selectAll("circle")
      .data(data)
      .enter()
      .append("circle")
      .attr("r", "5")
      .attr("cx", "14")
      .attr("fill", "white")
      .attr("stroke", function (d, i) {
          return color(i)
      })
      .attr("stroke-width", "3")
      .attr("cy", function (d, i) {
        return i * (bar_height + bar_margin) + 54
      })



// end
}

export default comparisionbar
