//const { rejects } = require('node:assert');
const fs = require('node:fs');
//const { resolve } = require('node:path');
function readDatabase(path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf-8', (err, data) => {
            if (err) {
                reject(new Error('Cannot load the database'));
            } else {
                const studentsRows = data.split('\n').slice(1);
                const students = studentsRows.map((row) => {
                    const data = row.split(',')
                    return {
                        firstname: data[0],
                        lastname: data[1],
                        age: data[2],
                        field: data[3]
                    }
                })
                // group the students using their field of study
                let groups = {};
                students.forEach((student) => {
                    // if the student's field doesnt exists initialize it
                    if(!groups[student.field]) {
                        groups[student.field] = [];
                    }
                    // push student's first name to the list
                    groups[student.field].push(student.firstname)
                });
                resolve(groups);
            }
        })
    })
}
module.exports = readDatabase;