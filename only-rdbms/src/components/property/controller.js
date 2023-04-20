const property = require("../property/model");
const Property = new property();

exports.getAllProperty = async (req, res) => {
    try {
        const result = await Property.getAllProperty();
        res.render("property/views/property-search", { properties: result })
    } catch (err) {
        res.json(err.message);
    }
}

exports.getPropertyDetail = async (req, res) => {
    try {
        const result = await Property.getPropertyDetail();
        res.render("property/views/property-detail", { properties: result })
    } catch (err) {
        res.json(err.message);
    }
}