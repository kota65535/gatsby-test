const {setConfig} = require("./src/foo");

exports.onClientEntry = () => {
  setConfig({test: 1})
}
