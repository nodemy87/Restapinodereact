function apikey(req, res, next) {
    const api_keys = '12345678';
    const userapikey = req.query.api_key;
    if (userapikey && (userapikey === api_keys)) {
        //console.log(req.query.api_key);
        next();
    } else {
        res.json({
            message: "Not Allowed Api Keys"
        })
    }

}

module.exports = apikey;