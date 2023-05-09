module.exports.updateFullname = async (req, res) => {
    try {
        res.send("result");
    } catch (e) {
        res.status(500).json({message: e.message});
    }
};