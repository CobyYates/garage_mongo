// this page has been updated COMPLETE Before testing
const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
  // res.render('admin/edit-product', {
  //   pageTitle: 'Add Product',
  //   path: '/admin/add-product',
  //   editing: false
  // });
};

exports.postAddProduct = (req, res, next) => {
  const year = req.body.year;
  const make = req.body.make;
  const model = req.body.model;
  const torque = req.body.torque;
  const engine = req.body.engine;
  const sixty = req.body.sixty;
  const topSpeed = req.body.topSpeed;
  const price = req.body.price;
  const hp = req.body.hp;
  const weight = req.body.weight;
  const product = new Product({
    year: year,
    make: make,
    model: model,
    torque: torque,
    engine: engine,
    sixty: sixty,
    topSpeed: topSpeed,
    price: price,
    hp: hp,
    weight: weight,
  });
  product
    .save()
    .then(result => {
      console.log('Created Product');
      res.redirect('/admin/products');
    })
    .catch(err => {
      console.log(err);
    });
};

exports.getEditProduct = (req, res, next) => {
  const editMode = req.query.edit;
  if (!editMode) {
    return res.redirect('/');
  }
  const prodId = req.params.productId;
  Product.findById(prodId)
    .then(product => {
      if (!product) {
        return res.redirect('/');
      }
      // res.render('admin/edit-product', {
      //   pageTitle: 'Edit Product',
      //   path: '/admin/edit-product',
      //   editing: editMode,
      //   product: product
      // });
    })
    .catch(err => console.log(err));
};

exports.postEditProduct = (req, res, next) => {
  const prodId = req.body.productId;
  const updatedYear = req.body.year;
  const updatedMake = req.body.make;
  const updatedModel = req.body.model;
  const updatedTorque = req.body.torque;
  const updatedEngine = req.body.engine;
  const updatedSixty = req.body.sixty;
  const updatedTopSpeed = req.body.topSpeed;
  const updatedPrice = req.body.price;
  const updatedHp = req.body.hp;
  const updatedWeight = req.body.weight;

  Product.findById(prodId)
    .then(product => {
      product.title = updatedTitle;
      product.price = updatedPrice;
      product.description = updatedDesc;
      product.imageUrl = updatedImageUrl;

      product.year = updatedYear;
      product.make = updatedMake;
      product.model = updatedModel;
      product.torque = updatedTorque;
      product.engine = updatedEngine;
      product.sixty = updatedSixty;
      product.topSpeed = updatedTopSpeed;
      product.price = updatedPrice;
      product.hp = updatedHp;
      product.weight = updatedWeight;

      return product.save();
    })
    .then(result => {
      console.log('UPDATED PRODUCT!');
      res.redirect('/admin/products');
    })
    .catch(err => console.log(err));
};

// exports.getAllProducts = (req, res, next) => {
//   Product.find()
//     .then((products) => {
//       res.json(products);
//     })
//     .catch((err) => console.log(err));
// };

exports.getProducts = (req, res, next) => {
  Product.find()
    // .select('title price -_id')
    // .populate('userId', 'name')
    .then(products => {
      console.log(products);
      res.json()
      // res.render('admin/products', {
      //   prods: products,
      //   pageTitle: 'Admin Products',
      //   path: '/admin/products'
      // });
    })
    .catch(err => console.log(err));
};

exports.postDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  Product.findByIdAndRemove(prodId)
    .then(() => {
      console.log('DESTROYED PRODUCT');
      res.redirect('/admin/products');
    })
    .catch(err => console.log(err));
};
