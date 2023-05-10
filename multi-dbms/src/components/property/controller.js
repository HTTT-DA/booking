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
      const accommodations_temp = await Property.getAccommodationOfProperty(req.params.id);
      const accommodations = [
        {
          accommodation_id: accommodations_temp[0]._id.toString(),
          price: accommodations_temp[0].price,
          quantity: +req.body.quantity_number_0,
          price_sale_off:
            accommodations_temp[0].price -
            (accommodations_temp[0].price * accommodations_temp[0].sale_off) /
              100,
        },
        {
          accommodation_id: accommodations_temp[1]._id.toString(),
          price: accommodations_temp[1].price,
          quantity: +req.body.quantity_number_1,
          price_sale_off:
            accommodations_temp[1].price -
            (accommodations_temp[1].price * accommodations_temp[1].sale_off) /
              100,
        },
        {
          accommodation_id: accommodations_temp[2]._id.toString(),
          price: accommodations_temp[2].price,
          quantity: +req.body.quantity_number_2,
          price_sale_off:
            accommodations_temp[2].price -
            (accommodations_temp[2].price * accommodations_temp[2].sale_off) /
              100,
        },
      ];

      // 2022-11-04 13:10:30.252984

      let date_start = "2022-05-12 14:00:00";
      let date_end = "2022-05-13 12:00:00";
      let price_total = 0;
      let price_total_sale_off = 0;

      for (let i = 0; i < 3; i++) {
        price_total += accommodations[i].quantity * accommodations[i].price;
        price_total_sale_off += accommodations[i].quantity * accommodations[i].price_sale_off;
      }

      const booking_information = {
        property_id: property_temp.property_id,
        property_name: property_temp.name,
        property_address: property_temp.address,
        price_total: price_total,
        price_sale_off: price_total_sale_off,
        date_start: date_start,
        date_end: date_end,
        accommodations: accommodations
      };
      
      req.session.currentBooking = booking_information;

      res.redirect(`/property/${req.params.id}/reserve`);

    } catch (err) {
      res.json(err.message);
    }

}

exports.getReservationStep2 = function (req, res) {
        const booking_information = req.session.currentBooking;

        res.render("property/views/reservation-step-2", {
          property_name: booking_information.property_name,
          property_address: booking_information.property_address,
          price_total: booking_information.price_total,
          price_sale_off: booking_information.price_sale_off,
          date_start: booking_information.date_start,
          date_end: booking_information.date_end,
        });
}

exports.addPropertyToRedis = async (req, res) => {
  try {
    const booking_information = req.session.currentBooking;
    const accommodations = booking_information.accommodations;

    delete booking_information.accomodations; 

    const addPropertyToRedis = await Property.addPropertyToRedis(req.session.authUser.customer_id, booking_information, accommodations)

    res.redirect("/home");
  } catch (err) {
    res.json(err.message);
  }
}