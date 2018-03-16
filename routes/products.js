var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://sheng:sheng@ds151528.mlab.com:51528/mytasklist_sheng', ['products']);


// Get All Products
router.get('/products', function(req, res, next){
    db.products.find(function(err, products){
        if(err){
            res.send(err);
        }
        res.json(products);
    });
});

// Get Single Product By SKU
router.get('/product/:sku', function(req, res, next){
    db.tasks.findOne({_sku: mongojs.ObjectId(req.params.sku)}, function(err, product){
        if(err){
            res.send(err);
        }
        res.json(product);
    });
});

//Save Product
router.post('/product', function(req, res, next){
    var product = req.body;
    if(!product.name || !product.sku){
        res.status(400);
        res.json({
            "error": "Bad Data"
        });
    } else {
        db.products.save(product, function(err, product){
            if(err){
                res.send(err);
            }
            res.json(product);
        });
    }
});

// Delete Task
router.delete('/product/:id', function(req, res, next){
    db.products.remove({_id: mongojs.ObjectId(req.params.id)}, function(err, task){
        if(err){
            res.send(err);
        }
        res.json(task);
    });
});

// Update Task
router.put('/product/:id', function(req, res, next){
    var updProduct = req.body;
    var product = {};
    product.sku = updProduct.sku;
    product.upc = updProduct.upc;
    product.name = updProduct.name;
    product.quantity = updProduct.quantity;


    if(!product || !product.name || !product.sku){
        res.status(400);
        res.json({
            "error":"Bad Data"
        });
    } else {
        db.products.update({_id: mongojs.ObjectId(req.params.id)},product, {}, function(err, product){
        if(err){
            res.send(err);
        }
        res.json(product);
    });
    }
});

module.exports = router;