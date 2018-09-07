var Student =  require('../models/student');

/**
 * List Students
 */
exports.list = (req, h) => {
  return Student.find({}).exec().then((student) => {

    return { students: student };

  }).catch((err) => {

    return { err: err };

  });
}

/**
 * Get Student by ID
 */
exports.get = (req, h) => {

  return Student.findById(req.params.id).exec().then((student) => {

    if(!student) return { message: 'Student not Found' };

    return { student: student };

  }).catch((err) => {

    return { err: err };

  });
}


/**
 * POST a Student
 */
exports.create = (req, h) => {

  const studentData = {
    studentId: req.payload.studentId,
    firstName: req.payload.firstName,
    middleName: req.payload.middleName,
    lastName: req.payload.lastName,
    preferredName: req.payload.preferredName,
    dob: req.payload.dob,
    guardianFirstName: req.payload.guardianFirstName,
    guardianLastName: req.payload.guardianLastName

  };

  return Student.create(studentData).then((student) => {

     return { message: "Student created successfully", student: student };

  }).catch((err) => {

    return { err: err };

  });
}

/**
 * PUT | Update Student by ID
 */
exports.update = (req, h) => {

  return Student.findById(req.params.id).exec().then((student) => {

    if (!student) return { err: 'Student not found' };

    student.studentId = req.payload.studentId;
    student.firstName = req.payload.firstName;
    student.middleName = req.payload.middleName;
    student.lastName = req.payload.lastName;
    student.preferredName = req.payload.preferredName;
    student.dob = req.payload.dob;
    student.guardianFirstName = req.payload.guardianFirstName;
    student.guardianLastName = req.payload.guardianLastName;

    student.save(studentData);

  }).then((data) => {

      return { message: "Student data updated successfully" };

  }).catch((err) => {

      return { err: err };

  });
}

/**
 * Delete Student by ID
 */
exports.remove = (req, h) => {

  return Student.findById(req.params.id).exec(function (err, student) {

    if (err) return { dberror: err };
    if (!student) return { message: 'Student not found' };

    student.remove(function (err) {
      if (err) return { dberror: err };

      return { success: true };
    });
  });
}