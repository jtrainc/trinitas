//arrays start and end with [square brackets]
const jon = ["Jon", "Sampson", 15];
const students = [
jon,
[ "Brandon", "Jansky", 2],
[ "Jackson", "Cowart", 104],
];

function printStudentList () {
    for ( const student of students) {
        const firstName = student[0];
        const age = student[2];
        const futureAge = 10 + age;
        
        console.log( firstName + " will be " + futureAge + " in 10 years" );
    }
}

printStudentList();