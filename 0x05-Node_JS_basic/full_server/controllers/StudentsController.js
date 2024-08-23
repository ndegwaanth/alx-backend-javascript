const readDatabase = require("../utils");

class StudentsController {
    static getAllStudents(request, response) {
        message = 'This is the list of our students';
        readDatabase('database.csv').then(groups => {
        let tracker = 1;
        for (let group in groups) {
            const count = groups[group].length;
            const studentGroup = groups[group].join(', ')
            if (studentGroup) {
                message += `Number of students in ${group}: ${count}. List: ${studentGroup}`;
            }
            if (tracker < items) {
                message += '\n';
            }
            tracker += 1;
        };
        return message;}).catch(err => {
            return 'Cannot load the database';
        })}

    static getAllStudentsByMajor(request, response) {
        
    }
}