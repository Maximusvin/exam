// 1.	Дано масив [1,5,7,8,9,0, -5, -55, 105, 0, 5, 299, 6 ,7];
// Знайти максимальне значення масиву.

const arr = [1, 5, 7, 8, 9, 0, -5, -55, 105, 0, 5, 299, 6, 7];
console.log(Math.max(...arr));

// 2.	Дано масив [“test”, 12, undefined, null, -5, “javascript”, “1”, false, true, 0 , “!”].
// Створити новий масив де будуть тільки Стрінгові значення.

const arr1 = [
  "test",
  12,
  undefined,
  null,
  -5,
  "javascript",
  "1",
  false,
  true,
  0,
  "!",
];

const newArr1 = [];

arr1.forEach((item) => {
  if (typeof item === "string") {
    newArr1.push(item);
  }
});

console.log(newArr1);

// 3.	Дано колекцію -
// [{ name: "Yura", age: 55, hobby: ["football", "ski", "hiking"], type: "Admin" }, { name: "Yulian", age: 28, hobby: ["films", "games", "hiking"], type: "user" }, { name: "Taras", age: 38, hobby: ["hunting", "TV", "javascript"], type: "user" }]–
// Вивести всіх юзерів з типом user.
// Вивести юзерів які мають хоббі hiking.
// Додати можливість додати нове поле для всіх юзерів – job(true / false);

const users = [
  {
    name: "Yura",
    age: 55,
    hobby: ["football", "ski", "hiking"],
    type: "Admin",
  },
  {
    name: "Yulian",
    age: 28,
    hobby: ["films", "games", "hiking"],
    type: "user",
  },
  {
    name: "Taras",
    age: 38,
    hobby: ["hunting", "TV", "javascript"],
    type: "user",
  },
];

function showUsers(users) {
  users.forEach((user) => {
    if (user.type === "user") {
      console.log(user.name);
    }
  });
}

function showUsersHobbyHiking(users) {
  users.forEach((user) => {
    if (user.hobby.includes("hiking")) {
      console.log(user.name);
    }
  });
}

function addToJobUser(users) {
  users.forEach((user) => {
    const isAddJob = confirm(
      `Чи потрібно добавити юзеру ${user.name} дані про його роботу?`
    );

    if (isAddJob) {
      const job = prompt(`Введіть назву роботи для юзера ${user.name}`);
      user.job = job;
    }
  });
  console.log("Оновлений масив юзерів: ", users);
}

showUsers(users);
showUsersHobbyHiking(users);
addToJobUser(users);

// 4.	Додати на сторінку івент який буде викидати алерт як тільки ми захочемо скопіювати текст з сторінки (додайте 1 рядок будь якого тексту)
// і сповіщати що це інтелектуальна власність власника.

document.addEventListener("copy", () => {
  alert(
    "Ей, дружище!!!! Стоп-стоп. Копіювання матеріалів карається законом України ст.187 п4.2/435. Одумайся. Ти крадеш інтелектуальну власність"
  );
});

// 5.	https://restcountries.eu/rest/v2/all – АПІ endpoint для країн.
// Вивести нумерований список з іменами всіх країн та її столицею на сторінку, назву країни зробити
// великими буквами.

const countryListRef = document.querySelector(".country-list");

const baseUrl = "https://restcountries.eu/rest/v2/all";

fetch(baseUrl)
  .then((res) => res.json())
  .then(showCountryList);

function showCountryList(country) {
  country.forEach((country) => {
    countryListRef.insertAdjacentHTML(
      "beforeend",
      `<li>
    <p>Країна: <span class="country-name">${country.name}</span></p>
    <p>Столиця: ${country.capital}</p>
    </li>`
    );
  });
}
