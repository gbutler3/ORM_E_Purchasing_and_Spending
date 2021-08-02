// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');
const { belongsToMany } = require('./Category');
const { belongsTo } = require('./Product');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_name', 
  onDelete: 'CASCADE',
})
// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_name',
  onDelete: 'CASCADE',
})
// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
through:{
  model: ProductTag,
  unique: false
},
as: 'products_belongToMany_tags'
})
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product,{
  through: {
    model: ProductTag,
    unique: false
  },
  as: 'tags_belongToMany_products'
})

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};