const { check, validationResult } = require('express-validator');

exports.userSignupValidator = [
    check('firstname', 'First Name is required').notEmpty(),
	check('lastname', 'Last Name is required').notEmpty(),
	check('company', 'Company is required').notEmpty(),
	check('title', ' Title is required').notEmpty(),
    check('email', 'Email must be provided and should be between 3 to 32 characters')
        .matches(/.+\@.+\..+/)
        .withMessage('Email must contain @')
        .isLength({
            min: 4,
            max: 32
        }),
    check('password', 'Password is required').notEmpty(),
    check('password')
        .isLength({ min: 6 })
        .withMessage('Password must contain at least 6 characters')
        .matches(/\d/)
        .withMessage('Password must contain a number')
	];