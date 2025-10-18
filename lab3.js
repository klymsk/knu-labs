// Масив записів напрямів діяльності
let activity = [
    {
        id: 1,
        name: "Освіта",
        department: "Навчальний відділ",
        govRelation: "Взаємодія Міністерством освіти і науки України",
        usersDay1: 100,
        usersDay2: 120,
        duration: 12 
    },
    {
        id: 2,
        name: "Культура та туризм",
        department: "Відділ культури",
        govRelation: "Співпраця з Міністерством культури та інформаційної політики",
        usersDay1: 200,
        usersDay2: 300,
        duration: 24
    },
    {
        id: 3,
        name: "Екологія",
        department: "Відділ охорони природи",
        govRelation: "Координація з Міністерством захисту довкілля та природних ресурсів України",
        usersDay1: 100,
        usersDay2: 150,
        duration: 6
    },
    {
        id: 4,
        name: "ЖКГ та будівництво",
        department: "Відділ будівництва",
        govRelation: "Взаємодія з Департаментом ЖКГ КМДА",
        usersDay1: 400,
        usersDay2: 440,
        duration: 36
    },
    {
        id: 5,
        name: "Міжнародне співробітництво",
        department: "Відділ міжнародних відносин",
        govRelation: "Координація з Міністерством закордонних справ України",
        usersDay1: 310,
        usersDay2: 290,
        duration: 24
    },
    {
        id: 6,
        name: "Медицина",
        department: "Відділ охорони здоров'я",
        govRelation: "Співпраця з Міністерством охорони здоров’я України",
        usersDay1: 500,
        usersDay2: 520,
        duration: 18
    },
    {
        id: 7,
        name: "Охорона праці",
        department: "Відділ охорони праці",
        govRelation: "Взаємодія з Державною службою України з питань праці",
        usersDay1: 100,
        usersDay2: 80,
        duration: 12
    },
    {
        id: 8,
        name: "Міський транспорт",
        department: "Транспортний відділ",
        govRelation: "Координація з місцевими адміністраціями",
        usersDay1: 300,
        usersDay2: 260,
        duration: 18
    },
    {
        id: 9,
        name: "Цифровізація освіти",
        department: "Відділ інновацій",
        govRelation: "Партнерство з Міністерством освіти і науки України",
        usersDay1: 150,
        usersDay2: 180,
        duration: 6
    },
    {
        id: 10,
        name: "Розвиток стартапів",
        department: "Відділ економічного розвитку",
        govRelation: "Співпраця з Міністерством економіки",
        usersDay1: 140,
        usersDay2: 230,
        duration: 12
    }
];

// 1. Сортування за терміном реалізації 
console.log("1. Сортування за терміном реалізації");
activity.sort((a, b) => a.duration - b.duration);
console.dir(activity);


console.log("\n");

// 2. Середня кількість користувачів для напрямів з однаковим терміном
console.log("2. Середня кількість користувачів для однакового терміну");

let durations = [...new Set(activity.map(a => a.duration))]; // Витягуємо всі тривалості без повторів, та перетворюємо назад в масив

// Проходимо по кожній унікальній тривалості
durations.forEach(d => {
    let sameDuration = activity.filter(a => a.duration === d); // Фільтруємо напрями за разінми групами тривалості
    let sum = 0; // Змінна для загальної суми, для різних груп

    sameDuration.forEach(a => {
        sum += (a.usersDay1 + a.usersDay2) / 2;
    });

    let average = sum / sameDuration.length; // Середнє для окремої групи
    console.log(`Термін ${d} міс. — середня кількість користувачів: ${average.toFixed(1)}`);
});


console.log("\n");

// 3. Напрям з максимальною кількістю користувачів за добу 1 
console.log("3. Напрям з найбільшою кількістю користувачів за добу 1");

let maxDay1 = activity[0]; // Вважаємо перший елемент максимальним спочатку

for (let i = 0; i < activity.length; i++) {
    if (activity[i].usersDay1 > maxDay1.usersDay1) {
        maxDay1 = activity[i];
    }
}

// Вивід в консоль
console.log(`Найпопулярніший напрям за добу 1: "${maxDay1.name}"`);
console.log(`Відповідальний відділ: ${maxDay1.department}`);


console.log("\n");

// 4. Додавання нового напряму
console.log("4. Додавання нового напряму");

function addNewActivity(newItem) {
    let hasEmptyField = false; // Змінна, котра показує, чи є порожні  поля

    // Перевіряємо всі поля нового напряму
    for (let key in newItem) {
        let value = newItem[key];

        // Якщо хоч одне поле порожнє або не заповнене
        if (value === "" || value === null || value === undefined) {
            hasEmptyField = true; 
        }
    }

    // Якщо є порожні поля — додаємо в кінець
    if (hasEmptyField === true) {
        activity.push(newItem); // Пушимо в кінець масиву
        console.log("Новий напрям додано в кінець списку (деякі поля порожні).");
    } 
    // Якщо всі поля заповнені — додаємо на початок
    else {
        activity.unshift(newItem); // Використовуємо unshift для додавання на початок
        console.log("Новий напрям додано на початок списку (вся інформація є).");
    }
}


// Приклад нового напряму
let newItem = {
    id: 11,
    name: "Соціальна політика",
    department: "Відділ соціальних питань",
    govRelation: "Взаємодія з Міністерством соціальної політики України",
    usersDay1: 220,
    usersDay2: 250,
    duration: 24
};

// Викликаємо функцію з цим об'єктом
addNewActivity(newItem);


console.log("\n");

// 5. Обчислення загальної тривалості проектів відділу
console.log("5. Обчислення загальної тривалості проектів відділу");

function calcTotalDuration(departmentName) {
    // Створюємо новий масив, куди запишемо всі напрями цього відділу
    let deptActivities = [];

    // Цикл проходження по всім напрямам
    for (let i = 0; i < activity.length; i++) {
        // Якщо однакова назва відділу — пушимо напрям у новий масив
        if (activity[i].department === departmentName) {
            deptActivities.push(activity[i]);
        }
    }

    // Якщо у відділу немає жодного напряму
    if (deptActivities.length === 0) {
        console.log("Немає напрямів у цьому відділі");
        return; 
    }

    // Обчислюємо загальну тривалість, якщо 1 напрям — беремо його тривалість як є, якщо більше — кожен наступний множимо на 1,1 до своєї тривалості
    let total = 0;

    for (let i = 0; i < deptActivities.length; i++) {
        if (i === 0) {
            // Перший напрям — без змін
            total = total + deptActivities[i].duration;
        } else {
            // Усі наступні множимо на 1,1
            let withExtra = deptActivities[i].duration * 1.1;
            total = total + withExtra;
        }
    }

    // Виводимо результат у консоль
    console.log("Загальна тривалість для відділу \"" + departmentName + "\": " + total.toFixed(1) + " одиниць");

    return total;
}

// Виклик функції для прикладу
calcTotalDuration("Відділ культури");
