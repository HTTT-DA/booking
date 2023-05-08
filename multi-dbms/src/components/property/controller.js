const property = require("../property/model");
const Property = new property();
const {paging} = require("../../public/js/paging");

exports.searchProperty = async (req, res) => {
    try {

        const result = await Property.searchProperty(req.query);
        res.render("property/views/property-search", { properties: result, paging: paging(req.query.page)})
    } catch (err) {
        res.json(err.message);
    }
}

exports.getPropertyDetail = async (req, res) => {
    try {
        const property = await Property.getPropertyDetail(req.params.id);
        property.review = property.review.slice(0,3);
        property.questions = property.questions.slice(0,3);

        const accommodations = await Property.getAccommodationOfProperty(req.params.id);
        for(let i = 0; i < accommodations.length; i++){
            accommodations[i].price_after_sale_off = accommodations[i].price - accommodations[i].price * accommodations[i].sale_off / 100;
        }

        res.render("property/views/property-detail", { property: property, accommodations: accommodations })
    } catch (err) {
        res.json(err.message);
    }
}