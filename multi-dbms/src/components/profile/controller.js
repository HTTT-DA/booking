exports.render = async (req, res) => {
    try {
        res.render("profile/views/profile")
    } catch (err) {
        res.json(err.message);
    }
}