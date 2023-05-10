const Profile = require("../../components/profile/model");
const ProfileModel = new Profile();

module.exports.updateFullName = async (req, res) => {
    try {
        await ProfileModel.updateFullName(req.session.authUser.id, req.body.full_name);
        res.send("Update full name successfully");
    } catch (e) {
        res.status(500).json({message: e.message});
    }
};

module.exports.updateDisplayName = async (req, res) => {
    try {
        await ProfileModel.updateDisplayName(req.session.authUser.id, req.body.display_name);
        res.send("Update display name successfully");
    } catch (e) {
        res.status(500).json({message: e.message});
    }
}

module.exports.updateEmail = async (req, res) => {
    try {
        await ProfileModel.updateEmail(req.session.authUser.id, req.body.email);
        res.send("Update email successfully");
    } catch (e) {
        res.status(500).json({message: e.message});
    }
}

module.exports.updatePhone = async (req, res) => {
    try {
        await ProfileModel.updatePhone(req.session.authUser.id, req.body.phone_number);
        res.send("Update phone number successfully");
    } catch (e) {
        res.status(500).json({message: e.message});
    }
}

module.exports.updateDob = async (req, res) => {
    try {
        await ProfileModel.updateDob(req.session.authUser.id, req.body.date_of_birth);
        res.send("Update date of birth successfully");
    } catch (e) {
        res.status(500).json({message: e.message});
    }
}

module.exports.updateNationality = async (req, res) => {
    try {
        await ProfileModel.updateNationality(req.session.authUser.id, req.body.nationality)
        res.send("Update nationality successfully")
    } catch (e) {
        res.status(500).json({message: e.message});
    }
}

module.exports.updateGender = async (req, res) => {
    try {
        await ProfileModel.updateGender(req.session.authUser.id, req.body.gender);
        res.send("Update gender successfully");
    } catch (e) {
        res.status(500).json({message: e.message});
    }
}

module.exports.updateAddress = async (req, res) => {
    try {
        await ProfileModel.updateAddress(req.session.authUser.id, req.body.address);
        res.send("Update address successfully");
    } catch (e) {
        res.status(500).json({message: e.message});
    }
}