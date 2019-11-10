//var drawCats = function (howManyTimes) {
//for (var i = 0; i < howManyTimes; i++) {
//console.log(i + " =^.^=");
//}
//};
//drawCats(10);


//var secondsInAMinute = 60;
//console.log ('secondsInAMinute:', secondsInAMinute);
//var minutesInAnHour = 60;
//console.log ('minutesInAnHour:', minutesInAnHour);
//var secondsInAnHour = secondsInAMinute * minutesInAnHour;
//console.log ('secondsInAnHour:', secondsInAnHour);
//var hoursInADay = 24;
//console.log ('hoursInADay:', hoursInADay);
//var secondsInADay = secondsInAnHour * hoursInADay;
//console.log ('secondsInADay:', secondsInADay);
//var daysInAYear = 365;
//var secondsInAYear = secondsInADay * daysInAYear;
//console.log('secondsInAYear:', secondsInAYear);

//var age = 27;
//var mySecondsAge = age * secondsInAYear;
//console.log('mySecondsAge:', mySecondsAge);


//var highFives = 0;
//++highFives;
//1
//++highFives;
//2
//--highFives;
//1

//var x = 10;
//x = x + 5;
//x;

//var score = 10;
//a = score += 7;
//console.log(a);
//b = score -= 3;
//console.log(b);

//var balloons = 100;
//balloons *= 2;

//var balloons = 100;
//balloons /= 4;

//const c = "Суперпупердлиннаястрока".length;
//console.log(c);

//var java = "Java";
//console.log(java.length);
//var script = "Script";
//console.log(script.length);
//var javascript = java + script;
//javascript.length;
//console.log(javascript.length);

//var myName = "Ник";
//console.log(myName[0] + myName[1] + myName[2]);

//var codeWord1 = "обернись";
//var codeWord2 = "неужели";
//var codeWord3 = "огурцы";
//var codeWord4 = "липкие";
//var codeWord5 = "?!";
//console.log(codeWord1[1] + codeWord2[1] + codeWord3[1] + //codeWord4[1] + codeWord5[1]);


//var longString = "Эта длинная строка такая длинная";
//console.log(longString.slice(4, 18));
//console.log(longString.slice(-5));

//"Эй, как дела?".toUpperCase();

//var sillyString = "эЙ, кАК деЛа?";
//var lowerString = sillyString.toLowerCase();
//console.log(lowerString);
//var firstCharacter = lowerString[0];
//console.log(firstCharacter);
//var firstCharacterUpper = firstCharacter.toUpperCase();
//var restOfString = lowerString.slice(1); //вся строка від символу 1 і до кінця
//console.log(restOfString);
//console.log(firstCharacterUpper + restOfString);

//var sillyString = "эЙ, кАК деЛа?";
//console.log(sillyString[0].toUpperCase() + sillyString.slice(1).toLowerCase()); //коротке рішення

//var height = 155;
//var heightRestriction = 150;
//height > heightRestriction;

//var mySecretNumber = 5;
//var chicoGuess = 3;
//mySecretNumber === chicoGuess;

//var age = 11;
//var accompanied = true;

//animals = ['Белый медведь', 'Мартышка', 'Кот', 'Пес', 'Лама'];
//var lastAnimal = animals.pop();
//animals.pop();
//animals.unshift(lastAnimal);
//console.log(animals)

//var furryAnimals = ["Альпака", "Кольцехвостый лемур", "Йети"];
//var scalyAnimals = ["Удав", "Годзилла"];
//var furryAndScalyAnimals = furryAnimals.concat(scalyAnimals);
//furryAndScalyAnimals;
//console.log(furryAndScalyAnimals);

//var num1 = [1, 2, 3],
    //num2 = [4, 5, 6],
    //num3 = [7, 8, 9];
//var numbers = num1.concat(num2, num3);
//console.log(numbers);

//const num1 = [[1]];
//const num2 = [2, [3]];
//const numbers = num1.concat(num2);
//onsole.log(numbers);
// результат: [[1], 2, [3]]
// змінити перший елемент num1
//num1[0].push(4);
//console.log(numbers);
// результат: [[1, 4], 2, [3]]


//var colors = ["красный", "зеленый", "синий"];
//console.log(colors.indexOf("синий"));
//console.log(colors.indexOf("зеленый"));
//console.log(colors.indexOf("фиолетовый"));

//var boringAnimals = ["Мартышка", "Кот", "Рыба", "Ящерица"];
//console.log(boringAnimals.join());
//console.log(boringAnimals.join(" - "));
//console.log(boringAnimals.join("*"));
//console.log(boringAnimals.join(" и "));

const queue = ["sheep", "sheep", "sheep", "sheep", "sheep", "wolf"];


const reversed = queue.reverse(); 
console.log('reversed: ', reversed);

function warnTheSheep(queue){
  if (queue[queue.length-1] === 'wolf') {
    return 'Pls go away and stop eating my sheep';
  }
  return 'Oi! Sheep number' + (queue.indexOf('wolf') + 1) + '! You are about to be eaten by a wolf!';
}

//const N = queue.indexOf('wolf') + 1;
//console.log(N)


//const fisrtInQueue = queue[queue.length-1];
//console.log(fisrtInQueue);

//function warnTheSheep(queue) {
 // if queue[queue.length-1] === 'wolf'
 // return 'Pls go away and stop eating my sheep';
//}



//return "Oi! Sheep number N! You are about to be eaten by a wolf!" 
//where N is the sheep's position in the queue.
//const a = indexOf('wolf');
//N = a++;


function firstNonConsecutive(arr) {
  const result = arr.find((number, index) => number !== index + arr[0])
  return Number.isInteger(result) ? result : null
}

// Long Solution
/*
function firstNonConsecutive(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    const num = arr[i] + 1
    const consecutive = arr[i + 1]
    if (num !== consecutive) return consecutive
  }
  return null
}
*/

// Short Solution
function firstNonConsecutive(arr) {
  const result = arr.find((number, index) => number !== index + arr[0])
  return Number.isInteger(result) ? result : null
}


class SmallestIntegerFinder {
  findSmallestInt(args) {
    args.sort(function(a, b) {
    return a - b; } )
    return args[0];
  }
}