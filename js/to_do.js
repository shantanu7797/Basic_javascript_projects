let title = document.querySelector(".input_box1")
let desc = document.querySelector(".input_box2")
let container2 = document.querySelector(".container3")
let deleteKey = document.querySelectorAll(".deleteKey")
let block = document.querySelectorAll(".block")
let flash = document.querySelector(".flash")

let submit = document.querySelector(".input_box_main_img")
let clear = document.querySelector(".btn2")

function randomChar() {
    return Math.random().toString(36).substring(2, 5);
}

function flash_show() {
    setTimeout(() => {
        flash.style.display = "block"
    }, 700);
}

function createTaskElement(randomKey, titlec, descc) {
    const taskElement = document.createElement('tr');
    taskElement.id = randomKey;
    taskElement.className = 'block';
    taskElement.innerHTML = `
    <tr>
        <td>${titlec}</td>
        <td class="block_l2">${descc ? descc : 'No Due Date'}</td>
        <td>
            <div class="td_div checkBox"><img src="/images/img_check.png" alt=""></div>
            <div class="td_div deleteKey"><img src="/images/img_del.png" alt=""></div>
        </td>
    </tr>
    `;

    // if(ta skElement.querySelector(".block_l2").innerHTML = " "){ taskElement.querySelector(".block_l2").innerHTML = "No Due Date"}

    const checkButton = taskElement.querySelector(".checkBox");
    let isGray = true;
    checkButton.addEventListener("click", function(){
        if(isGray){
            taskElement.style.backgroundColor = "rgb(208, 202, 202)"
        }
        else{
            taskElement.style.backgroundColor = "white"
        }
        isGray = !isGray
    });

    const deleteButton = taskElement.querySelector(".deleteKey");
    deleteButton.addEventListener("click", function () {
        deleteTask(taskElement, randomKey);
    });

    return taskElement;
}

function deleteTask(taskElement, randomKey) {
    container2.removeChild(taskElement);
    localStorage.removeItem(randomKey);
}

submit.addEventListener("click", function (e) {
    e.preventDefault();
    let titlec = title.value;
    let descc = desc.value;
    let randomKey = randomChar();

    if (titlec === "") {
        flash.style.visibility = "visible"
        setTimeout(() => {
            flash.style.visibility = "hidden"
        }, 400);
    }
    else {
        localStorage.setItem(`${randomKey}`, JSON.stringify([titlec, descc]));
        container2.appendChild(createTaskElement(randomKey, titlec, descc));
        title.value = "";
        desc.value = "";
    }


});

clear.addEventListener("click", function (e) {
    e.preventDefault();
    localStorage.clear();
    container2.innerHTML = "";
});

block.forEach((e) => {
    let d = e.querySelector(".deleteKey");
    d.addEventListener("click", function () {
        deleteTask(e, e.id);
    });
});
