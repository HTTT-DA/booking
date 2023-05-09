exports.render = async (req, res) => {
    try {
        res.render("profile/views/profile", { layout: '/profile/views/profile-layout' })
    } catch (err) {
        res.json(err.message);
    }
}