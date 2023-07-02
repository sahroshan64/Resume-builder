function addNewWEField(){
   let newNode= document.createElement("textarea");
   newNode.classList.add("form-control");
   newNode.classList.add("mt-2")
   newNode.setAttribute('placeholder','enter here')
   newNode.classList.add("weField");
    let weADDButtonOb = document.getElementById("weAddButton");
    let weOb= document.getElementById('we');
    weOb.insertBefore(newNode,weADDButtonOb);

}
function addNewAQField(){
    let newNode1= document.createElement("textarea");
    newNode1.classList.add("form-control");
    newNode1.classList.add("mt-2")
    newNode1.setAttribute('placeholder','enter here')
    newNode1.classList.add("weField"); 
     let aqAddButtonOb = document.getElementById("aqAddButton");
     let aqOb= document.getElementById("aq"); 
     aqOb.insertBefore(newNode1,aqAddButtonOb);
}   

// generating Cv  
function generateCV(){
    // console.log("generate")
    let nameField = document.getElementById('nameField').value;
    let nameT1= document.getElementById('nameT1');
    nameT1.innerHTML=nameField;

    //direct
    //conaact
    document.getElementById('nameT2').innerHTML= nameField
    let contactField= document.getElementById('contactField').value;
    document.getElementById('contactT').innerHTML= contactField;

    //address
    let addressField= document.getElementById('addressField').value;
    document.getElementById('addressT').innerHTML= addressField; 

    //facebook
    document.getElementById('fbT').innerHTML= document.getElementById('FbField').value;
    document.getElementById('instaT').innerHTML= document.getElementById('instaField').value;
    document.getElementById('LinkedT').innerHTML= document.getElementById('linkedField').value;

    //objective
    document.getElementById('objectiveT').innerHTML = document.getElementById('ObjectiveField').value;

// Work experience
let wes = document.getElementsByClassName('weField');
let str = "";
for (let e of wes) {
  str += `<li>${e.value}</li>`;
}
document.getElementById('weT').innerHTML = str;

// Academic qualifications
let aqs = document.getElementsByClassName('eqField');
let str1 = "";
for (let a of aqs) {
  str1 += `<li>${a.value}</li>`;
}
document.getElementById('aqT').innerHTML = str1;

// code for seting image 
let file= document.getElementById('imgField').files[0];

let reader = new FileReader();

reader.readAsDataURL(file);

// document.getElementById('imgTemplate').src= reader.result;
 

//set the image to template
reader.onloadend= function(){
    document.getElementById('imgTemplate').src= reader.result;

};


document.getElementById('cv-form').style.display='none';
document.getElementById('cv-template').style.display='block';

}

// print cv 
function printCv() {
    window.print();
  } 
  