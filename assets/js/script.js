/* ESERCIZIO 1
       Scrivi una funzione per cambiare il titolo della pagina in qualcos'altro
    */

const title = function () {
  const changeTitle = document.getElementsByTagName("h1")[0];
  changeTitle.innerHTML = "Sono il nuovo titolo";
};

title();

/* ESERCIZIO 2
        Scrivi una funzione per aggiungere al titolo della pagina una classe "myHeading"
     */

const addClassToTitle = function () {
  const addClass = document.getElementsByTagName("h1")[0];
  addClass.classList.add("myHeading");
};

addClassToTitle();

/* ESERCIZIO 3
        Scrivi una funzione che cambi il testo dei p figli di un div
       */

const changePcontent = function () {
  const changeContent = document.querySelectorAll("div p");
  changeContent.forEach((p) => {
    p.innerHTML = " Questo testo è un nuovo placeholder per gli esercizi ";
  });
};

changePcontent();

/* ESERCIZIO 4
        Scrivi una funzione che cambi la proprietà href di ogni link (tranne quello nel footer) con il valore https://www.google.com
       */

const changeUrls = function () {
  const switchHref = document.getElementsByTagName("a")[0];
  switchHref.href = "https://www.google.it";
  switchHref.target = "_blank";
  switchHref.innerHTML =
    "Questo link portava al sito di Epicode, ora porta su google";
};

changeUrls();

/* ESERCIZIO 5
        Scrivi una funzione che aggiunga un nuovo elemento lista alla seconda lista non ordinata
     */

const addToTheSecond = function () {
  const secondList = document.getElementById("secondList");
  const createElement = document.createElement("li");
  createElement.innerHTML = "sono un nuovo elemento!";
  secondList.appendChild(createElement);
};

addToTheSecond();

/* ESERCIZIO 6
        Scrivi una funzione che aggiunga un paragrafo al primo div
     */

const addParagraph = function () {
  const addP = document.getElementsByTagName("div")[0];
  const createParagraph = document.createElement("p");
  createParagraph.innerHTML = "Sono stato appena aggiunto!";
  createParagraph.style.color = "blue";

  addP.appendChild(createParagraph);
};

addParagraph();

/* ESERCIZIO 7
        Scrivi una funzione che faccia scomparire la prima lista non ordinata
     */

const hideFirstUl = function () {
  const hideList = document.getElementById("firstList");
  //   hideFirstUl.remove();
  hideList.style.display = "none";
};

hideFirstUl();

/* ESERCIZIO 8 
        Scrivi una funzione che renda verde il background di ogni lista non ordinata
       */

const paintItGreen = function () {
  const switchBG = document.querySelectorAll("div ul");
  switchBG.forEach((ul) => {
    ul.style.backgroundColor = "green";
  });
};

paintItGreen();

/* ESERCIZIO 9
        Scrivi una funzione che rimuova l'ultima lettera dall'h1 ogni volta che l'utente lo clicca
       */

const makeItClickable = function () {};

/* ESERCIZIO 10
        Crea una funzione che, al click sul footer, riveli l'URL del link interno come contenuto di un alert()
       */

const revealFooterLink = function () {
  const footerLink = document.querySelector("footer");

  footerLink.onclick = () => {
    const link = document.querySelector("footer a");
    alert(link);
  };
};

revealFooterLink();

/* ESERCIZIO 11
        Crea una funzione che crei una tabella nell'elemento con id "tableArea". 
        La tabella avrà 5 elementi e questa struttura: immagine, nome prodotto, quantità, prezzo
     */

const generateTable = function () {
  const table = document.getElementById("tableArea");
};

generateTable();

/* ESERCIZIO 12
        Crea una funzione che aggiunga una riga alla tabella precedentemente creata e fornisca i dati necessari come parametri
     */

const addRow = function () {};

/* ESERCIZIO 14
       Crea una funzione che nasconda le immagini della tabella quando eseguita
     */

const hideAllImages = function () {};

/* EXTRA ESERCIZIO 15
       Crea una funzione che cambi il colore del h2 con id "changeMyColor" con un colore random ad ogni click ricevuto
     */

const changeColorWithRandom = function () {
  const switchColor = document.getElementById("changeMyColor");

  switchColor.onclick = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    const randomColor = `rgb(${r},${g},${b})`;
    switchColor.style.cursor = "pointer";
    switchColor.style.color = randomColor;
  };
};

changeColorWithRandom();

