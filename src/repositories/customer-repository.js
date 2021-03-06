'use strict'

const Customer = require('../models/customer');

exports.authenticate = async (data) => {
    const res = await Customer
        .findOne({
            email: data.email,
            password: data.password
        });

    return res
}
exports.getById = async (id) => {
    const res = await Customer
        .findById(id);

    return res
}

exports.create = async(data) => {
    var customer = new Customer(data);
    await customer.save()
}