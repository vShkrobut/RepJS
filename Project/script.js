let money = +prompt("Ваш бюджет на місяць"),
    time  = prompt('Введіть дату в форматі YYYY-MM-DD','');

let appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: false
}    


    



for(let i = 0; i < 1; i++){
    let a = prompt("Введіть обовязкову статтю витрат в цьому місяці", ''),
        b = prompt("Сумма витрат?", '');

    if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null
         && a != '' && b != '' && a.length < 50){
        console.log("done");
        appData.expenses[a] = b;
    } else{

    }   
    
};
    appData.moneyPerDay = appData.budget / 30;

    alert("Бюджет на день" + appData.moneyPerDay);

    if(appData.moneyPerDay < 100){
        Console.log("мінімальний рівень прибутку");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000){
        Console.log("Середній рівень прибутку"); 
    } else if (appData.moneyPerDay > 2000){
        Console.log("Високий рівень прибутку"); 
    } else{
        Console.log("Помилка"); 
    }

