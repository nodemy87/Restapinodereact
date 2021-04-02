const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;
const ErrorHandler = require('./errors/ErrorHandler');

const router = require('../express-api/routes/router');
const product = require('../express-api/routes/products');

//const apikeymid = require('./middleware/apikeys');

app.set('view engine', 'ejs');

//app.set('views', 'template');

//console.log(app.get('view-engine'));
//console.log(app.get('views'));

app.use(express.static('public'));

app.use(express.json());
//middleware
//app.use(apikeymid);

//Routes
app.use(router);
app.use(product);

app.use((req, res, next) => {
    res.json({
        message: "Page not found"
    })
});

app.use((err, req, res, next) => {
    if (err instanceof ErrorHandler) {
        res.status(err.status).json({
            error: {
                message: err.message,
                status: err.status
            }
        });
    } else {
        res.status(500).json({
            error: {
                message: err.message,
                status: err.status
            }
        });
    }
    //console.log('Error', err.message);

    //next();
})

app.listen(3000, () => { console.log(`Listening on port ${PORT}`) });