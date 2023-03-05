const turf = require('@turf/turf');
const fs = require('fs');

exports.getWilaya = (req, res) => {

    try {

        let data = fs.readFileSync('./data/wilayas_58.geojson');
        var features = JSON.parse(data).features;

        const lat = req.query.lat * 1;
        const long = req.query.long * 1;

        if (lat == 0) {
            throw new Error("Incorrect Coordinates");
        } else {
            const point = turf.point([long, lat], {});
            let wilaya;
            let found = false;
            let i = 0;
            while (found != "1") {
                const isInside = turf.inside(point, features[i]);
                if (isInside) {
                    wilaya = features[i].properties;
                    found = true;
                }
                i++;
            }
            res.status(200).json({
                status: 'Success',
                data: {
                    wilaya
                },
            });
        }
    } catch (error) {
        res.status(400).json({
            status: 'Fail',
            message: error.message
        });
    }
}