
import * as d3 from 'd3';

let margin = {top: 10, right: 30, bottom: 40, left: 100},
    width = 460 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;


export default class D3Chart1 {
	constructor(element, dataLemma) {

        let data = dataLemma[1]

				data.sort(function (a, b) {
    if (a["n"] < b["n"]) {
        return 1;
    }
    if (b["n"] < a["n"]) {
        return -1;
    }
    return 0;
        });

        if (data.length > 51) {
            data = data.slice(1, 50)

        }

		const svg = d3.select(element)
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

		let lengths = [];
		for (let n of data) {
			lengths.push(n['n'])
		}
		let max = Math.max(...lengths);

		// Add X axis
let x = d3.scaleLinear()
  .domain([0, max + 1])
  .range([ 0, width]);
svg.append("g")
  .attr("transform", "translate(0," + height + ")")
  .call(d3.axisBottom(x))
  .selectAll("text")
    .attr("transform", "translate(-10,0)rotate(-45)")
    .style("text-anchor", "end");

// Y axis
let y = d3.scaleBand()
  .range([ 0, height ])
  .domain(data.map(function(d) {
		  return d.lemma
  }))
  .padding(1);
svg.append("g")
  .call(d3.axisLeft(y))


// Lines
svg.selectAll("myline")
  .data(data)
  .enter()
  .append("line")
    .attr("x1", function(d) { return x(d.n); })
    .attr("x2", x(0))
    .attr("y1", function(d) { return y(d.lemma); })
    .attr("y2", function(d) { return y(d.lemma); })
    .attr("stroke", "grey")



		svg.selectAll("mycircle")
  .data(data)
  .enter()
  .append("circle")
    .attr("cx", function(d) { return x(d.n); })
    .attr("cy", function(d) { return y(d.lemma); })
    .attr("r", "5")
    .style("fill", "#BB4A4A")
    .attr("stroke", "black")




	}
}