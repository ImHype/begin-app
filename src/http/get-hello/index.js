exports.handler = async function http(req) {
  console.log("hello world");
  return {
    statusCode: 200,
    body: "ok",
  };
};
