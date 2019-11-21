/*2. Одномерным массивом задана доска 3 на 3 
var area = [ null, null, null, null, null, null, null, null, null ]
Необходимо сформировать и вывести (document.write) игровое поле состоящее из квадратов для крестиков-ноликов  в HTML. 
При появлении в массиве 0-ля рисовать нолик , 1-цы крестик 
Пример:  [ 1, null, 0, null, 1, null, null, null, null ] на поле 2-а крестика, и 1-н нолик.*/


let A=[ 1, 1, 0, 444, 1, 0, 777, 5555, 555 ]
console.log(A);
let B=[]
let B_len=B.length

for(let i=0;i<A.length; i++) {
    if (A[i] ===1) {
        B[i]="  X  ";
    }
    else if (A[i] ===0) {
        B[i]="  0  ";

    }
    else B[i]="  -  ";
}

let msg = " | "+ B[0] + " | " + B[1] + " | " + B[2] +" | "+"<br>"
msg +=  " |  " + B[3] + " |  " + B[4] + " | " + B[5] + " | "+"<br>"
msg +=  "  | " +B[6] + " | " + B[7] + " | " + B[8] + " | "
document.write(msg)
