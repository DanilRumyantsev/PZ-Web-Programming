function getPlace(a, b) {
  if (a == 0 || b == 0) {
    console.error("Введите значения не равные 0");
    return;
  }

  const S = a * b;

  console.log(S);
}

const squareWalls = 4;

function getSquarePerimeter(a) {
  if (a == 0) {
    console.error("Введите значения не равные 0");
    return;
  }

  console.log((P = a * squareWalls));
}

function getPharengeit(c) {
  if (c == 0) {
    console.error("Введите значения не равные 0");
    return;
  }

  console.log((p = (c * 9) / 5 + 32));
}

function getDivision(a, b) {
  if (a == 0 || b == 0) {
    console.error("Введите значение не равные 0");
    return;
  }

  console.log((c = a % b));
}

function getMultiply(a, b) {
  if (a == 0 || b == 0) {
    console.error("Введите значение не равные 0");
    return;
  }

  console.log((c = a * b));
}

function getNumber(a) {
  if (a == 0) {
    console.error("Введите значение не равные 0");
    return;
  }

  if ((b = a % 2 == 0)) {
    console.log("Четное");
  } else {
    console.log("Не четное");
  }
}

function getTime(a) {
  if (a == 0) {
    console.error("Введите значение не равные 0");
    return;
  }

  console.log((b = a * 60 + " минут(ы)"));
}

function getCompare(a, b) {
  if (a == 0 || b == 0) {
    console.error("Введите значения не равные 0");
    return;
  }

  if (a > b) {
    console.log("a > b");
  } else if (a < b) {
    console.log("a < b");
  } else {
    console.log("a == b");
  }
}

function getYearsOld(birthday, currentYear) {
  if (currentYear - birthday <= 0) {
    console.error("Введите действительные значения");
    return;
  }
  console.log(currentYear - birthday);
}

function getAdditional(a, b) {
  console.log(a + b);
}

// cycles

function getNumbers() {
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  numbers.forEach((num) => {
    console.log(num);
  });
}

function getSumNumbers(n) {
  let sum = 0;

  for (i = 1; i <= n; i++) {
    sum += i;
  }

  console.log(sum);
}

function getFactorial(n) {
  let factorial = 1;

  for (i = 1; i <= n; i++) {
    factorial = factorial * i;
  }

  console.log(factorial);
}

function getEvenNumbers() {
  let overNumber = 20;

  for (let i = 0; i <= overNumber; i += 2) {
    console.log(i);
  }
}

function multiplyOnFive() {
  for (let i = 1; i <= 10; i++) {
    console.log(i * 5);
  }
}

function getMultiplicityThree() {
  let sum = 0;

  for (let i = 1; i <= 50; i++) {
    if (i % 3 == 0) {
      sum += i;
    }
  }

  console.log(sum);
}

function getBackNumbers() {
  for (let i = 10; i >= 1; i--) {
    console.log(i);
  }
}

function getMultiplyNumbers(n) {
  let first = 1;

  for (i = 1; i <= n; i++) {
    first = first * i;
  }

  console.log(first);
}

function getMultiplicitySeven() {
  for (let i = 1; i <= 100; i++) {
    if (i % 7 == 0) {
      console.log(i);
    }
  }
}

function printSymbol(symbol, n) {
  for (let i = 0; i < n; i++) {
    console.log(symbol + " " + i);
  }
}

// conditions

function getPositiveNegative(a) {
  if (a >= 0) {
    console.log("Положительное");
  } else {
    console.log("Отрицательное");
  }
}

function getResultTest(a) {
  if (a >= 90) {
    console.log("Отлично");
  } else if (a >= 70) {
    console.log("Хорошо");
  } else if (a >= 50) {
    console.log("Удовлетворительно");
  } else {
    console.log("Неудовлетворительно");
  }
}

function getEventThree(a) {
  if (a % 3 == 0) {
    console.log("Кратно 3");
  } else {
    console.log("Не кратно 3");
  }
}

function getEven(a) {
  if (a == 0) {
    console.error("Введите значение не равные 0");
    return;
  }

  if ((b = a % 2 == 0)) {
    console.log("Четное");
  } else {
    console.log("Не четное");
  }
}

function getVisYear(a) {
  if (a % 400 == 0) {
    console.log("Високосный");
  } else {
    console.log("Не високосный");
  }
}

function getJacket(a) {
  if (a <= 10) {
    console.log("Надеть куртку");
  } else {
    console.log("Не надевать куртку");
  }
}

function getAdditionFiveEleven(a) {
  if (a % 5 == 0 && a % 5 == 0) {
    console.log("a is " + true);
  } else {
    console.log("a is " + false);
  }
}

function getEvenEl(a, b) {
  if (a == b) {
    console.log("равны");
  } else {
    console.log("не равны");
  }
}

