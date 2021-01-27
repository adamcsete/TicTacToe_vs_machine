let matrix =   [["-","-","-"],
                ["-","-","-"],
                ["-","-","-"]];

let rowindex = 0;
let colindex = 0;
let vege = false;

//piros játékos jön
function gameLogic (brick){

        let jolepes = false;

        if (document.getElementById("gamercolor").style.color === brick.style.color){
                alert("Ide már tettél!");
            }
            else if (brick.innerHTML != ""){
                alert("Ide nem tehetsz!");
            }
            else{
                brick.style.color = document.getElementById("gamercolor").style.color;
                if (document.getElementById("gamercolor").style.color === "red") {
                    brick.innerHTML = "O";
                    rowindex = brick.id.substring(0, 1);
                    colindex = brick.id.substring(1,2);
                    matrix[rowindex][colindex] = "O";
                    jolepes = true;
                }
            }
        
        eredmeny();
        
        if (jolepes &&! vege){
            document.getElementById("gamercolor").style.color = "blue";
            document.getElementById("gamercolor").innerHTML = "Gép jön";
            setTimeout(gep,1500);
        }
        
}

//kék gép jön
function gep(){
    
    let jolepes = false;
    
    while(!jolepes && !vege) {
        rowindex = Math.floor(Math.random() * 3);
        colindex = Math.floor(Math.random() * 3);
        console.log(rowindex, colindex);
        
        let ind = "".concat(rowindex,colindex);
        console.log(ind, document.getElementById(ind).style.color);
        
        if(document.getElementById(ind).style.color != "red" && document.getElementById(ind).style.color != "blue")
            {
                matrix[rowindex][colindex] = "X";
                document.getElementById(ind).style.color = "blue";
                document.getElementById(ind).innerHTML = "X";
                jolepes = true;
            }
    }

    eredmeny();

    if (!vege){
        document.getElementById("gamercolor").style.color = "red";
        document.getElementById("gamercolor").innerHTML = "Játékos jön";
    }
}

