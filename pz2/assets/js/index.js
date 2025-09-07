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
