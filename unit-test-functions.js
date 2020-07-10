const axios = require("axios");
const functions = {
  add: (num1, num2) => num1 + num2,
  // *****************************

  isNull: () => null,
  // *****************************

  checkValue: (x) => x,
  // *****************************

  createUser: () => {
    const user = { firstName: "Muhannad" };
    user["lastName"] = "Judah";
    return user;
  },
  // *****************************

  fetchUser: async () => {
    try {
      const user = await axios.get("https://jsonplaceholder.typicode.com/users/1");
      const res = user.data;
      return res;
    } catch (err) {
      return { error: err };
    }
  },

  // *****************************
  reversString: (text) => {
    return text.toLowerCase().split("").reverse().join("");
  },

  // *****************************
  chunkArray: (arr, len) => {
    const chunkedArr = [];
    arr.forEach((item) => {
      // grab last item in array
      const last = chunkedArr[chunkedArr.length - 1];
      if (!last || last.length === len) {
        chunkedArr.push([item]);
      } else {
        last.push(item);
      }
    });
    return chunkedArr;
  },
  // *****************************

  isAnagram: (str1, str2) => {
    // internal func
    const formaStr = (text) => {
      return text.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
    };
    return formaStr(str1) === formaStr(str2);
  }
};

module.exports = functions;
