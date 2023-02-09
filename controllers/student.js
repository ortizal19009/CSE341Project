const { getDb } = require("../DB/conection");
const { ObjectId } = require("mongodb");
const getStudents = (req, res) =>{
    const db = getDb();
    let students = [];
    db.collection("student")
    .find()
    .forEach(student => students.push(student) )
    .then(()=>{
        res.status(200).send(students);
    })
    .catch(()=>{
        res.status(500).json({error: "Any Students fuond them"})
    })
}
module.exports = {getStudents}