// Variabile
var variabilaRobi;

// Definiri noi de  variabile 
let variabilaRobi2 = 1;
const vriabilaRobiti = 1;

// Definirea unuor variabile goale
let unu, doi, trei;

// Nedefinita si nul
let nedefinit = undefined;
let nul = null;

let number = 123;
let text = 'text'
let booleam = true;

// Aray
let list = [1, 2, 'trei'];

// Acceasarea elementelor dintr-o lista
console.log(list)
console.log(list.lenght)
console.log(list[0])

// Obiect
let obiect ={
    nume: 'Ion',
    Varsta : 49
     

} 

// Lipire
let textDoi = 'inca un text';
let textlipit = text + textDoi;
console.log(textlipit);

// Operatile matematice

let adunare = 2 + 2;
let scader = 2 - 2;
let inmultir = 1*2;
let impartire = 2/2;

// Increment
adunare++;

// Decrement
adunare--;

// Conditionale
if (2<1){
    console.log('Adevarat')
}
if (1<2){
    // Daca e adevarat

} else{
    // Daca nu e adevarat
}

// Operatori logici
// SI (&&)
if (1 < 3 && 3 > 5)


// Sau (||)
if (1<3 || 3>5){

}

// NOT
if (1 !=3){

}

//  Functi

function AdunaDoi(a, b){
    console.log(a + b)

}
AdunaDoi(2, 6)

// Secunde in ora
function secundeInOra(ora){
    const minOra = 60;
    const secInMin = 60;
    const totalMin = ora * minOra;
    return totalMin*secInMin;

}

console.log(secundeInOra(24))

// Selectore DOM (Document Object Model)
const fereastraBrowser = window;
const documentPagina = window.document;
console.log(documentPagina.body);

// Selectoare element dupa ID
const selectareID = document.getElementById('titlu')

// Selectoare elemente dupa clasa
const selectareClasa = document.getElementsByClassName
('paragraf')

// Selector tip CSS
const paragraf = document.querySelector('p');

// Varsta in secunde
function varstaInSecunde(varsta){
    const zileInAn = 365;
    const secInAn = secundeInOra(24)*zileInAn;
    return varsta * secInAn;

}
// Selectam butonul cu ID calculeaza
const buton = document.querySelector('#calculeaza')

buton.addEventListener('click',function(){
    const imput = document.querySelector('#varsta').value;
    let raspuns =  varstaInSecunde(imput)
    window.alert(raspuns);
})

function adaugaParagraf(){
    // Am creat un nou element tip p 
    const newP = document.createElement("p")
    newP.textContent = "Un nou paragraf"
    
    // Selectam divul cu ID add-paragraf
    const addP = document.querySelector("#add-paragraf");
    addP.append(newP);
}