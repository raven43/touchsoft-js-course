function log(a) {
    console.log(a);
}

/**
 * реализовать фукнцию `fizzBuzz`
 * которая выводит числа от 1 до 100.
 * Если число кратно 3 - вместо числа вывести `Fizz`.
 * Если кратно 5 - вывести вместо числа `Buzz`.
 * Если число кратно и 3 и 5 - вывести вместо числа `FizzBuzz`.
 * Для вывода использовать фукнцию `log` (аналогично заданию в классе).
 * В теле функции нельзя использовать  `if`, `switch`, тернарный оператор `? :`
 */

function fizzBuzz(n) {
    n = n ? n : 100;
    var result = [];
    var i;
    for (i = 1; i <= n; i++)
        result.push(i);

    for (i = 0; i < Math.floor(result.length / 3); i++)
        result[(i + 1) * 3 - 1] = 'Fizz';

    for (i = 0; i < Math.floor(result.length / 5); i++)
        result[(i + 1) * 5 - 1] = 'Buzz';

    for (i = 0; i < Math.floor(result.length / 15); i++)
        result[(i + 1) * 15 - 1] = 'FizzBuzz';

    for (i = 0; i < result.length; i++)
        log(result[i]);
}

/**
 * реализовать фукнцию  `isPolindrom`,
 * которая принимает на вход строку и возвращает результат проверки (`true`/ `false` ),
 * является строка полндромом (одинакого читается с лева на право и с права на лево ) или нет
 * @param {string} textString
 * @return {boolean} Является строка полндромом (одинакого читается с лева на право и с права на лево ) или нет
 */
function isPolindrom(textString) {
    if (!textString instanceof String) return undefined;
    var lastIndex = textString.length - 1;
    for (var i = 0; i <= lastIndex; i++) {
        if (textString.charAt(i) != textString.charAt(lastIndex - i))
            return false;
    }
    return true;
}

/**
 * Реализовать фукнцию `drawCalendar` ,
 * которая принимает три аргумента - год, месяц, htmlElement
 * и выводит в этот элемент календарь на месяц (дни недели начинаются с понедельника ).
 * @param {number} year
 * @param {number} month - номер месяца, начиная с 1
 * @param {external:HTMLElement} htmlEl
 */
function drawCalendar(year, month, htmlEl) {

    if (month > 11 || month < 0 || !htmlEl instanceof HTMLElement) return false;
    var calendar = document.createElement("table");
    calendar.innerHTML = " <thead>" +
        "<tr>" +
        "<td>Monday</td>" +
        "<td>Tuesday</td>" +
        "<td>Wensday</td>" +
        "<td>Thursday</td>" +
        "<td>Friday</td>" +
        "<td>Saturday</td>" +
        "<td>Sunday</td>" +
        "</tr>" +
        "</thead>";

    var daysCount = daysInMonthCount(month, year);
    var weekDay = new Date(year, month, 1).getDay();
    var weeksCount = Math.ceil((daysCount + weekDay - 1) / 7);
    var weeks = document.createElement("tbody");

    //create row for each week
    for (var i = 0; i < weeksCount; i++)
        weeks.appendChild(document.createElement("tr"));

    //fill first week with empty columns
    for (var i = 0; i < weekDay - 1; i++)
        weeks.rows[0].appendChild(document.createElement("td"));

    var weekDayCounter = weekDay;
    var dayCounter = 1;
    var weekCounter = 0;

    //fill calendar
    while (dayCounter <= daysCount) {
        var day = document.createElement("td");
        day.innerText = dayCounter;
        weeks.rows[weekCounter].appendChild(day);
        dayCounter++;
        if (weekDayCounter++ === 7) {
            weekDayCounter = 1;
            weekCounter++;
        }
    }

    calendar.appendChild(weeks);
    htmlEl.appendChild(calendar);
    return true;
}

function daysInMonthCount(month, year) {
    switch (month) {
        case 0:
        case 2:
        case 4:
        case 6:
        case 7:
        case 11:
        case 9:
            return 31;
        case 3:
        case 5:
        case 8:
        case 10:
            return 30;
        case 1:
            return year % 4 === 0 ? 29 : 28;
    }
}

/**
 * Написать функцию `isDeepEqual`
 * которая принимает на вход двe переменных
 * и проверяет идентичны ли они по содержимому. Например
 * @param {*} objA
 * @param {*} objB
 * @return {boolean} идентичны ли параметры по содержимому
 */
function isDeepEqual(objA, objB) {
    for (var key in objA)
        if (!objB.hasOwnProperty(key) || !objA[key] === objB[key])
            return false;

    for (var key in objB)
        if (!objA.hasOwnProperty(key) || !objB[key] === objA[key])
            return false;
    return true;
}

function spiral(matrix) {

    var spiralLength = matrix.length * matrix[0].length;
    var arr = [];
    var x = 0, y = 0;
    var direction = "right";
    while (spiralLength > 0) {
        if (matrix[y] && matrix[y][x]) {
            spiralLength--;
            arr.push(matrix[y][x]);
            matrix[y][x] = undefined;
            switch (direction) {
                case "right":
                    x++;
                    break;
                case "left":
                    x--;
                    break;
                case "up":
                    y--;
                    break;
                case "down":
                    y++;
                    break;
            }
        } else switch (direction) {
            case "right":
                x--;
                y++;
                direction = "down";
                break;
            case "left":
                x++;
                y--;
                direction = "up";
                break;
            case "up":
                x++;
                y++;
                direction = "right";
                break;
            case "down":
                x--;
                y--;
                direction = "left";
                break;
        }
    }
    return arr;
}

function quadraticEquation(a, b, c) {
    var d2 = b * b - 4 * a * c;
    if (d2 < 0) return [];
    if (d2 === 0) return -b / (2 * a);
    return [(-b + Math.sqrt(d2)) / (2 * a), (-b - Math.sqrt(d2)) / (2 * a)];
}




