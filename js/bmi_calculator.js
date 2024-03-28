let btn_standard = document.querySelector(".btn_standard")
let btn_metric = document.querySelector(".btn_metric")

let inches = document.querySelector(".card1_p2_l2")
let p1 = document.querySelector(".card1_p2_l1_p")
let p2 = document.querySelector(".card1_p2_l2_p")
let p3 = document.querySelector(".card2_p2_p1")

let calculate = document.querySelector(".card3_btn")
let i1 = document.querySelector(".card1_p2_l1_i")
let i2 = document.querySelector(".card1_p2_l2_i")
let i3 = document.querySelector(".card2_p2_i")
let output = document.querySelector(".card4_i")
let category = document.querySelector(".category")
output.readOnly = true


btn_metric.addEventListener("click", function () {
    btn_metric.classList.remove("bg-white")
    btn_metric.classList.remove("text-violet-500")
    btn_metric.classList.add("bg-violet-500")
    btn_metric.classList.add("text-white")
    btn_standard.classList.remove("text-white")
    btn_standard.classList.remove("bg-violet-500")
    btn_standard.classList.add("bg-white")
    btn_standard.classList.add("text-violet-500")
    inches.style.display = "none"
    p1.innerHTML = "cm"
    p3.innerHTML = "kg"
    i1.value = ""
    i3.value = ""
    output.value = ""
    category.innerHTML = ""
    category.classList.add("hidden")
    category.classList.remove("block")
})
btn_standard.addEventListener("click", function () {
    btn_metric.classList.add("bg-white")
    btn_metric.classList.add("text-violet-500")
    btn_metric.classList.remove("bg-violet-500")
    btn_metric.classList.remove("text-white")
    btn_standard.classList.add("text-white")
    btn_standard.classList.add("bg-violet-500")
    btn_standard.classList.remove("bg-white")
    btn_standard.classList.remove("text-violet-500")
    inches.style.display = "flex"
    p1.innerHTML = "feet"
    p3.innerHTML = "pounds"
    i1.value = ""
    i2.value = ""
    i3.value = ""
    output.value = ""
    category.innerHTML = ""
    category.classList.add("hidden")
    category.classList.remove("block")
})

calculate.addEventListener("click", function () {
    let data = ""
    if (inches.style.display === "none") {
        data = eval(`(${i3.value}/${i1.value}/${i1.value} * 10000)`).toFixed(2)
    }
    else {
        let s1 = eval(`(${i1.value}*12) + (${i2.value})`)
        let s2 = eval(s1 * s1)
        let s3 = eval(`${i3.value}`)
        data = eval(`(703*${s3})/(${s2})`).toFixed(2)
    }
    output.value =  data

    category.classList.add("block")
    category.classList.remove("hidden")
    checkCategory(data)
})

const checkCategory = (data) =>{
    if(data < 18.5){
        category.innerHTML = "Underweight"
        category.classList.add("bg-yellow-500")
        category.classList.remove("bg-violet-200")
        category.classList.remove("bg-green-500")
        category.classList.remove("bg-orange-500")
        category.classList.remove("bg-red-500")
    }
    else if(data >= 18.5 && data <= 25){
        category.innerHTML = "Normal weight"
        category.classList.add("bg-green-500")
        category.classList.remove("bg-violet-200")
        category.classList.remove("bg-yellow-500")
        category.classList.remove("bg-orange-500")
        category.classList.remove("bg-red-500")
    }
    else if(data > 25 && data <= 30){
        category.innerHTML = "Overweight"
        category.classList.add("bg-orange-500")
        category.classList.remove("bg-red-500")
        category.classList.remove("bg-yellow-500")
        category.classList.remove("bg-green-500")
        category.classList.remove("bg-violet-200")
    }
    else if(data > 30){
        category.innerHTML = "Obese"
        category.classList.add("bg-red-500")
        category.classList.remove("bg-violet-200")
        category.classList.remove("bg-yellow-500")
        category.classList.remove("bg-orange-500")
        category.classList.remove("bg-green-500")
    }
}
