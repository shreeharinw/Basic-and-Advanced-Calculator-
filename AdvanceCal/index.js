let input = document.getElementById("display");

function clearDisplay(){
     input.innerText = "";
}

function addChar(character){ // "2"
    //input.innerText = 3
    if(input.innerText==null || input.innerText==undefined){
        input.innerText = character; //input.innerText = "2"
    }else{
        input.innerText+=character; //23
    }
}

function deleteChar(){
    input.innerText = input.innerText.substring(0,input.innerText.length-1);
}


function changeSign(){
    if(input.innerText.substring(0,1) =='-'){
        input.innerText = input.innerText.substring(1,input.innerText.length);
    }
    else{
        input.innerText = "-" + input.innerText;
    }
}

function compute(){
    try{
        input.innerText = eval(input.innerText);
    }
    catch(e){
        alert("Inavlid expression to eval");
        console.error(e);
        }
    
}

function square(){
    input.innerText = eval(input.innerText) * eval(input.innerText);
}

function validateExpression(){
    try{
        eval(input.innerText);
        return true;
    }catch(e){
        alert("Inavlid expression to eval");
        return false;
    }
}

function ln(){
    input.innerText = Math.log( eval(input.innerText));
}

function cos(){
    input.innerText = Math.cos( eval(input.innerText));
}

function sin(){
    input.innerText = Math.sin( eval(input.innerText));
}

function tan(){
    input.innerText = Math.tan( eval(input.innerText));
}

function exp(){
    input.innerText = Math.exp( eval(input.innerText));
}

function sqrt(){
    input.innerText = Math.sqrt( eval(input.innerText));
}

function checkNum(){
    let inputString = input.innerText;
    for(let i=0;i<inputString.length;i++){
        let ch = inputString.substring(i,i+1);
        if( ch<"0" || ch>"9") {
            if(ch!="/" && ch!="*" && ch!="+" && ch!="(" && ch!=")" && ch!="-" && ch!="."){
                alert("Invalid entry");
                return false;
            }
        }
    }
    return true;
}


//Any problem

// Funtionality >>>>> Performance & Presentation 


//Performance
//  Execution time & execution memory
// Code quality 1000 lines of code for a small task 
                // reusablity
                // readability
                // scalable

//Presentation
//  UI & UX


