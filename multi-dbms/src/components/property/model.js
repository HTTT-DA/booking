// get poolPromise from app.js
const { query } = require('mssql');
const { poolPromise } = require('../../config/connect-to-mssql');
const mongoose = require('mongoose');

const propertyDetailModel = mongoose.model('PropertyDetail', {}, 'PropertyDetail');
const accommodationModel = mongoose.model('Accommodation', {}, 'Accommodation');

const connect = require("../../config/connect-to-redis");

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
                 WHERE [city] LIKE '%${search.location}%' 
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
                 WHERE [city] LIKE '%${search.location}%' 
                 ORDER BY id
                 OFFSET 0 + 10 * ${search.page - 1} ROWS
                 FETCH NEXT 10 ROWS ONLY`;

                console.log(query);

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

    this.addPropertyToRedis = async (user_id, booking_info, accommodations) => {
        try {
          const client = await connect.connect();
          const keyHMSET = "Room:" + user_id;
          const keyZADD = "Accommodations:" + user_id;
          const membersToAdd = [
            1,
            accommodations[0].quantity,
            2,
            accommodations[1].quantity,
            3,
            accommodations[2].quantity,
          ];
          // Property
          await client.hmset(
            keyHMSET,
            "property_id",
            booking_info.property_id,
            "property_name",
            booking_info.property_name,
            "price",
            booking_info.price_sale_off,
            "day_start",
            booking_info.date_start,
            "day_end",
            booking_info.date_end,

            (err, result) => {
              if (err) {
                console.error(err);
              } else {
                console.log("HMSET success");
              }
            }
          );
          // Accommodations
          await client.exists(keyZADD, (err, reply) => {
            if (err) {
              console.error(err);
              return;
            }
            if (reply === 1) {
              // key tồn tại, xóa tất cả các member
              client.zremrangebyrank(keyZADD, 0, -1, (err, result) => {
                if (err) {
                  console.error(err);
                } else {
                  console.log("Zremrangebyrank success");
                }
              });
            } else {
              // key không tồn tại
              console.log(`Key does not exist`);
            }
          });
          // Add members to sorted set
          await client.zadd(keyZADD, membersToAdd, (err, response) => {
            if (err) {
              console.error(err);
            } else {
              console.log(`zadd successfully`);
            }
            // Close Redis client connection
            client.quit();
          });
        } catch (err) {
            return err.message;
        } 
    }
};

