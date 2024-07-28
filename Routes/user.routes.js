const express = require("express");
const app = express();

const { GetUsers } = require("../Controllers/user.controllers")
const { CreateUser } = require("../Controllers/user.controllers")

const router = express();

router.route('/').get(GetUsers);
router.route('/').get(CreateUser);



module.exports = router;