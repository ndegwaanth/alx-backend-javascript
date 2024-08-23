const express = require('express');
const app = express();
const fs = require('node:fs');
const path = require('node:path');
//const { resolve } = require('node:path');
function countStudents(path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf-8', (err, data) => {
            if (err) {
                reject(new Error('Cannot load the database'))
            } else {
                const lines = data.split('\n').slice(1);
                let count = 0;
                for (let line of lines) {
                    if (line) {
                        count += 1;
                    }
                }
                message = `Number of students: ${count}\n`
                // this part is pending
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
                // console.log(groups)
                let items = 0;
                for (let g in groups) {
                    if (groups[g].join(', ')) {
                        items += 1;
                    }
                }
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
                }
                resolve(message);
            }
        })
    })
}
app.get('/', (req, res) => {
    res.send('Hello Holberton School!');
})
app.get('/students', (req, res) => {
    res.write('This is the list of our students\n');
    const path = process.argv[2];
    countStudents(path).then(message => res.end(message)).catch(err => res.end(err));
})
app.listen(1245)
module.exports = app