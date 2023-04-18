const fs = require("fs");
const path = require("path");

const addNewUser = async (req, res) => {
  try {
    const newUser = req.body;
    const file = path.join(process.cwd(), "./public/users.json");
    const data = await JSON.parse(fs.readFileSync(file));
    newUser.id = data.length + 1;
    data.push(newUser);
    fs.writeFileSync(file, JSON.stringify(data));
    return res.status(201).json({ message: "User created", data: data });
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

const getAUser = async (req, res) => {
  try {
    const query = req.query;
    const body = req.body;
    const file = path.join(process.cwd(), "./public/users.json");
    const data = await JSON.parse(fs.readFileSync(file));
    const user = data.find((user) => user.id === Number(id));
    return res.status(201).json({ message: "This is user", data: user });
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

module.exports = {
  addNewUser,
  getAUser,
};
