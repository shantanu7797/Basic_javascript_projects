let questions = [
    {
        id: 0,
        question: 'Which of the following are closures in Javascript?',
        answers: [
            { text: 'Variables', correct: false },
            { text: 'Functions', correct: false },
            { text: 'Objects', correct: false },
            { text: 'All of the above', correct: true }
        ]
    },
    {
        id: 1,
        question: 'What is a Variable in JavaScript?',
        answers: [
            { text: 'A section of the webpage', correct: false },
            { text: 'A container for storing data values', correct: true },
            { text: 'A type of JavaScript function', correct: false },
            { text: 'An operation in mathematics', correct: false }
        ]
    },
    {
        id: 2,
        question: 'Javascript is an _______ language?',
        answers: [
            { text: 'Object-Oriented', correct: true },
            { text: 'Object-Based', correct: false },
            { text: 'Procedural', correct: false },
            { text: 'None of the above', correct: false }
        ]
    },
    {
        id: 3,
        question: 'Which of the following keywords is used to define a variable in Javascript?',
        answers: [
            { text: 'var', correct: false },
            { text: 'let', correct: false },
            { text: 'Both A and B', correct: true },
            { text: 'None of the above', correct: false }
        ]
    },
    {
        id: 4,
        question: 'Which of the following methods is used to access HTML elements using Javascript?',
        answers: [
            { text: 'getElementById()', correct: false },
            { text: 'getElementsByClassName()', correct: false },
            { text: 'Both A and B', correct: true },
            { text: 'None of the above', correct: false }
        ]
    },
    {
        id: 5,
        question: 'Upon encountering empty statements, what does the Javascript Interpreter do?',
        answers: [
            { text: 'Throws an error', correct: false },
            { text: 'Ignores the statements', correct: true },
            { text: 'Gives a warning', correct: false },
            { text: 'None of the above', correct: false }
        ]
    },
    {
        id: 6,
        question: 'Which of the following methods can be used to display data in some form using Javascript?',
        answers: [
            { text: 'document.write()', correct: false },
            { text: 'console.log()', correct: false },
            { text: 'window.alert()', correct: false },
            { text: 'All of the above', correct: true }
        ]
    },
    {
        id: 7,
        question: 'How can a datatype be declared to be a constant type?',
        answers: [
            { text: 'const', correct: true },
            { text: 'var', correct: false },
            { text: 'let', correct: false },
            { text: 'constant', correct: false }
        ]
    },
    {
        id: 8,
        question: 'What keyword is used to check whether a given property is valid or not?',
        answers: [
            { text: 'in', correct: true },
            { text: 'is in', correct: false },
            { text: 'exists', correct: false },
            { text: 'lies', correct: false }
        ]
    },
    {
        id: 9,
        question: 'When an operator’s value is NULL, the typeof returned by the unary operator is:',
        answers: [
            { text: 'Boolean', correct: false },
            { text: 'Undefined', correct: false },
            { text: 'Object', correct: true },
            { text: 'Integer', correct: false }
        ]
    },
    {
        id: 10,
        question: 'Which function is used to serialize an object into a JSON string in Javascript?',
        answers: [
            { text: 'stringify()', correct: true },
            { text: 'parse()', correct: false },
            { text: 'convert()', correct: false },
            { text: 'None of the above', correct: false }
        ]
    }

]

let originalQuestions = [...questions];
let questions_length = originalQuestions.length

let start = document.querySelector(".block2_btn1")
let submit = document.querySelector(".block2_btn2")
let restart = document.querySelector(".block2_btn3")

let block1_p1 = document.querySelector(".block1_p1")
let block1_p2 = document.querySelector(".block1_p2")
let block1_p3 = document.querySelector(".block1_p3")

let q = document.querySelector(".block1_p2_h1")
let o1 = document.querySelector(".option1")
let o2 = document.querySelector(".option2")
let o3 = document.querySelector(".option3")
let o4 = document.querySelector(".option4")
let count = 0


start.addEventListener("click", () => {


    start.classList.remove("flex")
    start.classList.add("hidden")
    start.innerHTML = "Next"
    block1_p1.classList.remove("flex")
    block1_p1.classList.add("hidden")
    block1_p2.classList.remove("hidden")
    block1_p2.classList.add("block")

    let random = Math.floor(Math.random() * questions.length)

    block1_p2.innerHTML = ""
    block1_p2.innerHTML = `<h1 class="block1_p2_h1 text-2xl font-semibold">${questions[random].question}</h1>
        <div class="grid block1_p2_grid grid-cols-2 my-8 gap-10">
            <div class="option option1 m-auto w-[95%] flex justify-center text-center rounded-md py-1 bg-gray-500 text-white border-2 border-black cursor-pointer" data-result="${questions[random].answers[0].correct}">${questions[random].answers[0].text}</div>
            <div class="option option2 m-auto w-[95%] flex justify-center text-center rounded-md py-1 bg-gray-500 text-white border-2 border-black cursor-pointer" data-result="${questions[random].answers[1].correct}">${questions[random].answers[1].text}</div>
            <div class="option option3 m-auto w-[95%] flex justify-center text-center rounded-md py-1 bg-gray-500 text-white border-2 border-black cursor-pointer" data-result="${questions[random].answers[2].correct}">${questions[random].answers[2].text}</div>
            <div class="option option4 m-auto w-[95%] flex justify-center text-center rounded-md py-1 bg-gray-500 text-white border-2 border-black cursor-pointer" data-result="${questions[random].answers[3].correct}">${questions[random].answers[3].text}</div>
        </div>`


    let option = block1_p2.querySelectorAll(".option")

    option.forEach((e) => {
        e.addEventListener("click", () => {

            
            if (e.dataset.result == "true") {
                count++
            }

            option.forEach((ele) => {
                
                if (ele.dataset.result == "true") {
                    ele.classList.remove("bg-gray-500")
                    ele.classList.add("bg-green-600")
                }
                if (ele.dataset.result == "false") {
                    ele.classList.remove("bg-gray-500")
                    ele.classList.add("bg-red-600")
                }
            })

            if (questions.length === 0) {
                start.classList.remove("flex")
                start.classList.add("hidden")
                submit.classList.remove("hidden")
                submit.classList.add("block")

                submit.addEventListener("click", () => {
                    submit.classList.remove("block")
                    submit.classList.add("hidden")
                    block1_p2.classList.remove("block")
                    block1_p2.classList.add("hidden")
                    block1_p3.classList.remove("hidden")
                    block1_p3.classList.add("flex")
                    block1_p3.innerHTML = `<h1>Quiz Completed</h1>
                        <h2 class="font-normal">Your Score: ${count} out of ${questions_length}</h2>`
                    restart.classList.remove("hidden")
                    restart.classList.add("block")

                })
            }
            else {
                start.classList.remove("hidden")
                start.classList.add("flex")
            }
        })

    })

    questions.splice(random, 1);

})


restart.addEventListener("click", () => {

    restart.classList.remove("block")
    restart.classList.add("hidden")

    count = 0;
    questions = [...originalQuestions]

    block1_p3.classList.remove("flex")
    block1_p3.classList.add("hidden")
    block1_p1.classList.remove("hidden")
    block1_p1.classList.add("flex")

    start.classList.remove("hidden");
    start.classList.add("flex");
    start.innerHTML = "Start"
})





