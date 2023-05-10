// const express = require('express');
// const index = express.Router();

// index.get('/', (req, res) => {
//     try {
//       if (req.session.auth || null) {
//         res.render("index", { auth: true, username: req.session.username });
//       } else {
//           res.redirect('/');
//         };
//       } catch (err) {
//     res.status(500).send({ message: err.message });
//   }
// });

// module.exports = index;


const express = require('express');
const index = express.Router();

const connect = require('../config/connect-to-redis');
// const redis = require('redis');

index.get('/', async (req, res) => {
    try {
      console.log(req.session);
      
      if (req.session.authUser) {
        const userid = req.session.authUser.customer_id;

      //   const client = redis.createClient(6379, 'localhost');
      //   client.on('connect', function() {
      //     console.log('Connected!');
    
      //   });

      //   client.hGetAll(`Search:${userid}`, (err, data) => {
      //     if (err) throw err;
      //     if (data != null) {
            
      //       res.render("index", { auth: true, username: req.session.username, data: JSON.parse(data) });
      //     } else {
      //       res.render("index", { auth: true, username: req.session.username });
      //     }
          
      //   });
        const redisClient = await connect.connect()
        
        // console.log(redisClient);

        redisClient.HGETALL(`Search:${userid}`, (err, data) => {
            if (err) throw err;
            if (data != null) {

              console.log(data);
              
              res.render("index", { auth: true, username: req.session.username, data: data });
            } else {
              res.render("index", { auth: true, username: req.session.username });
            }
            
          });
        
      } else {
        res.render("index", { auth: false });
      }
      
    } catch (err) {
      res.json(err.message);
    }
});

module.exports = index;
