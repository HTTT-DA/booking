exports.render = async (req, res) => {
    try {
        res.render("profile/views/profile", { testData: "test"})
    } catch (err) {
        res.json(err.message);
    }
}