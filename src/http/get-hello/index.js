const fs = require("fs");

exports.handler = async function http(req) {
  try {
    return {
      statusCode: 200,
      body: fs.readdirSync(process.cwd()),
    };
  } catch (e) {
    return {
      statusCode: 500,
      body: e.message,
    };
  }
};
