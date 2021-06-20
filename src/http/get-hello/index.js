const fs = require("fs");

exports.handler = async function http(req) {
  return {
    statusCode: 200,
    body: fs.readdirSync(process.cwd()),
  };
};
