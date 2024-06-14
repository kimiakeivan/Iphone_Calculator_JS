const display = document.getElementById("display");

let total_value = "";
let current_value = "";


function appendToDisplay(input){
    current_value += input;
    display.value = current_value;
    total_value += input;
}


function operator(input){
    total_value += input;   
    current_value = "";
}


function rapidCalculate(input){
    if (input == '/100'){
        total_value += input;
        total_value = eval(total_value);
        current_value = total_value
        display.value = current_value;
    }

    else {
            current_value = eval(-display.value);
            display.value = current_value;
            total_value += current_value;
            total_value += current_value;
        }

}


function clearDisplay(){
    display.value = "";
    total_value = "";
    current_value = "";
}


function dotManage(input){
    if (display.value == ""){
        total_value = "0"+input;
        current_value = "0"+input;
        display.value = current_value;
    }

    if (current_value.indexOf(".") === -1) {
        total_value += input;
        current_value += input;
        display.value = current_value;
    }
}



function calculate(){
    try{

        total_value = eval(total_value);
        current_value = total_value;
        display.value = current_value;
    }

    catch(error){
        display.value = "Error";
    }
}