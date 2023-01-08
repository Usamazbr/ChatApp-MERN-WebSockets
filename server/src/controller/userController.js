const { chats } = require("../assets/userDummy.json");

const testFunc = (_, res) => {
  res.send("This is Server");
};

const testFunc2 = ({ params }, res) => {
  const singleChat = chats.find((chat) => chat._id === params.id);
  res.send(singleChat);
};

module.exports = { testFunc, testFunc2 };
