var istatus = document.querySelector("h5")
var add = document.querySelector("#add")
var check = 0;
add.addEventListener("click",function(){
    if (check == 0) {
        istatus.innerHTML = "Friends";
        istatus.style.color = "green";
        check = 1;
        add.innerHTML = "Remove Friend"
    }
    else{
        istatus.innerHTML = "Stranger";
        istatus.style.color = "red";
        check = 0;
        add.innerHTML = "Add Friend"
    }

})

