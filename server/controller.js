module.exports = {
  getClothing: (req, res) => {
    const db = req.app.get("db");
    db.get_clothing()
      .then(clothing => {
        res.status(200).send(clothing);
      })
      .catch(err => {
        console.log(err);
        res.status(500).send(err);
      });
  },
  getProduct: (req, res) => {
    const db = req.app.get("db");
    const { id, img } = req.query;
    db.get_product({ id, img })
      .then(product => {
        res.status(200).send(product);
      })
      .catch(err => {
        console.log(err);
        res.status(500).send(err);
      });
  },
  addToClothingBag: (req, res) => {
    const db = req.app.get("db");
    const { product_id, color_id, img_id } = req.body;
    const { user_id } = req.session.user;
    db.add_clothing_to_bag({ product_id, color_id, img_id, user_id })
      .then(response => {
        res.status(200).send(response);
      })
      .catch(err => {
        console.log(err);
        res.status(500).send(err);
      });
  },
  getImgs: (req, res) => {
    const db = req.app.get("db");
    const { product_id, color_id } = req.query;
    db.get_imgs({ product_id, color_id })
      .then(response => {
        res.status(200).send(response);
      })
      .catch(err => {
        console.log(err);
        res.status(500).send(err);
      });
  },
  getbag: (req, res) => {
    const db = req.app.get("db");
    db.get_bag([req.session.user.user_id])
      .then(response => {
        res.status(200).send(response);
      })
      .catch(err => {
        console.log(err);
        res.status(500).send(err);
      });
  },
  deleteFromBag: (req, res) => {
    const db = req.app.get("db");
    const {element} = req.params
    const {user_id} = req.session.user
    db.delete_from_bag({element, user_id})
    .then(response => {
        res.status(200).send(response);
      })
      .catch(err => {
        console.log(err);
        res.status(500).send(err);
      });
  }
};
