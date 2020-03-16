const data = [
  {
    timestamp: new Date().getTime(),
    text: "Ate my dinner",
    love: false,
    user: {
      id: 1,
      name: "Nate",
      avatar: "http://www.croop.cl/UI/twitter/images/doug.jpg"
    },
    comments: [{ from: "azad", text: "me too" }]
  },
  {
    timestamp: new Date().getTime(),
    text: "Hello World!!",
    love: false,
    user: {
      id: 2,
      name: "Azad",
      avatar: "http://www.croop.cl/UI/twitter/images/doug.jpg"
    },
    comments: [{ from: "nate", text: "me too" }]
  }
];
export default data;
