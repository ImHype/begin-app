const fs = require("fs");

exports.handler = async function http(req) {
  await arc.events.publish({ name, payload });
  return {
    statusCode: 200,
    body: fs.readdirSync(process.cwd()),
  };
};
