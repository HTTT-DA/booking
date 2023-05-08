const router = require("express").Router();
const loginModel = require("./model");

router.get("/", (req, res) => {
  res.render('', {
    layout: 'login.hbs'
  })
});

router.post('/', async function (req, res) {
  const email = req.body.email;
  const user = await loginModel.getUserByEmail(email);
  if (user === null) {
    return res.render("login", {
      error: "Invalid username or password !",
      layout: "login.hbs",
    });
  }

  const ret = req.body.password === user.password;
  if(ret === false){
    return res.render('login',{
      error: 'Invalid username or password!',
      layout: 'login.hbs'
    });
  }

  delete user.Password;

  req.session.auth = true;
  req.session.authUser = user;

  const url = req.session.retUrl || "/";
  console.log(req.session);
  res.redirect(url);
});

module.exports = router;