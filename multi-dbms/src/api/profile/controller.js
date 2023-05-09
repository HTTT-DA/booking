const Profile = require("../../components/profile/model");
const ProfileModel = new Profile();

module.exports.updateFullName = async (req, res) => {
    try {
        await ProfileModel.updateFullName(1, req.body.full_name);
        res.send("Update full name successfully");
    } catch (e) {
        res.status(500).json({message: e.message});
    }
};

module.exports.updateDisplayName = async (req, res) => {
    try {
        await ProfileModel.updateDisplayName(1, req.body.display_name);
        res.send("Update display name successfully");
    } catch (e) {
        res.status(500).json({message: e.message});
    }
}

module.exports.updateEmail = async (req, res) => {
    try {
        await ProfileModel.updateEmail(1, req.body.email);
        res.send("Update email successfully");
    } catch (e) {
        res.status(500).json({message: e.message});
    }
}

module.exports.updatePhone = async (req, res) => {
    try {
        await ProfileModel.updatePhone(1, req.body.phone_number);
        res.send("Update phone number successfully");
    } catch (e) {
        res.status(500).json({message: e.message});
    }
}

module.exports.updateDob = async (req, res) => {
    try {
        await ProfileModel.updateDob(1, req.body.date_of_birth);
        res.send("Update date of birth successfully");
    } catch (e) {
        res.status(500).json({message: e.message});
    }
}

module.exports.updateNationality = async (req, res) => {
    try {
        await ProfileModel.updateNationality(1, req.body.nationality)
        res.send("Update nationality successfully")
    } catch (e) {
        res.status(500).json({message: e.message});
    }
}

module.exports.updateGender = async (req, res) => {
    try {
        await ProfileModel.updateGender(1, req.body.gender);
        res.send("Update gender successfully");
    } catch (e) {
        res.status(500).json({message: e.message});
    }
}

module.exports.updateAddress = async (req, res) => {
    try {
        await ProfileModel.updateAddress(1, req.body.address);
        res.send("Update address successfully");
    } catch (e) {
        res.status(500).json({message: e.message});
    }
}