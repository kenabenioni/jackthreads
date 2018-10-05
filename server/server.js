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
    REACT_APP_CLIENT_ID,
    ENVIRONMENT,
    STRIPE_SECRET,
    REACT_APP_STRIPE_KEY
  } = process.env;

  app.use( express.static( `${__dirname}/../build` ) );
  app.use(bodyParser.json());
  app.use(
    session({
      secret: SECRET,
      resave: false,
      saveUninitialized: true
    })
  );




  app.use((req, res, next) => {
    if (ENVIRONMENT === 'dev') {
      req.app.get('db').set_data().then(userData => {
        req.session.user = userData[0]
        next();
      })
    } else {
      next();
    }
  })

  function mustLogin(req, res, next){
    if (req.session.user){
      next()
    }
    else {
      res.status(500).send("must login")
    }
  }
  
  

  app.get('/auth/callback', async (req, res) => {
    let payload = {
      client_id: REACT_APP_CLIENT_ID,
      client_secret: CLIENT_SECRET,
      code: req.query.code,
      grant_type: 'authorization_code',
      redirect_uri: `http://${req.headers.host}/auth/callback`
    }
    // post request with code for token
    let tokenRes = await axios.post(`https://${REACT_APP_DOMAIN}/oauth/token`, payload);
    // use token to get user data
    let userRes = await axios.get(`https://${REACT_APP_DOMAIN}/userinfo?access_token=${tokenRes.data.access_token}`)
  
    const db = req.app.get('db');
    const { email, name, picture, sub } = userRes.data;
  
    let foundUser = await db.find_user([sub])
    if (foundUser[0]) {
      req.session.user = foundUser[0];
    } else {
      let createdUser = await db.create_user([name, email, picture, sub]);
      // [ {name, email, picture, auth_id} ]
      req.session.user = createdUser[0]
    }
    res.redirect('/#/');
  
  })
  
  app.get('/api/user-data', (req, res) => {
    if (req.session.user) {
      res.status(200).send(req.session.user);
    } else {
      res.status(401).send('Go log in')
    }
  })
  
  app.get('/logout', (req, res) => {
    req.session.destroy();
    res.redirect(process.env.LOCAL_HOST)
  })




  massive(process.env.MY_URL).then(db => {
    app.set('db', db);
    app.listen(PORT, () => console.log(`${PORT} is the port.`));
  })
  .catch(err => console.log(err));

  app.get('/api/all-products', ctrl.getClothing)
  app.get("/api/product", ctrl.getProduct) 
  app.get('/api/threeimgs', ctrl.getImgs)
  app.get('/api/getbag', mustLogin, ctrl.getbag)
  app.post("/api/addtocart", ctrl.addToClothingBag)
  app.post('/api/payment', ctrl.handlePayment)
  app.delete('/api/delete/:element', ctrl.deleteFromBag)