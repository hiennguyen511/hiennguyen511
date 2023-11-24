// var name = "Nguyễn Thế Hiển ";
// var age = 22;

// alert(name);
// alert(age);
document.getElementById('user').innerHTML = "Nguyễn Thế Hiển";
//funtion
function heelo(){
    console.log("ket qua tinh toán");
    let x = 30;
    let y = 50;
    let z = x + y;
    console.log(x + "+" + y + "=" + z );
    
}
//kieu funtion
var hellofuntion = heelo();
hellofuntion;
//ki tu dac biet
var name = "nguyen thế \" hiển " ;
console.log(name);
//oject
var ojject = {
    ten: "hien",
    age: 22,
    adrress: "Ha Noi",
    myfuntion: function() {

    }
};
console.log(ojject);
//array
var arrayy = [
    "hien",
    22,
    "ha noi"
];
console.log(arrayy);
//typyof
console.log(typeof arrayy);
//if so sanh tuyet doi
var a = 1;
var b = "1";
if(a === b){
    console.log("faise");
}
else{
    console.log("true");
}

//cơ số
var nuber = 23;
nubers = nuber.toString(2);
console.log(nubers);
