const data = [
  {
    timestamp: new Date().getTime(),
    text: "Ate my dinner",
    user: {
      id: 1,
      name: "Nate",
      avatar: "http://www.croop.cl/UI/twitter/images/doug.jpg"
    },
    comments: [{ from: "azad", text: "me too" }]
  },
  {
    timestamp: new Date().getTime(),
    text: "Ate my dinner too",
    user: {
      id: 2,
      name: "Nate",
      avatar: "http://www.croop.cl/UI/twitter/images/doug.jpg"
    },
    comments: [{ from: "azad", text: "me too" }]
  }
];
export default data;
