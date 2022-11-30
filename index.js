// 01 - Spremi svoje godine (dob, broj rođendana) u varijablu. izračunaj koliko imaš godina u psećim godinama, pa rezultat ispiši na konzolu.

var myage = 35
var myDogAge = myage / 7
console.log (myDogAge)


// 02 - Spremi svoje ime i prezime u zasebne varijable, konkateniraj te varijable u treću varijablu, te ispiši vrijednost treće varijable na konzolu.

var myName = 'Marin'
var mySurname = 'Miličić'
myFullName = myName.concat(' ', mySurname)
console.log (myFullName)


// 03 - Koristeći varijable, napiši program koji uzima dva cjelobrojna broja između 1 i 20, te na konzolu ispisuje njihov ostatak pri dijeljenju.

var num01 = Math.ceil((Math.random() + 0.00000000000000001) * 20)
var num02 = Math.ceil((Math.random() + 0.00000000000000001) * 20)

console.log (num01 % num02)


// 04 - Kreiraj varijablu koja prati broj polaznika Brainlab akademije. početna vrijednost je 22. nakon nekog vremena, 2 nova polaznika su se upisala. nakon toga su se 3 polaznika ispisala. nakon toga se 5 novih polaznika upisalo. nakon svakog koraka ispiši vrijednost varijable u konzolu.

var numBrainlabParticip = 22
console.log (numBrainlabParticip)
numBrainlabParticip = numBrainlabParticip + 2
console.log (numBrainlabParticip)
numBrainlabParticip = numBrainlabParticip - 3
console.log (numBrainlabParticip)
numBrainlabParticip = numBrainlabParticip + 5
console.log (numBrainlabParticip)


// 05 - Pokušaj pogoditi što će se ispisati na konzoli:

// console.log("3" + 3); -> 33
// console.log(5 + 12); -> 17
// console.log(5 + "4"); -> 54
// console.log("My points: " + 4 + 9); -> My points: 49
// console.log(2 + 2); -> 4
// console.log("11" + "14"); -> 1114


// 06 - Svoje puno ime i prezime ispiši na konzoli, pa ga pretvori u velika slova i ispiši na konzoli, pa ponovno pretvori u sva mala slova i ispiši na konzoli.

console.log ('Marin Miličić')
console.log ('Marin Miličić'.toUpperCase())
console.log ('Marin Miličić'.toLowerCase())


// 07 - Nekom od naredbi s predavanja provjeri koliko tvoje ime i prezime ima znakova

console.log ('Marin Miličić'.length)