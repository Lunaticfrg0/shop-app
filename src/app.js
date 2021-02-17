const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const sequelize = require('./utils/database');

const adminRoutes = require('./routers/admin');
const shopRoutes = require('./routers/shop');

const Product = require('./models/product');
const User = require('./models/user');
const Cart = require('./models/cart');
const CartItem = require('./models/cart-item');

const errorCnontroller = require('./controllers/error');

const port = 3000;

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './', 'views'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public')));

app.use((req, res, next) => {
  User.findByPk(1)
    .then((user) => {
      req.user = user;
      next();
    })
    .catch((err) => console.log(err));
});

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorCnontroller.get404);

Product.belongsTo(User, { constraints: true, onDelete: 'CASCADE' });
User.hasMany(Product);
User.hasOne(Cart);
Cart.belongsTo(User);
Cart.belongsToMany(Product, { through: CartItem });
Product.belongsToMany(Cart, { through: CartItem });

User.sequelize
  //.sync({ force: true })
  .sync()
  .then((result) => {
    return User.findByPk(1);
  })
  .then((user) => {
    if (!user) {
      return User.create({
        name: 'Emilio',
        email: 'emilio3scano@gmail.com'
      });
    }
    return user;
  })
  .then((user) => {
    return user.createCart();
  })
  .then((cart) => {
    app.listen(port, () => {
      console.log('Server is up on port ' + port);
    });
  })
  .catch((err) => {
    console.log(err);
  });
