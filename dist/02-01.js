"use strict";
var bob = {
    id: '',
    name: '',
    gender: 'female',
    age: 23,
};
function findStudent(studentList, studentId) {
    if (studentList.length === 0) {
        return undefined;
    }
    studentList.find(function (x) { return x.age; });
}
