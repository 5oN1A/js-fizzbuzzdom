/*
1.creo una row in html per poter assegnare una col ad ogni risultato dell'iterazione
2.creo ciclo da 1 a 100 con incremento di +1;
3.assegno una col ad ogni risultato dell'iterazione
4.inserisco if all'interno del ciclo con i valori:
    se non multiplo di 3 e non multiplo di 5 = bg-color #1389b2 + p ${i}
    se multiplo di 3 ma non multiplo di 5 = bg-color #10D6A1 + p fizz
    se non multiplo di 3 ma multiplo di 5 =  bg-color #FFD166 + p buzz
    se multiplo di 3 e multiplo di 5 =  bg-color #ED456F + p fizzbuzz
*/

const cellsContainer = document.getElementById("cells-container");


//1.creo ciclo da 1 a 100 con incremento di +1;

for (let i = 1; i <= 100; i++) {
    const cell = document.createElement("div");

   /*cell.classList.add("my-col-7");
    cell.innerHTML += `<div class="ratio d-flex justify-content-center align-items-center ratio-1x1 my-bg-blue">
                            ${i}
                        </div>`
    cellsContainer.append(cell);


   // console.log(multipli di 5);
    console.log(i, i % 5);
    //console.log(multipli di 3);
    console.log(i, i % 3);
*/

    if (i % 3 === 0) {  
       const cell = document.createElement("div");

        cell.classList.add("my-col-7");
        cell.innerHTML += `<div class="ratio d-flex justify-content-center align-items-center ratio-1x1 my-bg-fizz">
                            ${i}
                        </div>`
        cellsContainer.append(cell);

    }else if (i % 5 === 0) {
        const cell = document.createElement("div");

        cell.classList.add("my-col-7");
        cell.innerHTML += `<div class="ratio d-flex justify-content-center align-items-center ratio-1x1 my-bg-buzz">
                            ${i}
                        </div>`
        cellsContainer.append(cell);

     }/*else if (i % 3 === 0 && i % 5 === 0) {
        const cell = document.createElement("div");

        cell.classList.add("my-col-7");
        cell.innerHTML += `<div class="ratio d-flex justify-content-center align-items-center ratio-1x1 my-bg-fizzbuzz">
                            ${i}
                        </div>`
        cellsContainer.append(cell);

     } 

     }*/
     
     
     
}
