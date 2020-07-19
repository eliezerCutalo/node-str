'use strict'

const Customer = require('../models/customer');

exports.get = async (email) => {
    const res = await Customer
        .findOne({
            email: email
        }, 'name email');

    return res
}


exports.create = async(data) => {
    var customer = new Customer(data);
    await customer.save()
}