function getSymbol(a) {
  if (a == a.toUpperCase()) {
    console.log("AZ");
  } else if (a == a.toLowerCase()) {
    console.log("az");
  } else {
    console.log("Az or Za");
  }
}

//massive
function getElements(a) {
  a.forEach((i) => {
    console.log(i);
  });
}

function getEvenElement(a) {
  console.log(a.find((element) => element % 2 === 0));
}

function pushElement(a) {
  let arr = [1, 2];
  arr.forEach((i) => {
    console.log("Massive before ", i);
  });

  arr.push(a);

  arr.forEach((i) => {
    console.log("Massive after ", i);
  });
}

function pushFirstElement(a) {
  let arr = [1, 2];
  arr.forEach((i) => {
    console.log("Massive before ", i);
  });

  arr.unshift(a);

  arr.forEach((i) => {
    console.log("Massive after ", i);
  });
}

function squareElements(a) {
  a.forEach((i) => {
    console.log("Before ", i);
  });

  const squares = a.map((i) => {
    return (i = i * 2);
  });

  squares.forEach((i) => {
    console.log("After ", i);
  });
}

function popElement(a) {
  a.forEach((i) => {
    console.log("Before ", i);
  });

  a.pop();

  a.forEach((i) => {
    console.log("After ", i);
  });
}

function shiftElement(a) {
  a.forEach((i) => {
    console.log("Before ", i);
  });

  a.shift();

  a.forEach((i) => {
    console.log("After ", i);
  });
}

function unionMassive(a, b) {
  const c = a.concat(b);

  c.forEach((i) => {
    console.log(i);
  });
}

function spliceElement(a, b, c) {
  a.forEach((i) => {
    console.log("Before ", i);
  });

  a.splice(b, c);

  a.forEach((i) => {
    console.log("After ", i);
  });
}

function sliceElement(a, b) {
  a.forEach((i) => {
    console.log("Before ", i);
  });

  const newArray = a.slice(b);

  newArray.forEach((i) => {
    console.log("New ", i);
  });
}

function stringArray(a) {
  const string = a.toString();

  console.log(string);
}

function arrayString(a) {
  const array = a.split(" ");

  console.log(array);
}

function getSumElements(a) {
  let sum = 0;
  a.forEach((i) => {
    sum = sum + i;
  });

  console.log(sum);
}

function getTenElements(a) {
  const ten = a.map((element) => element + 10);

  ten.forEach((i) => {
    console.log(i);
  });
}

function getIndexElement(a) {
  console.log(a.findIndex((element) => element <= -1));
}

function createObject() {
  const person = {
    name: "Анна",
    age: 25,
  };

  console.log("Имя:", person.name);
  console.log("Возраст:", person.age);
  console.log("Полный объект:", person);
}

function addObjectProperty() {
  const person = {
    name: "Иван",
    age: 30,
  };

  console.log("До добавления:", person);
  person.city = "Москва";
  console.log("После добавления:", person);
  console.log("Город:", person.city);
}

function deleteObjectProperty() {
  const person = {
    name: "Ольга",
    age: 28,
  };

  console.log("До удаления:", person);
  delete person.age;
  console.log("После удаления:", person);
}

function changePropertyValue() {
  const person = {
    name: "Мария",
    age: 22,
  };

  console.log("До изменения:", person.name);
  person.name = "Елена";
  console.log("После изменения:", person.name);
  console.log("Полный объект:", person);
}

function checkPropertyExists(obj, propertyName) {
  const result = propertyName in obj;
  console.log(`Свойство "${propertyName}" существует:`, result);
  return result;
}

function checkPropertyExistsButton() {
  const person = { name: "Алексей", age: 35 };
  checkPropertyExists(person, "name");
  checkPropertyExists(person, "city");
}

function getPropertyValue(obj, propertyName) {
  const value = obj[propertyName];
  console.log(`Значение свойства "${propertyName}":`, value);
  return value;
}

function getPropertyValueButton() {
  const person = { name: "Дмитрий", age: 40 };
  getPropertyValue(person, "name");
  getPropertyValue(person, "city");
}

function compareObjects() {
  function isEqual(obj1, obj2) {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    if (keys1.length !== keys2.length) {
      return false;
    }

    for (let key of keys1) {
      if (obj1[key] !== obj2[key]) {
        return false;
      }
    }

    return true;
  }

  const person1 = { name: "Игорь", age: 29 };
  const person2 = { name: "Игорь", age: 29 };
  const person3 = { name: "Игорь", age: 30 };

  console.log("Объекты person1 и person2 равны:", isEqual(person1, person2));
  console.log("Объекты person1 и person3 равны:", isEqual(person1, person3));
}

function iterateObjectProperties() {
  const person = {
    name: "Светлана",
    age: 27,
    city: "Казань",
  };

  console.log("Свойства объекта:");
  for (let key in person) {
    console.log(`${key}: ${person[key]}`);
  }
}
