const { getDb } = require("../DB/conection");
const { ObjectId } = require("mongodb");
const getStudents = (req, res) => {
  const db = getDb();
  let students = [];
  db.collection("student")
    .find()
    .forEach((student) => students.push(student))
    .then(() => {
      res.status(200).send(students);
    })
    .catch(() => {
      res.status(500).json({ error: "Any Students fuond them" });
    });
};
const getStudentById = (req, res) => {
  const db = getDb();
  const id = new ObjectId(req.params.id);
  db.collection("student")
    .findOne({ _id: id })
    .then((doc) => {
      res.status(200).send(doc);
    })
    .catch(() => {
      res.status(500).json({ error: "Could not fetch the document by id" });
    });
};
const postStudent = (req, res) => {
  const db = getDb();
  const student = req.body;
  db.collection("student")
    .insertOne(student)
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((error) => {
      res.status(500).json({ err: "Could not create a new json" });
    });
};
const deleteStudent = (req, res) => {
  const db = getDb();
  const id = new ObjectId(req.params.id);
  db.collection("student")
    .deleteOne({ _id: id })
    .then((result) => {
      res.status(200).send(result);
    })
    .catch(() => {
      res.status(500).json({ error: "Could not delete the document by id" });
    });
};
const updateStudent = (req, res) => {
  const db = getDb();
  const id = new ObjectId(req.params.id);
  const student = req.body;
  db.collection("student")
    .updateOne({ _id: id }, { $set: student })
    .then((result) => {
      res.status(204).send(result);
    })
    .catch(() => {
      res.status(500).json({ error: "Could not update the document by id" });
    });
};
module.exports = {
  getStudents,
  getStudentById,
  postStudent,
  deleteStudent,
  updateStudent,
};
