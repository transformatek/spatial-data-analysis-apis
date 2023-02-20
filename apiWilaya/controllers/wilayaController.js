const turf = require('@turf/turf');
const fs = require('fs');
let features = [];


exports.getWilaya = (req, res) => {
    let data = fs.readFileSync('./data/wilayas_58.geojson');
    const lat = req.body.lat;
    const long = req.body.long;
    const point = turf.point([lat, long], {});
    features = JSON.parse(data).features;
    var found = false,
        i = 0;
    while (found != "1") {
        const isInside = turf.inside(point, features[i]);
        if (isInside) {
            var wilaya = features[i].properties;
            found = true;
        }
        i++;
    }
    res.status(200).json({
        status: 'success',
        data: {
            wilaya
        },
    });
}