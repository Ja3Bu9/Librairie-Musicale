const productsModel = require('../models/products.model')
exports.getHome = (req, res, next) => {
    // get Product
    // render index.ejs



    // get category
    // if category && category !== all
    // filter
    // else
    // render all
   

    let category = req.query.category
    let validCategories = ['clothes', 'phones', 'computer']
    let productsPromise
    if(category && validCategories.includes(category))
        productsPromise = productsModel.getProductsByCategory(category)
    else
        productsPromise = productsModel.getAllProducts()
    
    productsPromise.then(products => {
        res.render('album', {
            products : products
        })
    })
  

  
}