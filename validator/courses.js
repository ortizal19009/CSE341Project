const { validator } = require("../utils/uValidate");

const saveCourses = (req, res, next) => {
  const validationRule = {
    code: "required|string",
    name: "required|string",
    tutor: "required|string",
  };
  validator(req.body, validationRule, {}, (err, status) => {
    if (!status) {
      res.status(412).send({
        success: false,
        message: "Validation faild",
        data: err,
      });
    } else {
      next();
    }
  });
};
module.exports = {
  saveCourses,
};
