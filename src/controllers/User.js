const User = require('../models/User');
const getAll = async (req, res) => {
    try {
        const data = await User.findAll({});

        res.status(200).json({
            "total": data.length,
            "data": data
        })
    }catch (err) {
        console.log(err)
    }
}

const create = async (req, res) => {
    try {
        const data = await User.create(req.body);

        res.status(201).json(data);
    } catch (err) {
        console.log(err)
    }
}

module.exports = {
    getAll,
    create
}