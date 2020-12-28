const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateTestInput(data) {
    let errors = {};

    data.title = validText(data.title) ? data.title : '';

    data.content = validText(data.content) ? data.content : '';

    if (!Validator.isLength(data.title, { min: 4, max: 40 })) {
        errors.title = 'Title must be between 4 and 40 characters';
    }
    
    if (Validator.isEmpty(data.title)) {
        errors.title = 'Title field is required';
    }

    if (!Validator.isLength(data.content, { min: 43, max: 43000 })) {
        errors.content = 'Content must be between 43 and 43000 characters';
    }
    
    if (Validator.isEmpty(data.content)) {
        errors.content = 'Content field is required';
    }
    
    return {
        errors,
        isValid: Object.keys(errors).length === 0
    };
};