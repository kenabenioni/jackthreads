module.exports = {
    getClothing: (req, res) => {
        const db = req.app.get("db");
        db.get_clothing()
        .then(clothing => {
            res.status(200).send(clothing)
        })
        .catch(err => {
            console.log(err);
            res.status(500),send(err);
        })
    }
}