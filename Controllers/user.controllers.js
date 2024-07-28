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

const UpdateUser= async (req, res) => {
    const { id } = req.params;
    console.log(req.params)
    const { FirstName, LastName, Email, Password } = req.body;
    console.log(id);
 
    const user = {
        FirstName: FirstName,
        LastName: LastName,
        Email: Email,
        Password: Password,
    };
    const updatedUser = await User.findOneAndUpdate({ _id: id }, user, { new: true });
    res.send(updatedUser);
  };
  
  const DeleteUser = async (req, res) => {
    const { id } = req.params;
    console.log(req.params);
    const { FirstName, LastName, Email, Password } = req.body;

    const product = {
        FirstName: FirstName,
        LastName: LastName,
        Email: Email,
        Password: Password,
    };
    const deletedUser = await User.deleteOne({ _id: id });
    res.send(deletedUser);
  };
module.exports = {
    GetUsers,
    CreateUser,
    UpdateUser,
    DeleteUser
}