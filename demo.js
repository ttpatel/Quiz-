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
        ans: "cascading style sheet",
        type: "textarea"
    },
    {
        question: "03:What is the correct HTML tag for inserting a line break?",
        a: "br",
        b: "br",
        c: "lb",
        d: "hr",
        ans: ["ans1", "ans2"],
        type: "checkbox"
    },
    {
        question: "04:Which class provides a responsive fixed width container",
        a: "container-fluid",
        b: "container",
        c: "container-fixed",
        d: "container-sticky",
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

    {
        question: "06:Inside which HTML element do we put the JavaScript?",
        a: "script",
        b: "js",
        c: "scripting",
        d: "javascript",
        ans: "ans1",
        type: "radio"
    },
    // {
    //     question: "07:Choose the correct HTML element to define emphasized text?",
    //     a: "em",
    //     b: "i",
    //     c: "italic",
    //     d: "strong",
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
// let option1 = document.querySelector('#option1');
// let option2 = document.querySelector('#option2');
// let option3 = document.querySelector('#option3');
// let option4 = document.querySelector('#option4');
let option11 = document.querySelector('#option11');
let option22 = document.querySelector('#option22');
let option33 = document.querySelector('#option33');
let option44 = document.querySelector('#option44');
let submit = document.querySelector('#submit');
let previous = document.querySelector('#prev');
let answers = document.querySelectorAll('.answer');
const radio = document.getElementById("radios");
// const text = document.getElementById("texts");
// const checkbox = document.getElementById("checks");
let showScore = document.querySelector('#showScore');
let questionCount = 0;
let score = 0;

const deselectAll = (questionList) => {

    let userResponse = questionList.hasOwnProperty('userResponse') ? questionList.userResponse : "";
    console.log(userResponse);

    if (questionList.type == "radio") {
        answers.forEach((currentElement) => {

            if (currentElement.id == userResponse) {
                currentElement.checked = true;
            } else {
                currentElement.checked = false;
            }
        });
    }
    if (questionList.type == "checkbox") {
        console.log(answers)
        console.log(userResponse)
        answers.forEach((currentElement) => {
            console.log(currentElement)
            if (currentElement.id == userResponse) {
                currentElement.checked = true;
            } else {
                currentElement.checked = false;
            }
        });
    }
    if (questionList.type == "textarea") {
        answers[0].defaultValue = userResponse;
    }
}

const loadQuestion = () => {
    let questionList = qiuzDB[questionCount];

    if (questionList.type == "radio") {
        // console.log("radio123")
        radio.innerHTML =

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
    }
    if (questionList.type == "textarea") {


        radio.innerHTML =
            `
            <h2 class="question">${questionList.question}</h2>
          <input type="text" name="answer" id="ans1" class="answer textarea" onclick="check()" placeholder="Write your answer here...">
          `
    }
    if (questionList.type == "checkbox") {

        radio.innerHTML =

            `<h2 class="question">${questionList.question}</h2>
        <ul class="list-unstyled">
       <li>
           <input type="checkbox" name="answer" id="ans1" class="answer" onclick="check()">
           <label for="ans1" id="option1">${questionList.a}</label>
       </li>
       <li>
           <input type="checkbox" name="answer" id="ans2" class="answer" onclick="check()">
           <label for="ans2" id="option2">${questionList.b}</label>
       </li>
       <li>
           <input type="checkbox" name="answer" id="ans3" class="answer" onclick="check()">
           <label for="ans3" id="option3">${questionList.c}</label>
       </li>
       <li>
           <input type="checkbox" name="answer" id="ans4" class="answer" onclick="check()">
           <label for="ans4" id="option4">${questionList.d}</label>
       </li>
       </ul>`

    }
    answers = document.querySelectorAll('.answer');

    if (questionList.hasOwnProperty('userResponse')) {
        deselectAll(questionList);
        submit.disabled = false;
    } else {
        deselectAll(questionList);
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
};
loadQuestion();


let getCheckAnswer = () => {
    let questionList = qiuzDB[questionCount];

    if (questionList.type == "checkbox") {
        let answer = [];
        let answers = document.querySelectorAll('.answer');
        answers.forEach((currentElement) => {
            if (currentElement.checked) {
                answer.push(`${currentElement.id}`);

            }
        });
        console.log(answer)
        return answer;
    };
    if (questionList.type == "radio") {
        let answer;
        let answers = document.querySelectorAll('.answer');
        answers.forEach((currentElement) => {
            if (currentElement.checked) {
                answer = currentElement.id;

            }
        });
        console.log(answer)
        return answer;
    };

    if (questionList.type == "textarea") {
        let answer;
        let answers = document.querySelector('#ans1');
        answer = answers.value;
        console.log(answer)
        return answer;
    };
};

submit.addEventListener('click', () => {

    const checkedAnswer = getCheckAnswer();
    // console.log(checkedAnswer);

    qiuzDB[questionCount].userResponse = checkedAnswer;

    questionCount++;


    if (questionCount < qiuzDB.length) {
        loadQuestion();
    }
    else {

        for (i = 0; i < qiuzDB.length; i++) {
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

// submit.addEventListener('click', () => {
// let questionList =  qiuzDB[questionCount];
// if(questionList.type == "textarea")
// {
//     submit.disabled = true;
// }
// else{
//     submit.disabled = false;
// }

// });