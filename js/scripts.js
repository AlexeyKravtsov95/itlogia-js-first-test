let mercedes = {
    name: "Mercedes",
    model: "GL450",
    engine: 4.5,
    year: 2015,
    color: "black",
    hp: 300,
    forSale: true,
};

let bmw = {
    name: "BMW",
    model: "X6",
    engine: 3.0,
    year: 2023,
    color: "white",
    hp: 313,
    forSale: false,
};

let audi = {
    name: "Audi",
    model: "Q7",
    engine: 3.0,
    year: 2025,
    color: "blue",
    hp: 249,
    forSale: true
};

let year = 2025;

mercedes.carAge = year - mercedes.year;
bmw.carAge = year - bmw.year;
audi.carAge = year - audi.year;

let names = `${mercedes.name} ${mercedes.model}, ${bmw.name} ${bmw.model}, ${audi.name} ${audi.model}`;
let averageAge = (mercedes.carAge + bmw.carAge + audi.carAge) / 3;
let atLeastOneForSale = mercedes.forSale || bmw.forSale || audi.forSale ? "Да" : "Нет";
let allYoungerThanFive = (mercedes.carAge < 5) && (bmw.carAge < 5) && (audi.carAge < 5) ? "Да" : "Нет";
let atLeastOneHasLittleHp = (mercedes.hp < 250) || (bmw.hp < 250) || (audi.hp < 250) ? "Да" : "Нет";

alert(
    `Возраст ${mercedes.name} - ${mercedes.carAge}, Возраст ${bmw.name} - ${bmw.carAge}, Возраст ${audi.name} - ${audi.carAge}`)
alert(`Средний возраст авто - ${averageAge}`)
alert(`Марка и модель всех авто - ${names}`);
alert('Хотя бы один автомобиль продаётся?\n' + atLeastOneForSale);
alert('Все авто младше 5 лет?\n' + allYoungerThanFive);
alert('Хоть один автомобиль имеет менее 250 лошадиных сил?\n' + atLeastOneHasLittleHp);

let car = bmw;

if (car.name === 'Mercedes' && car.model === 'GL450') {
    alert("Мой любимый мерседес!");
} else {
    alert(`Это - ${car.name} ${car.model}`);
}

if (car.carAge === 0) {
    alert("Новый автомобиль")
} else if (car.carAge <= 3) {
    alert("Свежий автомобиль")
} else {
    alert(`Лет этому авто: ${car.carAge}`)
}

let consumption = car.engine > 3.0 ? "Прожорливый автомобиль" : "Экономичный автомобиль";
alert(consumption);

let russianColor = car.color;

switch (russianColor) {
    case "black":
        russianColor = "черный"
        break;
    case "silver":
        russianColor = "серебристый"
        break;
    case "red":
        russianColor = "красный"
        break;
    case "white":
        russianColor = "белый"
        break;
    case "gray":
        russianColor = "серый"
        break;
    case "blue":
        russianColor = "синий"
        break;
    default:
        russianColor = "Невозможно определить цвет автомобиля"
        break;
}

alert(russianColor);