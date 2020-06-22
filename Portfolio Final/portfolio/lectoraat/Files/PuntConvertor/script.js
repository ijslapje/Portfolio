/**
 * Functie wiskunde
 * Een functie dat alle formules bevat die je nodig hebt, als je nieuwe formules toevoegd doe dat hier.
 * @return {function} functions
 *
 * @example
 *      Math.round(wiskunde.hardlopen(m, hc))

 */

const hc = 1e3;
const kc = 20;
const sc = 15e2;
const wiskunde=(()=>{
    const functions={
        hardlopen:(a,hc)=> a/hc, //
        kracht:(a,kc)=>a/kc,
        spinning:(a,sc)=>a/sc
    }

    return functions;
})();


window.onload = ()=> {
    let en = document.getElementById("en");
    let kr = document.getElementById("kr");
    let ca = document.getElementById("ca");
    let after = document.getElementById("container");
    let unit = document.getElementsByClassName("unit")[0];
    let smollunit = document.getElementsByClassName("unit")[1];
    let modal = document.getElementById("myModal");
    let span = document.getElementsByClassName("close")[0];
    let coinShow = document.getElementById("sumCoin");
    let choice;

    en.onclick = function () {
        start.style.display = 'none';
        after.style.display = 'block';
        unit.innerHTML = 'meters';
        smollunit.innerHTML = 'm';
        choice = 0;
    };
    kr.onclick = function () {
        start.style.display = 'none';
        after.style.display = 'block';
        unit.innerHTML = 'kilogram';
        smollunit.innerHTML = 'kg';
        choice = 1;
    };
    ca.onclick = function () {
        start.style.display = 'none';
        after.style.display = 'block';
        unit.innerHTML = 'meters';
        smollunit.innerHTML = 'm';
        choice = 2;
    };

    sum.onclick = function () {
        let limit;
        let formula;
        let i = document.getElementById("innertext").value;
        switch(choice) {
            case 0:
              limit = hc < hc
              formula = wiskunde.hardlopen(i, hc);
              break;
            case 1:
                limit = kc < kc
                formula = wiskunde.kracht(i,kc);
              break;
            case 2:
                limit = sc < sc
                formula = wiskunde.spinning(i,sc);
              break;
          }

        if (limit) {
            coinShow.innerHTML = "none";
        }
        else {
            //let coins = (m, c) => {
                //let result = Math.ceil(m / c)
                //return result.toString();
            //}
            //coinShow.innerHTML = coins(m, c);

            //Als je andere wil berekenen, kijk naar functie hardlopen
            console.log(formula);
            coinShow.innerHTML = Math.round(formula).toString();
        }
        modal.style.display = "block";
        //console.log(coinShow);
    };

    span.onclick = function () {
        modal.style.display = "none";
    }

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
};
