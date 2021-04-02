const router = require('express').Router();
const ErrorHandler = require('../errors/ErrorHandler');
let products = require('../productData');

router.get('/product', (req, res) => {
    res.render('product', {
        title: 'Product List'
    })
});

router.get('/api/products', (req, res) => {
    res.json(products);
});

router.post('/api/products', (req, res, next) => {

    try {
        console.log(city)
    } catch (err) {
        next(ErrorHandler.serverError(err.message));
    }
    const { name, price } = req.body;
    //console.log(req.body);

    if (!name || !price) {
        next(ErrorHandler.validationError('price are compulsory'));
        //throw new Error('All Fields are compulsory');

        /*res.status(422).json({
            error: "all fileds are compulsory"
        })*/
    }

    const product = {
        name: name,
        price: price,
        id: new Date().getTime().toString()
    }
    products.push(product);
    res.json(product);

});

router.delete('/api/products/:productId', (req, res) => {
    products = products.filter((product) => req.params.productId !== product.id);
    res.json({
        status: "ok"
    });
})

module.exports = router;