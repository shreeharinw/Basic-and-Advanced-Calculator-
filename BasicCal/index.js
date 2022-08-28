let display = document.getElementById("display");
let buttons = Array.from(document.getElementsByClassName("button"));

//filter,map,reduce,forEach
let x = buttons.map((button)=>{
    button.addEventListener("click",(e)=>{
        console.log(e.target.innerText);
        switch(e.target.innerText){
            case "C" : display.innerText = "";
            case "Backspace":
                if(display.innerText){
                    display.innerText = display.innerText.substring(0,display.innerText.length-1);
                }else{
                    alert("No value entered");
                }
            break;
            case "=":
                if(display.innerText==""){
                    alert("No value entered");
                }else{
                    try{
                        display.innerText = eval(display.textContent);
                    }
                    catch(e){
                        console.error(e);
                        display.innerText = "Error";
                    }
                    
                }
                break;
            default: display.innerText+=e.target.innerText;
        }
    })
})
console.log("x is ",x);