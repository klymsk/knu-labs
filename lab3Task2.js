// Клас користувача та його конструктор
class User {
    constructor(surname, name, age, education, feedbackGoal, date, time) {
        this.surname = surname;
        this.name = name;
        this.age = age;
        this.education = education; 
        this.feedbackGoal = feedbackGoal;
        this.date = new Date(date); 
        this.time = time; 
    }
}

// Створюємо 10 користувачів
let users = [
    new User("Поліщук", "Олександр", 25, "вища", "Отримати консультацію", "2025-03-15", "10:30"),
    new User("Мельник", "Марія", 30, "середня", "Скарга на сервіс", "2025-03-18", "18:15"),
    new User("Коваль", "Андрій", 22, "без освіти", "Порада щодо покращення", "2025-04-05", "20:10"),
    new User("Шевченко", "Ірина", 40, "вища", "Запит документів", "2025-03-10", "09:45"),
    new User("Миколенко", "Василь", 35, "середня", "Дякує за допомогу", "2025-03-22", "15:00"),
    new User("Сидоренко", "Катерина", 19, "без освіти", "Скарга на затримку", "2025-04-02", "22:30"),
    new User("Мельник", "Катерина", 27, "вища", "Підтвердження заявки", "2025-03-25", "11:00"),
    new User("Ткаченко", "Ольга", 32, "вища", "Отримати інструкцію", "2025-03-19", "16:50"),
    new User("Зелінський", "Дмитро", 29, "середня", "Запит щодо гарантії", "2025-03-14", "08:10"),
    new User("Кравець", "Юлія", 24, "вища", "Пропозиція співпраці", "2025-04-01", "13:20")
];

// 1. Вивести користувачів, які звернулися у певному місяці
console.log("1. Вивести користувачів, які звернулися у певному місяці");
console.log("\n");

function showUsers(monthNumber, hour) {
    console.log(`Користувачі, які звернулися у місяці №${monthNumber} близько ${hour}:00`);
    users.forEach(user => {
        if (user.date.getMonth() + 1 === monthNumber) {
            let userHour = parseInt(user.time.split(":")[0]); // Отримуємо годину з рядка часу
            if (userHour === hour) {
                console.log(`${user.surname} ${user.name} — ${user.time}, ${user.date.toLocaleDateString()}`);
            }
        }
    });
}

// Виклик функції 
showUsers(3, 10); 

console.log("\n");

// 2. Знайти мінімальний вік і вивести освіту цього користувача
console.log("2. Знайти мінімальний вік і вивести освіту цього користувача");
console.log("\n");

let minAgeUser = users[0]; // Вважаємо першого користувача наймолодшим спочатку

for (let i = 1; i < users.length; i++) {
    if (users[i].age < minAgeUser.age) {
        minAgeUser = users[i];
    }
}

console.log("Наймолодший користувач:");
console.log(minAgeUser.surname + " " +  minAgeUser.name + ", " +  minAgeUser.age + " років, освіта: " + minAgeUser.education);

console.log("\n");

// 3. Поділ користувачів за освітою і часом
console.log("3. Поділ користувачів за освітою і часом");
console.log("\n");

let higherEduWorking = 0;
let noEduNonWorking = 0;
let others = 0;

users.forEach(user => {
    let hour = parseInt(user.time.split(":")[0]); // Отримуємо годину з рядка часу

    if (user.education === "вища" && hour >= 9 && hour < 17) {
        higherEduWorking++;
    } else if (user.education === "без освіти" && (hour < 9 || hour >= 17)) {
        noEduNonWorking++;
    } else {
        others++;
    }
});

// Вивід результатів
console.log(`Користувачі за категоріями:`);
console.log(`- З вищою освітою у робочий час: ${higherEduWorking}`);
console.log(`- Без освіти у неробочий час: ${noEduNonWorking}`);
console.log(`- Інші: ${others}`);


console.log("\n");

// 4. Сортування користувачів за прізвищем + вивід мети
console.log("4. Сортування користувачів за прізвищем та вивід мети");
console.log("\n");

let sortedUsers = users.sort((a, b) => a.surname.localeCompare(b.surname));

console.log(`Список користувачів в алфавітному порядку:`);
console.log("\n");
sortedUsers.forEach(u => {
    console.log(`${u.surname} ${u.name} — мета: ${u.feedbackGoal}`);
});
