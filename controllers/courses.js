const { getDb } = require("../DB/conection");
const { ObjectId } = require("mongodb");
const getCourses = (req, res) =>{
    const db = getDb();
    let courses = [];
    db.collection("curses")
    .find()
    .forEach(course => courses.push(course) )
    .then(()=>{
        res.status(200).send(courses);
    })
    .catch(()=>{
        res.status(500).json({error: "Any courses fuond them"})
    })
}
module.exports = {getCourses}