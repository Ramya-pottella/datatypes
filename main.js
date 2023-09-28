var name="Datatypes";
function stringGenerate(){
    document.getElementById("string").textContent=name;
}

function numberGenerate(){
    let number="28";
    document.getElementById("number").textContent=number;
}

function booleanGenerate(){
    let isThursday=true;
    document.getElementById("boolean").textContent=isThursday;
}
function nullGenerate(){
    let nullvalue=null;
    document.getElementById("null").textContent=nullvalue??"its a null datatype";
}
function undefinedGenerate(){
    let undefinedvalue;
    document.getElementById("undefined").textContent=undefinedvalue===undefined?"it's a undefined data type":undefinedvalue;
}

function objectGenerate(){
    let info={
        date:"28-09-2023",
        day:"thursday"
    };
    document.getElementById("object").textContent=info.date;
}

function arrayGenerate(){
    let myArray=["string","number","boolean","null","undefined","object","array","function"];
    document.getElementById("array").textContent=myArray[6];
}

function functionGenerate(){
    let functionval="function completed";
    document.getElementById("function").textContent=functionval;
}
