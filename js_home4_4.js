/*
4*. В городе N проезд в трамвае осуществляется по бумажным отрывным билетам. 
Каждую неделю трамвайное депо заказывает в местной типографии рулон билетов 
с номерами от 000001 до 999999. 
«Счастливым» считается билетик у которого сумма первых трёх цифр номера равна 
сумме последних трёх цифр, как, например, в билетах с номерами 003102 или 567576. 
Трамвайное депо решило подарить сувенир обладателю каждого счастливого билета и 
теперь раздумывает, как много сувениров потребуется. 
С помощью программы подсчитайте сколько счастливых билетов в одном рулоне. 

*/
/*
A=[]
for (let i=0; i<100;i++) {
    A[i]=i;
}

console.log(A);
*/

//Функия, которая превращает и цифры - массив чисел.
function digitaling(num) {
    
    var digits = num.toString().split('');
    var realDigits = digits.map(Number)
    return realDigits
}

//Функция которая выдает - проверку левые три цифры - равны сумме трем правым, выдает 1 если true

function sum1(Array_num) {
    if (Array_num.length == 4){
        if (Array_num[0]==(Array_num[1]+Array_num[2]+Array_num[3])) {
            return 1
        }
        else return 0
    }
    else if (Array_num.length == 5) {
        if ((Array_num[0]+Array_num[1])==(Array_num[2]+Array_num[3]+Array_num[4])) {
            return 1
        }
        else return 0

    }
    else if (Array_num.length == 6) {
        if ((Array_num[0]+Array_num[1]+Array_num[2])==(Array_num[3]+Array_num[4]+Array_num[5])) {
            return 1
        }
        else return 0
    }

}
//sum_prize - количесво выиграшных билетов
let sum_prize=0

for (let i=10000;i<1000000;i++){
    let  Array_num = digitaling(i);
    let prize= sum1(Array_num);
    if (prize==1){
        sum_prize++;
        
    }
}

console.log("Количество выигрышных билетов: " + sum_prize);

