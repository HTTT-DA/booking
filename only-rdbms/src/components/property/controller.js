const property = require("../property/model");
const Property = new property();
const {paging} = require("../../public/js/paging");

exports.searchProperty = async (req, res) => {
    try {
        const result = await Property.searchProperty(req.query);
        console.log("query 1");
        res.render("property/views/property-search", { properties: result, paging: paging(req.query.page)})
    } catch (err) {
        res.json(err.message);
    }
}

exports.getPropertyDetail = async (req, res) => {
    try {
        const result = {};
        const detail = await Property.getPropertyDetail(req.params.id);
        const accommodations = await Property.getAccommodationOfProperty(req.params.id);
        const reviews = await Property.getReviewOfProperty(req.params.id);
        const images = await Property.getImageOfProperty(req.params.id);
        const popularFacilities = await Property.getPopularFacilities(req.params.id);
        const questionAndAnswers = await Property.getQuestionAndAnswer(req.params.id);
        const facilities = await Property.getFacilitiesProperty(req.params.id);
        const childrenPolicy = await Property.getChildrenPolicy(req.params.id);
        const bedPolicy = await Property.getBedPolicy(req.params.id);
        const acceptedPayment = await Property.getAcceptedPayment(req.params.id);

        result.detail = detail;
        result.accommodations = accommodations;
        result.reviews = reviews;
        result.images = images;
        result.popularFacilities = popularFacilities;
        result.questionAndAnswers = questionAndAnswers;
        result.childrenPolicy = childrenPolicy;
        result.bedPolicy = bedPolicy;
        result.acceptedPayment = acceptedPayment;

        result.facilities = [];
        for (let i = 0; i < facilities.length; i++) {
            if(result.facilities.length >= 5) break;
            if (!result.facilities.find(facility => facility.type === facilities[i].type_name)) {
                result.facilities.push({type: facilities[i].type_name, icon: facilities[i].icon, str: facilities[i].facility_name});
            }
            else {
                result.facilities.find(facility => facility.type === facilities[i].type_name)
                    .str += ", " + facilities[i].facility_name;
            }
        }

        res.render("property/views/property-detail", { property: result })
    } catch (err) {
        res.json(err.message);
    }
}