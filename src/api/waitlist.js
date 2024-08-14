export default async function handler(req, res) {
  const reqMethod = req.method;
  const IS_POST_REQUEST = reqMethod === "POST";

  //   const reqBody = req.body;
  if (IS_POST_REQUEST) {
    // res.json(reqBody);
  } else {
    res.send("Bro? Really");
  }
}
