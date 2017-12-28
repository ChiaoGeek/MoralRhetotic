var comparisionbar = function (id, d3) {

  var width = 350
  var height = 400
  var bar_height = 30
  var bar_margin = 10



  var data = [
    {"name": "Care", "value": 20 },
    {"name": "Fairness", "value": 18},
    {"name": "Loyalty", "value": 10},
    {"name": "Authority", "value": 7},
    {"name": "Sanctity", "value": 5},
  ]

  var value = []
  var name = []
  for (var i = 0; i < data.length; i++) {
    value.push(data[i].value)
    name.push(data[i].name)
  }

  var linear = d3.scaleLinear()
    .domain([0, d3.max(value)])
    .range([0, width])


  var svg_bar = d3.select(id).append("svg")
    .attr("width", width)
    .attr("height", height)
    .attr("class", "bar-svg")

  var svg_rect = svg_bar.append('g')
    .attr("class", "svg-g-rect")

  var svg_text = svg_bar.append('g')
    .attr("class", "svg-g-text")

  var svg_number = svg_bar.append('g')
    .attr("class", "svg-g-number")

  svg_rect.selectAll("rect")
    .data(data)
    .enter()
    .append("rect")
    .attr("class", "rect-class")
    .attr("height", bar_height)
    .attr("width", function (d, i) {
        return linear(d.value)
    })
    .attr('fill', '#57d2f7')
    .attr('y', function (d, i) {
        return  i * (bar_height + bar_margin)
    })
    .attr('x', 0)
    .attr("style", "cursor: pointer")

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
      return 8
    })
    .attr('dy', function (d, i) {
      return i * (bar_height + bar_margin) + 18
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
        return i * (bar_height + bar_margin) + 18
      })
      .attr('fill', '#393939')
      .text(function (d) {
        return d.value
      })



// end
}

export default comparisionbar
