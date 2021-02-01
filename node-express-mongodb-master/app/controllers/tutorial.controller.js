const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.user = require("../models/User")(mongoose);


const di = db.user;





//////////새 개체 만들기


// Create and Save a new Tutorial
exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a Tutorial
  const tutorial = new di({
    title: req.body.title,
    description: req.body.description,
    published: req.body.published ? req.body.published : false
  });

  // Save Tutorial in the database
  tutorial
    .save(tutorial)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial."
      });
    });
};





///////// 개체 검색 (조건 포함)


// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
  const title = req.query.title;     //title 값을 통해 모든 데이터 찾는 코드
  var condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {};

  di.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};





/////////// 단일 개체 검색


// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  di.findById(id) //req로 받아온 id값을 토대로 원하는 데이터 찾아줌
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Tutorial with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Tutorial with id=" + id });
    });
};





/////////// 개체 업데이트


// Update a Tutorial by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;
//req로 받아온 id 값을 토대로 해당 id 값의 받아온 현재 데이터가 최신 데이터로 간주하고 업데이트
  di.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Tutorial with id=${id}. Maybe Tutorial was not found!`
        });
      } else res.send({ message: "Tutorial was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Tutorial with id=" + id
      });
    });
};




/////////// 개체 삭제


// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;
//req로 받아온 id값을 토대로 해당 id의 데이터 삭제해줌
  di.findByIdAndRemove(id, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`
        });
      } else {
        res.send({
          message: "Tutorial was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Tutorial with id=" + id
      });
    });
};






///////////// 모든 개체 삭제

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  di.deleteMany({})//deleteMany는 DB 변수인 user의 모든 데이터 개체 삭제하는 메소드
    .then(data => {
      res.send({
        message: `${data.deletedCount} Tutorials were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all tutorials."
      });
    });
};




///////////// 조건에 따른 모든 개체 찾기


// Find all published Tutorials
exports.findAllPublished = (req, res) => {
  //DB의 변수 user의 데이터를 모두 찾아준다.
  di.find({ published: true })//published가 true일때 발동(프론트에서 처리)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};
