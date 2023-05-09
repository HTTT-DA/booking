const Profile = require("../../components/profile/model");
const ProfileModel = new Profile();

module.exports.updateFullName = async (req, res) => {
    try {
        const result = await ProfileModel.updateFullName(req.params.id, req.body.full_name);
        res.send(result);
    } catch (e) {
        res.status(500).json({message: e.message});
    }
};

module.exports.updateDisplayName = async (req, res) => {
    try {
        const result = await ProfileModel.updateDisplayName(req.params.id, req.body.display_name);
        res.send(result);
    } catch (e) {
        res.status(500).json({message: e.message});
    }
}

module.exports.updateEmail = async (req, res) => {
    try {
        const result = await ProfileModel.updateEmail(req.params.id, req.body.email);
        res.send(result);
    } catch (e) {
        res.status(500).json({message: e.message});
    }
}

module.exports.updatePhone = async (req, res) => {
    try {
        const result = await ProfileModel.updatePhone(req.params.id, req.body.phone_number);
        res.send(result);
    } catch (e) {
        res.status(500).json({message: e.message});
    }
}

module.exports.updateDob = async (req, res) => {
    try {
        const result = await ProfileModel.updateDob(req.params.id, req.body.date_of_birth);
        res.send(result);
    } catch (e) {
        res.status(500).json({message: e.message});
    }
}

module.exports.updateNationality = async (req, res) => {
    try {
        const result = await ProfileModel.updateNationality(req.params.id, req.body.nationality)
        res.send(result);
    } catch (e) {
        res.status(500).json({message: e.message});
    }
}

module.exports.updateGender = async (req, res) => {
    try {
        const result = await ProfileModel.updateGender(req.params.id, req.body.gender);
        res.send(result);
    } catch (e) {
        res.status(500).json({message: e.message});
    }
}

module.exports.updateAddress = async (req, res) => {
    try {
        const result = await ProfileModel.updateAddress(req.params.id, req.body.address);
        res.send(result);
    } catch (e) {
        res.status(500).json({message: e.message});
    }
}