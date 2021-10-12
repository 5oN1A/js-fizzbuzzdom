/*
1.creo una row in html per poter assegnare una col ad ogni risultato dell'iterazione
2.creo ciclo da 1 a 100 con incremento di +1;
3.se non multiplo di 3 e non multiplo di 5 = bg-color #1389b2 + p ${i}
se multiplo di 3 ma non multiplo di 5 = bg-color #10D6A1 + p fizz
se non multiplo di 3 ma multiplo di 5 =  bg-color #FFD166 + p buzz
se multiplo di 3 e multiplo di 5 =  bg-color #ED456F + p fizzbuzz
*/


const cellsContainer = document.getElementById("cells-container");

//1.creo ciclo da 1 a 100 con incremento di +1;

for (let i = 1; i <=100; i++) {

    const cell = document.createElement("div");
    
    cell.classList.add("col-2");
    
    cell.innerHTML += `<div class="ratio ratio-1x1 border">
                            <div>${i}</div>
                        </div>`
    cellsContainer.append(cell);
}