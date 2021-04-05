const qiuzDB = [
    {
        question: "01:What is the full form of HTML?",
        a: "Hey Text Markup Language",
        b: "HyperText Markup Language",
        c: "Hypertext Markup Language",
        d: "Hypertext Markup Locator",
        ans: "ans2",
        type: "radio"
    },
    {

        question: "02:What does CSS stands for?",
        a: "Colorful Style Sheets",
        b: "Cascading Style Sheets",
        c: "Computer Style Sheets",
        d: "Creative Style Sheets",
        ans: "ans",
        type: "textarea"
    },
    {
        question: "03:Inside which HTML element do we put the JavaScript?",
        a: "<script>",
        b: "<js>",
        c: "<scripting>",
        d: "<javascript>",
        ans: "ans1",
        type: "radio"
    },
    {
        question: "04:Which class provides a responsive fixed width container",
        a: ".container-fluid",
        b: ".container",
        c: ".container-fixed",
        d: ".container-sticky",
        ans: "ans2",
        type: "radio"
    },
    {
        question: "05:The Bootstrap grid system is based on how many columns?",
        a: "6",
        b: "5",
        c: "9",
        d: "12",
        ans: "ans4",
        type: "radio"
    },
    // {
    //     question: "06:What is the correct HTML element for inserting a line break?",
    //     a: "<br>",
    //     b: "<break>",
    //     c: "<lb>",
    //     d: "<hr>",
    //     ans: "ans1",
    //     type:"radio"
    // },
    // {
    //     question: "07:Choose the correct HTML element to define emphasized text?",
    //     a: "<em>",
    //     b: "<i>",
    //     c: "<italic>",
    //     d: "<strong>",
    //     ans: "ans1",
    //     type:"radio"
    // },
    // {
    //     question: "08:Which character is used to indicate an end tag?",
    //     a: "<",
    //     b: ">",
    //     c: "/",
    //     d: "^",
    //     ans: "ans3",
    //     type:"radio"
    // },
    // {
    //     question: "09:How do you write 'Hello World' in an alert box?",
    //     a: "msgBox('Hello World')",
    //     b: "alertBox('Hello World')",
    //     c: "msg('Hello World')",
    //     d: "alert('Hello World')",
    //     ans: "ans4",
    //     type:"radio"
    // },
    // {
    //     question: "10:How do you create a function in JavaScript?",
    //     a: "function myFunction()",
    //     b: "function = myFunction()",
    //     c: "myFunction()",
    //     d: "function.myFunction()",
    //     ans: "ans2",
    //     type:"radio"
    // },
]


const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');
const previous = document.querySelector('#prev');
const answers = document.querySelectorAll('.answer');
const radio = document.getElementById("radios");
const showScore = document.querySelector('#showScore');
let questionCount = 0;
let score = 0;

const deselectAll = (userResponse = null) => {
    answers.forEach((currentElement) => {
        if (currentElement.id == userResponse) {
            currentElement.checked = true;
        } else {
            currentElement.checked = false;
        }
    });
}

const loadQuestion = () => {

    const questionList = qiuzDB[questionCount];

    const quesoutput =

        `<h2 class="question">${questionList.question}</h2>
 <ul class="list-unstyled">
<li>
    <input type="radio" name="answer" id="ans1" class="answer" onclick="check()">
    <label for="ans1" id="option1">${questionList.a}</label>
</li>
<li>
    <input type="radio" name="answer" id="ans2" class="answer" onclick="check()">
    <label for="ans2" id="option2">${questionList.b}</label>
</li>
<li>
    <input type="radio" name="answer" id="ans3" class="answer" onclick="check()">
    <label for="ans3" id="option3">${questionList.c}</label>
</li>
<li>
    <input type="radio" name="answer" id="ans4" class="answer" onclick="check()">
    <label for="ans4" id="option4">${questionList.d}</label>
</li>
</ul>`


    question.innerHTML = quesoutput;
    // option1.innerText = questionList.a;
    // option2.innerText = questionList.b;
    // option3.innerText = questionList.c;
    // option4.innerText = questionList.d;

    console.log(questionList["type"]);
    console.log(questionList);


    if (questionList.hasOwnProperty('userResponse')) {
        deselectAll(questionList.userResponse);
        submit.disabled = false;
    } else {
        deselectAll();
        submit.disabled = true;
    }

    if (questionCount == 0) {
        prev.disabled = true;
        prev.style.visibility = "Hidden";
    }
    else if (questionCount >= 1 && questionCount <= qiuzDB.length - 1) {
        prev.disabled = false;
        prev.style.visibility = "visible";
        if (questionCount == qiuzDB.length - 1) {
            submit.innerHTML = "Finish";
        } else {
            submit.innerHTML = "Next";
        }
    }
    if (questionCount == qiuzDB.length - 1) {
        prev.style.visibility = "Hidden";
    }
}
loadQuestion();
const getCheckAnswer = () => {
    let answer;

    answers.forEach((currentElement) => {
        if (currentElement.checked) {
            // document.getElementById("submit").disabled = false;
            answer = currentElement.id;
        }

    });
    return answer;
};


