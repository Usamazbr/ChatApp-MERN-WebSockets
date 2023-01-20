const { chats } = require("../assets/userDummy.json");

const testFunc = (_, res) => {
  res.send("This is Server");
};

const testFunc2 = (_, res) => {
  // const singleChat = chats.find((chat) => chat._id === params.id);
  res.send(chats);
};

const testFunc3 = ({ params }, res) => {
  const singleChat = chats.find((chat) => chat._id === params.id);
  res.send(singleChat);
};

module.exports = { testFunc, testFunc2, testFunc3 };
