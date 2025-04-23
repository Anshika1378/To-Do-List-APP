let inputs = document.getElementById('inputapp');
let text = document.querySelector('.text');

function Add(){
    if (inputs.value == ""){
        alert ("Please enter a task")
    }else{
        let newEle = document.createElement("ul");
        newEle.innerHTML =`${inputs.value} <i class="fa-solid fa-trash"></i>`;
        text.appendChild(newEle);
        inputs.value= "";
        newEle.querySelector("i").addEventListener("click",remove);
        function remove(){
            newEle.remove();
        }
    }
}
