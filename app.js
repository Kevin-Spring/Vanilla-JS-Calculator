function add (e){
    e.preventDefault();

    /* Input Fält */
    const text = document.querySelector("#input-text").value;
    const value = document.querySelector("#input-number").value;
    
    /* Selector */
    const x = document.getElementById("selector").selectedIndex;

    /* Inkomstdiv & kostnadsdiv */
    const inkomstDiv = document.querySelector(".inkomstdiv");
    const kostnadDiv = document.querySelector(".kostnaddiv");
    const inkomstDivValue = document.querySelector(".inkomstdiv").innerHTML;
    const kostnadDivValue = document.querySelector(".kostnaddiv").innerHTML;

    /* Visar värderna i listform */
    const inkomstLista = document.querySelector(".inkomst-lista-div");
    const kostnadsLista = document.querySelector(".kostnads-lista-div");

    /* Skapar li element */
    const li = document.createElement("li");

    /* Gör om 'value'-talet till ett negativt tal */
    const kostnadNegativ = (Number(~value)) + 1;

    /* Visar summan totalbelopp */
    const totalbeloppdiv = document.querySelector(".totalbeloppdiv");

    /* ------------Selector for animation------------ */
    const studsdiv = document.querySelector(".hopp");


    

    if (x == 0) {
        
        /* Gäller kostnadslistan */
        inkomstLista.appendChild(li);
        li.textContent= text + " " + "+" + value  + "kr";
        /* Gäller inkomsttotals div */
        inkomstDiv.innerHTML = (Number(inkomstDivValue)) + (Number(value));
        
        /* Animation */
        studsdiv.setAttribute("id", "animation-green")
        setTimeout(function(){
            document.querySelector("#animation-green").removeAttribute("id");
        }, 300);

    }

    else if (x == 1){
        
        /* Gäller kostnadslistan */
        kostnadsLista.appendChild(li);
        li.textContent = text + " " + kostnadNegativ + "kr";
        /* Gäller kostnadstotal div */
        kostnadDiv.innerHTML = (Number(kostnadDivValue)) + kostnadNegativ;

        /* Animation */
        studsdiv.setAttribute("id", "animation-red");
        setTimeout(function(){
        document.querySelector("#animation-red").removeAttribute("id");
        }, 300);
    }


    return totalbeloppdiv.innerHTML = (Number(inkomstDiv.innerHTML)) + (Number(kostnadDiv.innerHTML)) + " kr";


}

const btn = document.querySelector(".btn");
btn.addEventListener("click" , add);