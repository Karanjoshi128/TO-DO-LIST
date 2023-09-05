
let Button = document.getElementById('btn');
let input = document.getElementById('input');


Button.addEventListener('click', () => {
    let name = document.querySelector('#input').value;
    let input = document.getElementById('input');
    if (name == "") {
        console.log("Empty!");
    }
    else {
        let container = document.querySelector('.container');

        let li = document.createElement('li');
        li.textContent = name;
        li.className = ("create");

        let a = document.createElement('span');
        a.textContent = 'X';
        a.className = "remove";
        li.appendChild(a);

        let pos = container.firstElementChild;
        // console.log(pos);
        if (pos == null) {
            container.appendChild(li);
        }
        else {
            container.insertBefore(li, pos);
        }
        input.value = "";
        addstorage();
    }
});


let container = document.querySelector('.container');
container.addEventListener('click', function (e) {
    if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        addstorage();
        
    }
    else if(e.target.tagNAme === "LI"){
        e.target.classList.toggle("textdec");
    }
    
    
})




input.addEventListener('keypress', (e) => {
    if (e.key === "Enter") {
        document.getElementById('btn').click();
    }

})
function addstorage() {
    localStorage.setItem("data" , container.innerHTML);
    
}

function showData(){
    container.innerHTML = localStorage.getItem("data");
}

