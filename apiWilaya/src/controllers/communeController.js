const turf = require('@turf/turf');
const fs = require('fs');

exports.getCommune = (req, res) => {

    try {
        const communesGeoJSON = fs.readFileSync('./data/communes_58.geojson');
        const communesFeatures = JSON.parse(communesGeoJSON).features;

        const lat = Number(req.query.lat)
        const long = Number(req.query.long)
        const point = turf.point([long, lat], {});

        for (let i = 0; i < communesFeatures.length; i++) {
            const isInside = turf.inside(point, communesFeatures[i]);
            if (isInside) {
                res.status(200).json({
                    status: 'Success',
                    data: {
                        "commune": communesFeatures[i].properties
                    },
                });
                break;
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