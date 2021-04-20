const User = require('../models/userModel');
const Order = require('../models/orderModel');
const Product = require('../models/productModel');
const { errorHandler } = require('../helpers/dbErrorHandler');

exports.userById = (req, res, next, id) => {
    User.findById(id).exec((err, user) => {
        if (err || !user) {
            return res.status(400).json({
                error: 'User not found'
            });
        }
        req.profile = user;
        next();
    });
};

exports.read = (req, res) => {
    req.profile.hashed_password = undefined;
    req.profile.salt = undefined;
    return res.json(req.profile);
};

exports.update = (req, res) => {
    // console.log('UPDATE USER - req.user', req.user, 'UPDATE DATA', req.body);
    const { firstname, lastname, email, title, company, password } = req.body;

    User.findOne({ _id: req.profile._id }, (err, user) => {
        if (err || !user) {
            return res.status(400).json({
                error: 'User not found'
            });
        }
        if (!firstname) {
            return res.status(400).json({
                error: 'First Name is required'
            });
        } else {
            user.firstname = firstname;
        }
        if (!lastname) {
            return res.status(400).json({
                error: 'Last Name is required'
            });
        } else {
            user.lastname = lastname;
        }
        if (!email || !email.match(/.+\@.+\..+/)) {
            return res.status(400).json({
                error: 'Email is required and must contain @'
            });
        } else {
            user.email = email;
        }
        if (!title) {
            return res.status(400).json({
                error: 'Title is required'
            });
        } else {
            user.title = title;
        }
        if (!company) {
            return res.status(400).json({
                error: 'Company is required'
            });
        } else {
            user.company = company;
        }

        if (password) {
            if (password.length < 6 || !password.match(/\d/) ) {
                return res.status(400).json({
                    error: 'Password should be min 6 characters long or contain a number'
                });
            } else {
                user.password = password;
            }
        }

        user.save((err, updatedUser) => {
            if (err) {
                console.log('USER UPDATE ERROR', err);
                return res.status(400).json({
                    error: 'User update failed'
                });
            }
            updatedUser.hashed_password = undefined;
            updatedUser.salt = undefined;
            res.json(updatedUser);
        });
    });
};


exports.purchaseHistory = (req, res) => {
   Order.find({ customerKey: req.query.customerKey })
       .populate('user', '_id')
       .populate('product', 'modelname category subcategory color')
        //.sort('-created')
        .exec((err, o) => {
            if (err) {
                return res.status(400).json({
                    //error: errorHandler(err)
                    error: 'No data'
                });
            }
            res.json(o);
        });

};
