/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/
let sum = 10 + 20;
console.log("A) IL VALORE DI SUM è:", sum);

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/
let random = Math.floor(Math.random() * 21);
console.log("B) RANDOM GENERA UN NUMERO CASUALE DA 0 A 20:", random);

/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/
let me = {
  name: "Alessandro",
  surname: "Perri",
  age: 30,
};
console.log("C) ME:", me);

/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/
delete me.age;
console.log("D) PROPRIETà AGE RIMOSSA:", me);

/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/
me.skills = ["JAVA SCRIPT", "HTML", "CSS"];
console.log("E) CREATO ARRAY SKILLS, AGGIUNTO A ME:", me);

/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/
me.skills.push("PROSSIMAMENTE ANCHE ALTRI");
console.log("F) AGGIUNTO NUOVO ELEMENTO AD ARRAY SKILLS:", me);

/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/
me.skills.pop();
console.log("G) RIMOSSO ULTIMO ELEMENTO AD ARRAY SKILLS:", me);

// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/
const dice = function () {
  return Math.ceil(Math.random() * 6);
};
let uscito = dice();
console.log("1) FUNZIONE 'DICE', GENERA UN NUMERO CASUALE TRA 1 E 6:", uscito);

/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/
const whoIsBigger = function (a, b) {
  if (a > b) {
    console.log("2) IL NUMERO MAGGIORE TRA I DUE è:", a);
  } else if (a < b) {
    console.log("2) IL NUMERO MAGGIORE TRA I DUE è:", b);
  } else {
    a === b;
    console.log("2) I 2 NUMERI SONO UGUALI");
  }
};
whoIsBigger(22, 20);

/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/
const splitMe = function (str) {
  return str.split(" ");
};
let arrayDaStr = splitMe("CIAO CHE FAI OGGI DI BELLO");
console.log("3) DA STRINGA AD ARRAY DI PAROLE:", arrayDaStr);

/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/
const deleteOne = function (st, bool) {
  if (bool === true) {
    console.log(
      "4) IL VALORE DI DELETEONE è TRUE, TORNA LA STRINGA SENZA IL PRIMO CARATTERE:",
      st.slice(1)
    );
  } else {
    console.log(
      "4) IL VALORE DI DELETEONE è FALSE, TORNA LA STRINGA SENZA L'ULTIMO CARATTERE:",
      st.slice(0, -1)
    );
  }
};
deleteOne("yess", false);

/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/
const onlyLetters = function (strr) {
  if (/\d/.test(strr)) {
    let newSt = strr.replace(/\d/, "");
    console.log("5) NUMERI ELIMINATI DALLA STRINGA:", newSt);
  } else {
    console.log("5) NESSUN NUMERO PRESENTE IN STRINGA:", newSt);
  }
};
onlyLetters("IO HO 3 GECHI");

/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/
const isThisAnEmail = function (mail) {
  const email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email.test(mail)) {
    console.log(
      "6) TRUE, LA STRINGA INSERITA è UN VALIDO INDIRIZZO MAIL:",
      mail
    );
  } else {
    console.log("6) FALSE, LA STRINGA NON è UN VALIDO INDIRIZZO MAIL:", mail);
  }
};
isThisAnEmail("perrialessandro93@gmail.com");

/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/
const giorniWeek = [
  "Domenica",
  "Lunedì",
  "Martedì",
  "Mercoledì",
  "Giovedì",
  "Venerdì",
  "Sabato",
];
const whatDayIsIt = function () {
  const today = new Date().getDay();
  return giorniWeek[today];
};
console.log("7) IL GIORNO ATTUALE è:", whatDayIsIt());

/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/
const rollTheDices = function (nEvocazioni) {
  const estratti = [];
  let sum = 0;
  while (estratti.length < nEvocazioni) {
    const numero = dice();
    estratti.push(numero);
    sum += numero;
  }
  return { sum, estratti };
};
const risultato = rollTheDices(5);
console.log(
  "8) I NUMERO ESTRATTI CON DICE SONO:",
  risultato.estratti,
  "E LA LORO SOMMA è:",
  risultato.sum
);

/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/
const howManyDays = function (data) {
  const oggi = new Date();
  const diffMillisec = Math.abs(oggi - data);
  const giorniTrascorsi = Math.ceil(diffMillisec / (1000 * 60 * 60 * 24));
  return giorniTrascorsi;
};
const data = new Date("2022-02-11");
const trascorsi = howManyDays(data);
console.log("9) NUMERO DI GIORNI TRASCORSI AD OGGI DA", data, ":", trascorsi);

/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/
const isTodayMyBirthday = function (birthday) {
  const oggii = new Date();
  const compleanno = new Date(birthday);
  const èIlTuoCompl =
    oggii.getDate() === compleanno.getDate() &&
    oggii.getMonth() === compleanno.getMonth();
  if (èIlTuoCompl) {
    console.log("10) TANTI AUGURI, OGGI è IL TUO COMPLEANNO:", oggii, true);
    return true;
  } else {
    console.log("10) OGGI NON è IL TUO COMPLEANNO", false);
    return false;
  }
};
isTodayMyBirthday("2023-12-10");

// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/
const deleteProp = function (oggetto, str) {
  const keys = Object.keys(oggetto);

  for (let i = 0; i < keys.length; i++) {
    const value = oggetto[keys[i]];

    if (typeof value === "string" && value.includes(str)) {
      oggetto[keys[i]] = value.replace(str, "").trim();
      console.log(
        "11) L'OGGETO VIENE RESTITUITO SENZA LA STRINGA FORNITA,",
        str,
        ",LA QUALE ERA GIA PRESENTE IN ESSO E VIENE ELIMINATA:",
        oggetto
      );
      return oggetto;
    }
  }

  console.log(
    "11) L'OGGETO VIENE RESTITUITO TALE, LA STRINGA FORNITA NON ERA PRESENTE IN ESSO:",
    oggetto
  );
  return oggetto;
};

deleteProp({ nomi: "giacomo, andrea, diego" }, "giacomo,");

/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/
const newestMovie = function () {
  let i = 0;
  let ultimo = movies[0];
  while (i < movies.length) {
    parseInt(movies[i].Year) > parseInt(ultimo.Year);
    ultimo = movies[i];
    i++;
  }
  console.log(
    "12) IL FILM PIù RECENTE NELL'ARRAY MOVIES è: '",
    ultimo.Title,
    "'",
    ", USCITO NELL'ANNO",
    ultimo.Year
  );
};

/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/
const countMovies = function () {
  let quantiSono = movies.length;
  console.log("13) IL NUMERO DI FILM PRESENTI IN ARRAY MOVIES è:", quantiSono);
};

/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/
const onlyTheYears = function () {
  let anni = movies.map((movie) => movie.Year);
  // anni.push(Years);
  console.log("14) CREATO ARRAY CONTENENTE SOLO ANNI DI FILM:", anni);
};

/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/
const onlyInLastMillennium = function () {
  let scorsoMillennio = movies.filter((movie) => parseInt(movie.Year) < 2000);
  console.log("15) SOLO FILM PRODOTTI IN MILLENNIO SCORSO:", scorsoMillennio);
};

/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/
const sumAllTheYears = function () {
  let sommAnni = movies.reduce((acc, film) => acc + parseInt(film.Year), 0);
  console.log(
    "16) LA SOMMA DEGLI ANNI CONTENUTA IN ARRAY MOVIES è DI:",
    sommAnni
  );
};

/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/
const searchByTitle = function (stringaa) {
  movies.forEach((titolo) => {
    if (titolo.Title.includes(stringaa)) {
      console.log(
        "17) TRAMITE STRINGA TROVA TITOLO DI FILM DI ARRAY MOVIES:",
        titolo.Title
      );
    }
  });
};

/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/
const searchAndDivide = function (str) {
  let match = movies.filter((film) => film.Title.includes(str));
  console.log(
    "18) ARRAY MATCH, FILM CONTENENTI STRINGA IN PROPRIO TITOLO:",
    match
  );
  let unmatch = movies.filter((film) => !film.Title.includes(str));
  console.log(
    "18) ARRAY UNMATCH, FILM NON CONTENENTI STRINGA IN PROPRIO TITOLO:",
    unmatch
  );
};

/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/
const removeIndex = function (indice) {
  movies.splice(indice, 1);
  console.log(
    "19) ARRAY MOVIES PRIVO DI ELEMENTO IN POSIZIONE RICEVUTA COME PARAMENTRO:",
    movies
  );
};

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/
const select = function () {
  const idd = document.getElementById("container");
  console.log("20) ELEMENTO DOTATO DI ID 'CONTAINER' SELEZIONATO:", idd);
};

/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/
const selectTd = function () {
  const tdd = document.getElementsByTagName("td");
  console.log("21) ELEMENTI DOTATI DI TAG 'TD' SELEZIONATI:", tdd);
};

/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/
const printTd = function () {
  const tddd = document.getElementsByTagName("td");
  Array.from(tddd).forEach((td) => {
    console.log("22) TESTO CONTENUTO IN OGNI TD:", td.textContent);
  });
};

/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/
const bgColor = function () {
  const links = document.getElementsByTagName("a");
  for (let i = 0; i < links.length; i++) {
    links[i].style.backgroundColor = "red";
  }
  console.log("23) IL BACKGROUND DEI LINK NELLA PAGINA DIVENTA ROSSO:", links);
};

/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/
const addLi = function () {
  const lista = document.getElementById("myList");
  const nuovoElem = document.createElement("li");
  nuovoElem.textContent = "Elemento appena creato ed aggiunto";
  console.log(
    "24) NUOVO ELEMENTO AGGIUNTO ALLA LISTA NON ORDINATA:",
    nuovoElem
  );
  lista.appendChild(nuovoElem);
  // console.log("24) NUOVO ELEMENTO AGGIUNTI ALLA LISTA NON ORDINATA:", lista);
};

/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/
const svuota = function () {
  const togli = document.getElementById("myList");
  togli.innerHTML = "";
  console.log("25) SVUOTATA LA LISTA 'myList'");
};

/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/
const addTest = function () {
  const tr = document.getElementsByTagName("tr");
  for (let i = 0; i < tr.length; i++) {
    tr[i].classList.add("test");
  }
  console, log("26) AGGIUNTA LA CLASSE 'test' AD OGNI TAG TR");
};

// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/

/* Questo array viene usato per gli esercizi. Non modificarlo. */

const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },

  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
];

// 12:
newestMovie();

// 13:
countMovies();

// 14:
onlyTheYears();

// 15:
onlyInLastMillennium();

// 16:
sumAllTheYears();

// 17:
searchByTitle("The Lord");

// 18:
searchAndDivide("Ave");

// 19:
removeIndex(10);

// 20:
select();

// 21:
selectTd();

// 22:
printTd();

// 23:
bgColor();

// 24:
addLi();

// 25:
svuota();

// 26:
addTest();
