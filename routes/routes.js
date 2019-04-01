const express = require('express');


function routes(Item){
    const shoppingRouter = express.Router();
    shoppingRouter.route('/shoppings')
    .post((req, res) => {
    const item = new Item(req.body);
    item.save(item);
    console.log(item);
    return res.status(201).json(item)
    })
    .get((req, res) => {
    const query = {};
    if(req.query.category){
        query.category = req.query.category
    };
    Item.find(query, (error, shoppings) => {
        if(error){
            return res.send(error);
        }
        return res.json(shoppings);
    });
    });
    shoppingRouter.route('/shoppings/:itemId')
    .get((req, res) => {
    
    Item.findById(req.params.itemId, (error, item) => {
        if(error){
            return res.send(error);
        }
        return res.json(item);
    });
    })
    .put((req, res) => {
    Item.findById(req.params.itemId, (error, item) => {
        if(error){
            return res.send(error);
        }
        item.title = req.body.title;
        item.price = req.body.price;
        item.quantity = req.body.quantity;
        item.description = req.body.description;
        item.save()
        return res.json(item); 
    });
})

    return shoppingRouter;
}

module.exports = routes;