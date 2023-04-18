const property = require("../property/model");
const Property = new property();

exports.getAllProperty = async (req, res) => {
    try {
        const result = await Property.getAllProperty();
        console.log(result);
        res.render("property/views/property-search", { properties: result })
    } catch (err) {
        res.json(err.message);
    }
}