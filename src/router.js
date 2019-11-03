const { Router } = require("express");
const router = Router();

router.get("/health", function(req, res) {
  req.body = "Up and running";
  res.send(req.body);
  // QUESTION: why this endpoint blocks the app?
  // - ANSWER: res.body is not a valid argument. The body property is in request. Send or json will be used to send the answer.
});

module.exports = router;