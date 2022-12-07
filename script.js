let Kevin = document.getElementById("nombrekevin")
let información1 = document.getElementById("información1")

    Kevin.addEventListener("click", ()=>{
        if(información1.classList.contains("invisible")){
            información1.classList.remove("invisible")
            información2.classList.add("invisible")
        } else {
            información1.classList.add("invisible")
        }    
    })

let Dani = document.getElementById("nombredani")
let información2 = document.getElementById("información2")
    
    Dani.addEventListener("click", ()=>{
        if(información2.classList.contains("invisible")){
            información2.classList.remove("invisible")
            información1.classList.add("invisible")
        } else {
            información2.classList.add("invisible")
        }    
    })