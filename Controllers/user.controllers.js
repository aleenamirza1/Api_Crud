const User = require("../Models/user");
const mongoose = require("mongoose");

const GetUsers = async (req, res) => {
    const users = await User.find();
    console.log(users)
    res.json(users);
}

const CreateUser = async (req, res) => {
    // const {body} = req.body;
    const { FirstName, LastName, Email, Password } = req.body;
    console.log(req.body)
    const user = new User({
        FirstName: FirstName,
        LastName: LastName,
        Email: Email,
        Password: Password

    });
    const users = await User.create(user);
    res.send('users');
}
module.exports = {
    GetUsers,
    CreateUser,
}