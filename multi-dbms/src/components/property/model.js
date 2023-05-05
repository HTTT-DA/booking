// get poolPromise from app.js
const { poolPromise } = require('../../config/connect-to-mssql');
const mongoose = require('mongoose');

const propertyDetailModel = mongoose.model('PropertyDetail', {}, 'PropertyDetail');
const accommodationModel = mongoose.model('Accommodation', {}, 'Accommodation');

module.exports = function () {
    this.searchProperty = async (search) => {
        try {
            const pool = await poolPromise;

            const query = (search.is_looking_for !== undefined && search.is_looking_for !== '')
                ?
                `SELECT DISTINCT 
                     Property.name, Property.avatar_url, Property.info, Property.review_count,
                     Property.id, Property.rating_star, Property.city,
                     ROUND(Property.point_avg, 1) as point_avg, ROUND(Property.price, 1) as price, 
                    ROUND((Property.price - Property.sale_off),1) as price_after_sale_off
                 FROM Property
                 WHERE [city] = '${search.location}'
                 AND Property.property_type = 'Country houses' OR Property.property_type = 'Apartments'
                 ORDER BY id
                 OFFSET 0 + 10 * ${search.page - 1} ROWS
                 FETCH NEXT 10 ROWS ONLY`
                :
                `SELECT DISTINCT 
                    Property.name, Property.avatar_url, Property.info, Property.review_count, 
                    Property.id, Property.rating_star, Property.city,
                    ROUND(Property.point_avg, 1) as point_avg, ROUND(Property.price, 1) as price, 
                    ROUND((Property.price - Property.sale_off),1) as price_after_sale_off
                 FROM Property
                 WHERE [city] = '${search.location}'
                 ORDER BY id
                 OFFSET 0 + 10 * ${search.page - 1} ROWS
                 FETCH NEXT 10 ROWS ONLY`;

            const result = await pool.request().query(query);
            return result.recordset;
        } catch (err) {
            return err.message;
        }
    };

    this.getPropertyDetail = async (id) => {
        try {
            return await propertyDetailModel.findOne({property_id: parseInt(id)}).lean();
        } catch (err) {
            return err.message;
        }
    };

    this.getAccommodationOfProperty = async (id) => {
        try {
            return await accommodationModel.find({ property_id: parseInt(id)}).lean();
        }
        catch (err) {
            return err.message;
        }
    };
};

