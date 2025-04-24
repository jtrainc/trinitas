//arrays start and end with [square brackets]
const jon = ["Jon", "Sampson", 15];
const students = [
    jon,
    ["Brandon", "Jansky", 14],
    ["Jackson", "Cowart", 15],
];

function printStudentList() {
    for (const student of students) {
        const firstName = student[0];
        const age = student[2];
        const futureAge = 10 + age;

        console.log(firstName + " will be " + futureAge + " in 10 years");
    }
}

// printStudentList();

//There are a couple types of function syntaxes  we can use:
//1. the traditional style:
//      function (student) { return student[2] >= 15 }
//2. the newer array function style:
//      (student) => {return student[2] >= 15}
//3. array functions with implicit returns
//      (student) => student[2] >= 15}
//4. array functions with implicit returns
//      (s) => s[2] >= 15

//Lets find all student that are fifteen years or older
const fifteenPlus = students.filter ((student) => student[2] >= 15);
const studentInitials = students.map((student) => student[0][0] + student[1][0] );
const futureAges = fifteenPlus.map((student) => 10 + student[2]);
// for ( const student of students ) {
//     const age = student[2];
//     if ( age >= 15 ) {
//         fifteenPlus.push(student);
//     }
// }
console.log(fifteenPlus, studentInitials, futureAges);