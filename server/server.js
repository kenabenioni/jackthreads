require("dotenv").config();
const express = require("express"),
  bodyParser = require("body-parser"),
  ctrl = require("./controller.js"),
  massive = require("massive"),
  session = require("express-session"),
  axios = require("axios");

  const app = express();
  const PORT = 3005;

  let {
    SECRET,
    REACT_APP_DOMAIN,
    CLIENT_SECRET,
    REACT_APP_CLIENT_ID
  } = process.env;

  app.use(bodyParser.json());
  app.use(
    session({
      secret: SECRET,
      resave: false,
      saveUninitialized: true
    })
  );




  app.get("/auth/callback", async (req, res) => {
    let payload = {
      client_id: REACT_APP_CLIENT_ID,
      client_secret: CLIENT_SECRET,
      code: req.query.code,
      grant_type: "authorization_code",
      redirect_uri: `http://${req.headers.host}/auth/callback`
    };
    let resWithToken = await axios.post(
      `https://${REACT_APP_DOMAIN}/oauth/token`,
      payload
    );
  
    let resWithUserData = await axios.get(
      `https://${REACT_APP_DOMAIN}/userinfo/?access_token=${
        resWithToken.data.access_token
      }`
    );
    req.session.user = resWithUserData.data;
    res.redirect("/");
  });
  
  app.get("/api/user-data", (req, res) => {
    if (req.session.user) {
      res.status(200).send(req.session.user);
    } else {
      res.status(401).send("bob marley");
    }
  });
  
  app.get('/logout', (req, res)=>{
      req.session.destroy();
      res.redirect('http://localhost:3000/#')
  })




  massive(process.env.MY_URL).then(db => {
    app.set('db', db);
    app.listen(PORT, () => console.log(`${PORT} is the port.`));
  })
  .catch(err => console.log(err));

  app.get('/api/all-products', ctrl.getClothing)