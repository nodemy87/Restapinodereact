const express = require('express');
const router = express.Router();
const apikeymid = require('../middleware/apikeys');

//router.use(apikeymid)
router.get('/', (req, res) => {
    //res.sendFile(path.resolve(__dirname) + '/index.html');
    res.render('index', {
        title: 'Home Page'
    });
})

router.get('/about', (req, res) => {
    //res.sendFile(path.resolve(__dirname) + '/about.html');
    res.render('about', {
        title: 'About Page'
    });
})

router.get('/produ', apikeymid, (req, res) => {
    //res.download(path.resolve(__dirname) + '/about.html');
    res.json([{
        name: 'manoj',
        mob: '90i090909'
    }]);
})

module.exports = router;