submit.addEventListener('click', () => {

    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);

    qiuzDB[questionCount].userResponse = checkedAnswer;

    questionCount++;

    if (questionCount < qiuzDB.length) {
        loadQuestion();
    }
    else {
        // console.log(qiuzDB);
        for (i = 0; i < qiuzDB.length; i++) {
            // console.log(qiuzDB[i]);
            if ((qiuzDB[i].userResponse == qiuzDB[i].ans)) {

                score++;

            }
        }

        showScore.innerHTML = `
<h3>You Scored is ${score}/${qiuzDB.length} </h3>
<h3>You have attempted ${qiuzDB.length} questions.</h3>
`;
        showScore.classList.remove('scoreArea');
    }

});

function check() {
    submit.disabled = false;
}

prev.addEventListener('click', () => {


    if (questionCount < qiuzDB.length) {
        questionCount--;
        loadQuestion();
    }
});






// const qiuzDB1 = [
//     {
//         question:"What is full form of CSS?",
//         ans1:"cascading style sheet",
//     },
// ]

// const question = document.querySelector('.question');
// const submit = document.querySelector('#submit');
// const previous = document.querySelector('#prev');
// const answers = document.querySelectorAll('.answer');
// const textarea = document.getElementById("texts");
// const showScore = document.querySelector('#showScore');
// let questionCount = 0;
// let score = 0;

// const deselectAll = (userResponse = null) => {
//     answers.forEach((currentElement) => {
//         if (currentElement.id == userResponse) {
//             currentElement.checked = true;
//         } else {
//             currentElement.checked = false;
//         }
//     });
// }

// const loadQuestion = () => {

//     const questionList = qiuzDB1[questionCount];

//     const quesoutput =

//         `<h2 class="question">${questionList.question}</h2>
//  <ul class="list-unstyled">
//  <li>
//  <input type="textarea" name="answer" id="ans1" class="answer" onclick="check()">
// </li>
// `
//     question.innerHTML = quesoutput;
//     console.log(questionList["type"]);
//     console.log(questionList);


//     if (questionList.hasOwnProperty('userResponse')) {
//         deselectAll(questionList.userResponse);
//         submit.disabled = false;
//     } else {
//         deselectAll();
//         submit.disabled = true;
//     }

//     if (questionCount == 0) {
//         prev.disabled = true;
//         prev.style.visibility = "Hidden";
//     }
//     else if (questionCount >= 1 && questionCount <= qiuzDB1.length - 1) {
//         prev.disabled = false;
//         prev.style.visibility = "visible";
//         if (questionCount == qiuzDB1.length - 1) {
//             submit.innerHTML = "Finish";
//         } else {
//             submit.innerHTML = "Next";
//         }
//     }
//     if (questionCount == qiuzDB1.length - 1) {
//         prev.style.visibility = "Hidden";
//     }
// }
// loadQuestion();
// const getCheckAnswer = () => {
//     let answer;

//     answers.forEach((currentElement) => {
//         if (currentElement.checked) {
//             // document.getElementById("submit").disabled = false;
//             answer = currentElement.id;
//         }

//     });
//     return answer;
// };


// submit.addEventListener('click', () => {

//     const checkedAnswer = getCheckAnswer();
//     console.log(checkedAnswer);

//     qiuzDB1[questionCount].userResponse = checkedAnswer;

//     questionCount++;

//     if (questionCount < qiuzDB1.length) {
//         loadQuestion();
//     }
//     else {
//         // console.log(qiuzDB);
//         for (i = 0; i < qiuzDB1.length; i++) {
//             // console.log(qiuzDB[i]);
//             if ((qiuzDB1[i].userResponse == qiuzDB1[i].ans)) {

//                 score++;

//             }
//         }

//         showScore.innerHTML = `
// <h3>You Scored is ${score}/${qiuzDB1.length} </h3>
// <h3>You have attempted ${qiuzDB1.length} questions.</h3>
// `;
//         showScore.classList.remove('scoreArea');
//     }

// });

// function check() {
//     submit.disabled = false;
// }

// prev.addEventListener('click', () => {


//     if (questionCount < qiuzDB1.length) {
//         questionCount--;
//         loadQuestion();
//     }
// });



