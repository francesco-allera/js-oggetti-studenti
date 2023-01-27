// validation for numbers
function validNumber(num, min, max) {
    num = parseInt(num);

    if (isNaN(num))
        return false;
    if (min && num < min)
        return false;
    if (max && num > max)
        return false;

    return true;
}

// checks if input is a single word
function isString(str) {
    if (typeof str !== 'string')
        return false;
    if (!isNaN(str))
        return false;
    if (str.length <= 2)
        return false;
    if (str.includes(' '))
        return false;

    return true;
}

// return a string in lowercase with the first letter in uppercase
function firstLetterUp(str) {
    return str[0].toUpperCase() + str.slice(1).toLowerCase();
}

// cycle a question until the answer go through condition
function asking(question, condition, arg) {
    var answer;

    do {
        answer = prompt(question);
    } while (!condition(answer, arg));

    return answer;
}

// print all objects in 'students'
function printStudents(arr, html) {
    html.innerHTML = '';

    for (var i = 0; i < arr.length; i++) {
        html.innerHTML += '<li>' + arr[i].nome + ' ' + arr[i].cognome + '</li>';
    }
}


// variables
var studentOutput = document.getElementById('student-output');
var studentsOutput = document.getElementById('students-output');
var nameNS = document.getElementById('name');
var surnameNS = document.getElementById('surname');
var ageNS = document.getElementById('age');
var btnStudent = document.querySelector('#student-btn');
var year = new Date().getFullYear();


// create a 'student' object
var student = {
    'nome': 'Francesco',
    'cognome': 'Allera',
    'età': year - 1991
};

// print in HTML the keys/properties of 'student'
for (var key in student) {
    studentOutput.innerHTML += firstLetterUp(key) + ': ' + student[key] + '<br>';
}

// click on button shows/hides student's HTML
btnStudent.addEventListener('click', function () {
    if (window.getComputedStyle(studentOutput).display === "none")
        studentOutput.style.display = 'block';
    else
        studentOutput.style.display = 'none';
});


// create a 'students' array
var students = [
    {
        'nome': 'Aldo',
        'cognome': 'Baglio',
        'età': year - 1958
    },
    {
        'nome': 'Giacomo',
        'cognome': 'Poretti',
        'età': year - 1956
    },
    {
        'nome': 'Giovanni',
        'cognome': 'Storti',
        'età': year - 1957
    },
    student
];

// print all the students in array
printStudents(students, studentsOutput);


// adding prompts for create a new 'student'
var inputs = document.querySelectorAll('.inputs input');
var newStudent;

for (var i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('keydown', function (e) {
        if (e.keyCode === 13)
            document.querySelector('#new-student-btn').click();
    });
}

// clicking on button, if all the inputs are valid, print the 'newStudent'
document.querySelector('#new-student-btn').addEventListener('click', function () {
    newStudent = {};

    if (!isString(nameNS.value)) {
        alert('Nome non valido');

    } else if (!isString(surnameNS.value)) {
        alert('Cognome non valido');

    } else if (nameNS.value === surnameNS.value) {
        alert('Nome e cognome coincidono, riprova');

    } else if (!validNumber(ageNS.value, 1)) {
        alert('Età non valida');

    } else {
        // transforms all inputs values in correct format
        newStudent['nome'] = firstLetterUp(nameNS.value);
        newStudent['cognome'] = firstLetterUp(surnameNS.value);
        newStudent['età'] = parseInt(ageNS.value);

        // push the 'newStudent' in 'students', print everything, reset the inputs
        students.push(newStudent);
        printStudents(students, studentsOutput);
        nameNS.value = '', surnameNS.value = '', ageNS.value = '';
    }
});