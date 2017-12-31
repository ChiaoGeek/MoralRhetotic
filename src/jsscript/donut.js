var donut = function (id, d3, data, name, width, height, d3WordCloud) {

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

  var svgContainer = d3.select(id)
       .append("svg")
         .attr("width", width)
         .attr("height", height)
         .style("margin-left", "60px")

  function render () {
    d3.select(id).select('g').remove()

    var arc = d3.arc()
      .outerRadius(210)
      .innerRadius(160)

    var group = svgContainer.append('g')
      .attr("transform", "translate(" + width/2 +", " + height/2 + ")")

    var arcs = d3.pie()(data)

    arcs.forEach(function (d, i) {
      group.append('path')
        .attr('fill', color(i))
        .transition()
        .duration(2000)
        .attrTween("d", function() {
            var start = {startAngle : 0, endAngle : 0}
            var interpolate = d3.interpolate(start, d)
            return function (t) {
              return arc(interpolate(t))
            }
        })
        .style('cursor', 'pointer')


        group.append('text')
          .style("font-size", "13px")
          .style("font-family", "simsun")
          .style("fill", "white")
          .style("font-weight", "900")
          .attr("text-anchor","middle")
          .attr("transform", function () {
            // console.log(arc.centroid(d))
            return  "translate(" + arc.centroid(d) + ")"
          })
          .text(name[i])
          .style('cursor', 'pointer')

    })
    group.selectAll('path')
      .on("mouseover", function () {
        d3.select(this)
          // .style('fill', 'black')
          .style('stroke', 'yellow')
          .style('stroke-width', '4')

      })
    group.selectAll('path')
      .on("mouseout", function (d, i) {
        d3.select(this)
          // .style('fill', color(i))
          .style('stroke', 'none')

          // .style('stroke-width', '3')
      })

      group.selectAll('path')
        .on("click", function () {
            d3.selectAll('path')
              .style('opacity', '.35')

              d3.select(this)
                .style('opacity', '1')

            removeWordCloud()
            wordcloud ()
        })
  }
  render()

  // console.log(svgContainer)

  function  wordcloud () {
    var g = svgContainer.append("g")
        // .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
      var data = []

      for (var i = 0; i < 150; i++) {
          data.push({"name": "keyword"+i+"", "value": Math.ceil( 10 * Math.random())})
        }
        var valueArray = []
        for (var i = 0; i < data.length; i++) {
           valueArray.push(data[i].value)
        }
        // var color = d3.scaleOrdinal(d3.schemeCategory20);
        // var categories = d3.keys(d3.nest().key(function(d) { return d.State; }).map(data));
        var fontSize = d3.scalePow().exponent(5).domain([0,d3.max(valueArray)]).range([12,14]);


      var layout = d3WordCloud()
            .size([280, 250])
            .timeInterval(20)
            .words(data)
            .rotate(function(d) { return 0; })
            .fontSize(function(d,i) { return fontSize(d.value); })
            //.fontStyle(function(d,i) { return fontSyle(Math.random()); })
            .fontWeight(["bold"])
            .text(function(d) { return d.name; })
            .spiral("archimedean") // "archimedean" or "rectangular"
            .on("end", draw)
            .start();

         var wordcloud = g.append("g")
            .attr('class','wordcloud')
            .attr("transform", "translate(" + width/2.5 + "," + height/2.5 + ")")


          wordcloud.transition()           // apply a transition
            .duration(1000)
            .attr("transform", "translate(" + width/2 + "," + height/2 + ")")



      function draw(words) {

          wordcloud.selectAll("text")
              .data(words)
              .enter().append("text")
              .attr('class','word')
              .style("fill", function(d, i) { return color(i); })
              .style("font-size", function(d) { return d.size + "px"; })
              .style("font-family", function(d) { return d.font; })
              .attr("text-anchor", "middle")
              .attr("transform", function(d) { return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")"; })
              .text(function(d) { return d.text; })
              .style("cursor", "pointer")
              .on("click", function (d) {
                window.alert(d.name);
              })
      };

  }

  function removeWordCloud() {
    d3.select(".wordcloud").remove()
  }


    wordcloud ();


}
export default donut
