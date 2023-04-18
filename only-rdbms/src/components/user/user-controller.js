const User = require('./user-model');
const user = new User();

exports.hello = async (req, res) => {
    await user.test(req.params.id, (err, data) => {
        if (!err) res.status(200).json(data);
        else res.status(500).json({message: err.message});
    });
}