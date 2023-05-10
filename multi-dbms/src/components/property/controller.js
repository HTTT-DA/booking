const property = require("../property/model");
const Property = new property();
const {paging} = require("../../public/js/paging");

exports.searchProperty = async (req, res) => {
    try {
        const result = await Property.searchProperty(req.query);
        res.render("property/views/property-search", { properties: result, paging: paging(req.query.page) })
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
        for (let i = 0; i < accommodations.length; i++){
            accommodations[i].price_after_sale_off = accommodations[i].price - accommodations[i].price * accommodations[i].sale_off / 100;
        }

        res.render("property/views/property-detail", { property: property, accommodations: accommodations })
    } catch (err) {
        res.json(err.message);
    }
}

exports.getReserveDetail = async (req, res) => {
    try {
      const property_temp = await Property.getPropertyDetail(req.params.id);
      const property = {
        'property_id': property_temp.property_id,
        'property_name': property_temp.name
      };
      const accommodations_temp = await Property.getAccommodationOfProperty(req.params.id);
      const accommodations = [
        {
          accommodation_id: accommodations_temp[0]._id,
          price: accommodations_temp[0].price,
          price_sale_off:
            accommodations_temp[0].price -
            (accommodations_temp[0].price * accommodations_temp[0].sale_off) /
              100,
        },
        {
          accommodation_id: accommodations_temp[1]._id,
          price: accommodations_temp[1].price,
          price_sale_off:
            accommodations_temp[1].price -
            (accommodations_temp[1].price * accommodations_temp[1].sale_off) /
              100,
        },
        {
          accommodation_id: accommodations_temp[2]._id,
          price: accommodations_temp[2].price,
          price_sale_off:
            accommodations_temp[2].price -
            (accommodations_temp[2].price * accommodations_temp[2].sale_off) /
              100,
        },
      ];

      const quantity_1 = +req.body.quantity_number_0;
      const quantity_2 = +req.body.quantity_number_1;
      const quantity_3 = +req.body.quantity_number_2;

      for (let i = 0; i < 3; i++) {
        
      }
    } catch (err) {
      res.json(err.message);
    }

}