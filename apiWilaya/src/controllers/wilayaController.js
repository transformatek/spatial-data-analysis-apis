const turf = require('@turf/turf');
const fs = require('fs');

exports.getWilaya = (req, res) => {

    try {

        const wilayasGeoJSON = fs.readFileSync('./data/wilayas_58.geojson');
        const wilayasFeatures = JSON.parse(wilayasGeoJSON).features;

        const lat = Number(req.query.lat)
        const long = Number(req.query.long)
        const point = turf.point([long, lat], {});

        for (let i = 0; i < wilayasFeatures.length; i++) {
            const isInside = turf.inside(point, wilayasFeatures[i]);
            if (isInside) {
                res.status(200).json({
                    status: 'Success',
                    data: {
                        "wilaya": wilayasFeatures[i].properties
                    },
                });
            }
        }
        res.status(404).json({
            status: 'Fail',
            message: "Not found"
        });

    } catch (error) {
        res.status(400).json({
            status: 'Fail',
            message: error.message
        });
    }
}