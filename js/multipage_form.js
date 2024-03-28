let tab = document.getElementsByClassName("tab")
var currTab = 0;
showTab(currTab)

function showTab(n){
    tab[n].style.display = "flex"

    if(n == 0){
        document.getElementById("prevBtn").style.display = "none"
    }
    else{
        document.getElementById("prevBtn").style.display = "inline"
    }
    if(n == (tab.length - 1)){
        document.getElementById("nextBtn").innerHTML = "Submit"
    }
    else{
        document.getElementById("nextBtn").innerHTML = "Next"
    }
}


function nextPrev(n){

    if(n == 1 && !validateForm()){
        return false;
    } 
    tab[currTab].style.display = "none"
    currTab = currTab + n
    if(currTab >= tab.length){
        document.querySelector(".btn").style.display = "none"
        document.querySelector(".another").style.display = "block"
        document.querySelector(".containerh1").style.display = "none"
        setTimeout(()=>{
            document.querySelector(".another").style.display = "none"

            document.getElementById("regForm").submit()
        },1000)
       
        return false
    }
    showTab(currTab)
}

function validateForm(){
    var valid = true
    let x = tab[currTab].getElementsByTagName("input")

    for(let i = 0; i < x.length; i++){
        if(x[i].value == ""){
            x[i].classList.add("invalid")
            setTimeout(() => {
                x[i].classList.remove("invalid")
            }, 400);
            valid = false
        }
    }
    return valid
}