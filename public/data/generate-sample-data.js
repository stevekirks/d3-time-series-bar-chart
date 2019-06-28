// `node generate-sample-data.js`

const fs = require('fs');

function getRandomInt(max) {
    var result = Math.floor(Math.random() * Math.floor(max));
    return result == 0 ? getRandomInt(max) : result;
}

var timeSeriesData = [];
var d1Rand = getRandomInt(5);
var d2Rand = getRandomInt(5);
var d3Rand = getRandomInt(5);
var d4Rand = getRandomInt(5);
for (var i = 0; i<500; i++) {
    timeSeriesData.push({
        "timestamp": Math.floor(i > 0 ? i / 60 : 0) + ":" + (i % 60 + "").padStart(2, '0'),
        "dataset": [{
            "name": "d1",
            "value": Math.floor(Math.abs(Math.sin(i * (Math.PI / 180))) * i * d1Rand)
        },{
            "name": "d2",
            "value": i * d2Rand
        },{
            "name": "d3",
            "value": i < 250 ? i * d3Rand : 250 * d3Rand + ((250 - i) * d3Rand)
        },{
            "name": "d4",
            "value": i * d4Rand
        }]
    });
}

const fl = __dirname + "\\sample-data.json";
fs.writeFile(fl, JSON.stringify(timeSeriesData, null, 2), function(err) {
    if(err) {
        return console.log(err);
    }

    console.log(fl + " saved");
}); 