function eredmeny(){
    rowindex = 0;
    colindex = 0;

    let elsoSor = matrix[rowindex][colindex]+ matrix[rowindex][colindex+1]+ matrix[rowindex][colindex+2] ;
    let ES = false;
    let es = ["00","01","02"];
    
    let masodikSor = matrix[rowindex+1][colindex] + matrix[rowindex+1][colindex+1] + matrix[rowindex+1][colindex+2] ; 
    let MS = false;
    let ms = ["10","11","12"];
    
    let harmadikSor = matrix[rowindex+2][colindex] + matrix[rowindex+2][colindex+1] + matrix[rowindex+2][colindex+2] ;
    let HS = false;
    let hs = ["20","21","22"];
    
    let elsoOszlop = matrix[rowindex][colindex] + matrix[rowindex+1][colindex] + matrix[rowindex+2][colindex];
    let EO = false;
    let eo = ["00","10","20"];
    
    let masodikOszlop = matrix[rowindex][colindex+1] + matrix[rowindex+1][colindex+1] + matrix[rowindex+2][colindex+1];
    let MO = false;
    let mo = ["00","11","21"];
    
    let harmadikOszlop = matrix[rowindex][colindex+2] + matrix[rowindex+1][colindex+2] + matrix[rowindex+2][colindex+2];
    let HO = false;
    let ho = ["02","12","22"];
    
    let balAtlo = matrix[rowindex][colindex] + matrix[rowindex+1][colindex+1] + matrix[rowindex+2][colindex+2];
    let BA = false;
    let ba = ["00","11","22"];
    
    let jobbAtlo = matrix[rowindex][colindex+2] + matrix[rowindex+1][colindex+1] + matrix[rowindex+2][colindex];
    let JA = false;
    let ja = ["02","11","20"];

    //elsoSor
    let O = (elsoSor.match(/O/g) || []).length;
    let X = (elsoSor.match(/X/g) || []).length;
    if (O === 3) {vege = true; ES = true;} else if ( X === 3) {vege = true; ES = true;}

    //masodikSor
    O = (masodikSor.match(/O/g) || []).length;
    X = (masodikSor.match(/X/g) || []).length;
    if (O === 3) {vege = true; MS = true;} else if ( X === 3) {vege = true; MS = true;}

    //harmadikSor
    O = (harmadikSor.match(/O/g) || []).length;
    X = (harmadikSor.match(/X/g) || []).length;
    if (O === 3) {vege = true; HS = true;} else if ( X === 3) {vege = true; HS = true;}

    //elsoOszlop
    O = (elsoOszlop.match(/O/g) || []).length;
    X = (elsoOszlop.match(/X/g) || []).length;
    if (O === 3) {vege = true; EO = true;} else if ( X === 3) {vege = true; EO = true;}

    //masodikOszlop
    O = (masodikOszlop.match(/O/g) || []).length;
    X = (masodikOszlop.match(/X/g) || []).length;
    if (O === 3) {vege = true; MO = true;} else if ( X === 3) {vege = true; MO = true;}

    //harmadikOszlop
    O = (harmadikOszlop.match(/O/g) || []).length;
    X = (harmadikOszlop.match(/X/g) || []).length;
    if (O === 3) {vege = true; HO = true;} else if ( X === 3) {vege = true; HO = true;}

    //balAtlo
    O = (balAtlo.match(/O/g) || []).length;
    X = (balAtlo.match(/X/g) || []).length;
    if (O === 3) {vege = true; BA = true;} else if ( X === 3) {vege = true; BA = true;}
    
    //jobbAtlo
    O = (jobbAtlo.match(/O/g) || []).length;
    X = (jobbAtlo.match(/X/g) || []).length;
    if (O === 3) {vege = true; JA = true;} else if ( X === 3) {vege = true; JA = true;}

    let matrices = [matrix[0][0],matrix[0][1],matrix[0][2],
                    matrix[1][0],matrix[1][1],matrix[1][2],
                    matrix[2][0],matrix[2][1],matrix[2][2]];

    //dontetlen
    if ( !(ES || MS || HS || EO || MO || HO || BA || JA)  && !(matrices.includes("-"))) {
        vege = true;
        document.getElementById("gamercolor").style.color = "#000";
        document.getElementById("gamercolor").innerHTML = "Döntetlen!";
    }
    
    if (vege && document.getElementById("gamercolor").style.color === "red") {
            document.getElementById("gamercolor").innerHTML = "Játékos NYERT!";
        }
   
    if (vege && document.getElementById("gamercolor").style.color === "blue") {
            document.getElementById("gamercolor").innerHTML = "Gép NYERT!";
        }
    
    if (vege){
        document.getElementById("newgame").style.display = "block";
        let ind = "";
        if (ES) { for (let i = 0; i < 3 ; i++){ ind = "" + es[i]; console.log(ind); if (document.getElementById(ind).innerHTML === "O") document.getElementById(ind).style.backgroundColor = "#FF7F50"; if (document.getElementById(ind).innerHTML === "X") document.getElementById(ind).style.backgroundColor = "#008B8B"; } }
        if (MS) { for (let i = 0; i < 3 ; i++){ ind = "" + ms[i]; if (document.getElementById(ind).innerHTML === "O") document.getElementById(ind).style.backgroundColor = "#FF7F50"; if (document.getElementById(ind).innerHTML === "X") document.getElementById(ind).style.backgroundColor = "#008B8B"; } }
        if (HS) { for (let i = 0; i < 3 ; i++){ ind = "" + hs[i]; if (document.getElementById(ind).innerHTML === "O") document.getElementById(ind).style.backgroundColor = "#FF7F50"; if (document.getElementById(ind).innerHTML === "X") document.getElementById(ind).style.backgroundColor = "#008B8B"; } }
        if (EO) { for (let i = 0; i < 3 ; i++){ ind = "" + eo[i]; if (document.getElementById(ind).innerHTML === "O") document.getElementById(ind).style.backgroundColor = "#FF7F50"; if (document.getElementById(ind).innerHTML === "X") document.getElementById(ind).style.backgroundColor = "#008B8B"; } }
        if (MO) { for (let i = 0; i < 3 ; i++){ ind = "" + mo[i]; if (document.getElementById(ind).innerHTML === "O") document.getElementById(ind).style.backgroundColor = "#FF7F50"; if (document.getElementById(ind).innerHTML === "X") document.getElementById(ind).style.backgroundColor = "#008B8B"; } }
        if (HO) { for (let i = 0; i < 3 ; i++){ ind = "" + ho[i]; if (document.getElementById(ind).innerHTML === "O") document.getElementById(ind).style.backgroundColor = "#FF7F50"; if (document.getElementById(ind).innerHTML === "X") document.getElementById(ind).style.backgroundColor = "#008B8B"; } }
        if (BA) { for (let i = 0; i < 3 ; i++){ ind = "" + ba[i]; if (document.getElementById(ind).innerHTML === "O") document.getElementById(ind).style.backgroundColor = "#FF7F50"; if (document.getElementById(ind).innerHTML === "X") document.getElementById(ind).style.backgroundColor = "#008B8B"; } }
        if (JA) { for (let i = 0; i < 3 ; i++){ ind = "" + ja[i]; if (document.getElementById(ind).innerHTML === "O") document.getElementById(ind).style.backgroundColor = "#FF7F50"; if (document.getElementById(ind).innerHTML === "X") document.getElementById(ind).style.backgroundColor = "#008B8B"; } }
    }

}

function mover(brick){
    if (!vege) {
       brick.style.backgroundColor  = "#7FFFD4";
    }
}

function mout(brick){
    if (!vege){
        brick.style.backgroundColor  = "#ffffff";
    }
}

function newGame(){
    location.reload();
}