const loginModel = require("./model");

exports.render = (req, res) => {
  try {
        res.render("login/views/login", {
          layout: "/login/views/login-layout",
      })
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

exports.logOut = (req, res) => {
  try {
    req.session.destroy();
    res.redirect("/");
    console.log(req.session);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

exports.validateUser = async (req, res) => {
  try {
    const email = req.body.email;
    const user = await loginModel.getUserByEmail(email);

    if (user === null) {
      return res.render("login/views/login", {
        error: "Invalid username or password !",
        layout: "/login/views/login-layout",
      });
    }
    
    const ret = req.body.password === user.password;

    if (ret === false) {
      return res.render("login/views/login", {
        error: "Invalid username or password!",
        layout: "/login/views/login-layout",
      });
    }

    delete user.Password;

    req.session.auth = true;
    req.session.username = user.full_name;
    req.session.authUser = user;

    const url = req.session.retUrl || "/home";
    // console.log(req.session.authUser);
    res.redirect(url);
  } catch (err) {
    return "Error getting user's email:" + err;
  }
};
