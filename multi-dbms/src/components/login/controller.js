exports.render = (req, res) => {
    try{
        res.render("login/views/login", { layout: '/login/views/login-layout' });
    }catch (err) {
        res.status(500).send({ message: err.message });
    }
}
