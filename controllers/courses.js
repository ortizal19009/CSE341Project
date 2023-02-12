const { getDb } = require("../DB/conection");
const { ObjectId } = require("mongodb");
const getCourses = (req, res) => {
  const db = getDb();
  let courses = [];
  db.collection("curses")
    .find()
    .forEach((course) => courses.push(course))
    .then(() => {
      res.status(200).send(courses);
    })
    .catch(() => {
      res.status(500).json({ error: "Any courses fuond them" });
    });
};
const getCoursesById = (req, res) => {
  const db = getDb();
  const id = ObjectId(req.params.id);
  db.collection("curses")
    .findOne({ _id:id })
    .then((doc) => {
      res.status(200).send(doc);
    })
    .catch(() => {
      res.status(500).json({ error: "Could not fetch the document by id" });
    });
};
const postCourses = (req, res) => {
  const db = getDb();
  const courses = req.body;
  console.log(courses);
  db.collection("curses")
    .insertOne(courses)
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((error) => {
      res.status(500).json({ err: "Could not create a new json" });
    });
};
const deleteCourses = (req, res) => {
    const db = getDb();
    db.collection("curses")
      .deleteOne({ _id: ObjectId(req.params.id) })
      .then((result) => {
        res.status(200).send(result);
      })
      .catch(() => {
        res.status(500).json({ error: "Could not delete the document by id" });
      });
  };
  const updateCourses = (req, res) => {
    const db = getDb();
    const courses = req.body;
    db.collection("curses")
      .updateOne({ _id: ObjectId(req.params.id) }, { $set: courses })
      .then((result) => {
        res.status(204).send(result);
      })
      .catch(() => {
        res.status(500).json({ error: "Could not update the document by id" });
      });
  };
module.exports = { getCourses,
    getCoursesById,
    postCourses,
    deleteCourses,
    updateCourses
 };
