const Profile = require("./model");
const ProfileModel = new Profile();

exports.render = async (req, res) => {
    try {
        id = req.session.authUser.customer_id;
        const information = await ProfileModel.getInformation(id);
        res.render("profile/views/profile", { layout: '/profile/views/profile-layout', information })
    } catch (err) {
        res.json(err.message);
    }
}