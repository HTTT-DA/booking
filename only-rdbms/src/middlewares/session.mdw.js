const session = require("express-session");

const sessionMiddleware = session({
    secret: "SHH_SHIZUKANINATTE",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
});

module.exports = sessionMiddleware;