/*3. Задан массив  - [12,4,3,10,1,20]. 
Удалить из него наименьшее и наибольшее значение. */



// Функция поиска минимального значения в массиве
function minimum(A) {
    let min=A[0];
    let A_len = A.length;
    for (let i=1; i<A_len; i++) {
        if (A[i]<min) {
            min=A[i];
        }
    }
    return min
}

// Функция поиска максимального значения в массиве
function maximum(A) {
    let max=A[0];
    let A_len = A.length;
    for (let i=1; i<A_len; i++) {
        if (A[i]>max) {
            max=A[i];
        }
    }
    return max
}




let A=[12,4,20,-10,3,-10,1,-2,-1,-7,5,20];

console.log("Изначальный массив " + A)

let A_min=minimum(A);
let A_max=maximum(A);
console.log("Минимальный элемент " + A_min)
console.log("Максимальный элемент " +A_max)



//удаляем минимальное число
let ind_min;
while ( ind_min != -1 ) {
    //ищем индекс элемент с минимальным значение
    ind_min = A.indexOf(A_min);
    if (ind_min ==-1) break;
    //удаляем элемент с индексом
    A.splice(ind_min,1);
} 

console.log("Очищенный массив без минимальных элементов " +A)

//удаляем максимальное  число
let ind_max;
while ( ind_max != -1 ) {
    //ищем индекс элемент с минимальным значение
    ind_max = A.indexOf(A_max);
    if (ind_max ==-1) break;
    //удаляем элемент с индексом
    A.splice(ind_max,1);
} 

console.log("Очищенный массив без максимальных элементов " +A)
