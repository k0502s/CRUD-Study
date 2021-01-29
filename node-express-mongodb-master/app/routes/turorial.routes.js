module.exports = app => {
  const user = require("../controllers/tutorial.controller.js");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", user.create);

  // Retrieve all Tutorials
  router.get("/", user.findAll);

  // Retrieve all published Tutorials
  router.get("/published", user.findAllPublished);

  // Retrieve a single Tutorial with id
  router.get("/:id", user.findOne);

  // Update a Tutorial with id
  router.put("/:id", user.update);

  // Delete a Tutorial with id
  router.delete("/:id", user.delete);

  // Create a new Tutorial
  router.delete("/", user.deleteAll);

  app.use("/api/tutorials", router);
};
