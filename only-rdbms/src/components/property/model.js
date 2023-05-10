const { poolPromise } = require('../../config/connect-to-mssql');

module.exports = function () {
    this.searchProperty = async (search) => {
        try {
            const pool = await poolPromise;

            const query = (search.is_looking_for !== undefined && search.is_looking_for !== '')
                ?
                `SELECT DISTINCT 
                     Property.name, Property.avatar_url, Property.info, Property.review_count,
                     Property.id, Property.point_avg, Property.rating_star, Property.city,
                     ROUND(Accommodation.price,1) as price, ROUND((Accommodation.price - Accommodation.sale_off),1) as price_after_sale_off
                 FROM Property
                     JOIN Accommodation on Property.id = Accommodation.property_id
                 WHERE [city] LIKE '%${search.location}%' 
                 AND Property.property_type = 'Country houses' OR Property.property_type = 'Apartments'
                 ORDER BY id
                 OFFSET 0 + 10 * ${search.page - 1} ROWS
                 FETCH NEXT 10 ROWS ONLY`
                :
                `SELECT DISTINCT 
                    Property.name, Property.avatar_url, Property.info, Property.review_count, 
                    Property.id, Property.point_avg, Property.rating_star, Property.city,
                    ROUND(Accommodation.price, 1) as price, ROUND((Accommodation.price - Accommodation.sale_off),1) as price_after_sale_off
                 FROM Property
                    JOIN Accommodation on Property.id = Accommodation.property_id
                 WHERE [city] LIKE '%${search.location}%' 
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
            const pool = await poolPromise;
            const queryBasicInfoOfProperty =
                `SELECT name, avatar_url, info, address, id, point_avg, 
                        CONVERT(varchar(10),check_in_start,8) as check_in_start,
                        CONVERT(varchar(10),check_in_end,8) as check_in_end,
                        CONVERT(varchar(10),check_out_start,8) as check_out_start,
                        CONVERT(varchar(10),check_out_end,8) as check_out_end,
                        cancellation, deposit, pet_available
                 FROM Property WHERE id = ${id}`;
            const result = await pool.request().query(queryBasicInfoOfProperty);
            return result.recordset[0];
        } catch (err) {
            return err.message;
        }
    };

    this.getAccommodationOfProperty = async (id) => {
        try {
            const pool = await poolPromise;

            const queryAccommodationOfProperty =
                `SELECT name, ROUND(price,1) as price, ROUND((price - sale_off),1) as price_after_sale_off, sleeps, quantity 
                 FROM Accommodation WHERE property_id = ${id}`;

            const result = await pool.request().query(queryAccommodationOfProperty);
            return result.recordset;
        }
        catch (err) {
            return err.message;
        }
    };

    this.getReviewOfProperty = async (id) => {
        try {
            const pool = await poolPromise;
            const queryReviewTrip =
                `SELECT TOP 3 TripReview.title, CONVERT(char(10), TripReview.date,126) as date, TripReview.comment, TripReview.score, 
                              Customer.display_name, Customer.avatar, Customer.language
                 FROM TripReview 
                    JOIN Trip ON TripReview.trip_id = Trip.id
                    JOIN Accommodation ON Trip.accommodation_id = Accommodation.id
                    JOIN Property ON Accommodation.property_id = Property.id
                    JOIN Customer ON Trip.customer_id = Customer.id
                 WHERE property_id = ${id}`;
            const result = await pool.request().query(queryReviewTrip);
            return result.recordset;
        }
        catch (err) {
            return err.message;
        }
    }

    this.getImageOfProperty = async (id) => {
        try {
            const pool = await poolPromise;
            const queryImageOfProperty =
                `SELECT url FROM PropertyImage WHERE property_id = ${id}`;
            const result = await pool.request().query(queryImageOfProperty);
            return result.recordset;
        }
        catch (err) {
            return err.message;
        }
    }

    this.getPopularFacilities = async (id) => {
        try {
            const pool = await poolPromise;
            const queryPopularProperties =
                `SELECT name, icon FROM PopularFacility WHERE property_id = ${id}`
            const result = await pool.request().query(queryPopularProperties);
            return result.recordset;
        }
        catch (err) {
            return err.message;
        }
    }

    this.getQuestionAndAnswer = async (id) => {
        try {
            const pool = await poolPromise;
            const queryQuestionAndAnswer =
                `SELECT TOP 3 QuestionAndAnswer.question, QuestionAndAnswer.answer,  CONVERT(char(10), QuestionAndAnswer.date,126) as date
                 FROM QuestionAndAnswer JOIN Property ON QuestionAndAnswer.property_id = Property.id
                 WHERE property_id = ${id}`
            const result = await pool.request().query(queryQuestionAndAnswer);
            return result.recordset;
        }
        catch (err) {
            return err.message;
        }
    }

    this.getFacilitiesProperty = async (id) => {
        try {
            const pool = await poolPromise;
            const queryFacilitiesProperty =
                `SELECT TypeOfFacility.name as type_name, TypeOfFacility.icon, PropertyFacility.name as facility_name 
                 FROM PropertyFacility 
                    JOIN TypeOfFacility ON PropertyFacility.facility_type_id = TypeOfFacility.id
                 WHERE property_id = ${id}`
            const result = await pool.request().query(queryFacilitiesProperty);
            return result.recordset;
        }
        catch (err) {
            return err.message;
        }
    }

    this.getChildrenPolicy = async (id) => {
        try {
            const pool = await poolPromise;
            const queryChildrenPolicy =
                `SELECT content FROM ChildrenPolicy WHERE property_id = ${id}`
            const result = await pool.request().query(queryChildrenPolicy);
            return result.recordset;
        }
        catch (err) {
            return err.message;
        }
    }

    this.getBedPolicy = async (id) => {
        try {
            const pool = await poolPromise;
            const queryBedPolicy =
                `SELECT content FROM BedPolicy WHERE property_id = ${id}`
            const result = await pool.request().query(queryBedPolicy);
            return result.recordset;
        }
        catch (err) {
            return err.message;
        }
    }

    this.getAcceptedPayment = async (id) => {
        try {
            const pool = await poolPromise;
            const queryAcceptedPayment =
                `SELECT name,icon FROM AcceptedPayment WHERE property_id = ${id}`
            const result = await pool.request().query(queryAcceptedPayment);
            return result.recordset;
        }
        catch (err) {
            return err.message;
        }
    }
};

