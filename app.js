console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
function printOdds(count){
    
    if(count < 0){
        console.log(`${count} is less than 0.`);
    }
    for(let i = 0; i < count; i++){
        if(i % 2 != 0){
            console.log(i);
        }
    }
}

printOdds(-20);
printOdds(20);

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
function checkAge(age, userName){
    let aboveSixteen = `Congrats ${userName}, you can drive!`;
    let belowSixteen = `Sorry ${userName}, but you need to wait until you're 16.`;

    if(userName == null){
        console.log(`Please enter your First Name.`);
        return;
    }

    if(age == null || age <= 0){
        console.log(`Please enter your age.`);
        return;
    }

    if(age > 16){
        console.log(aboveSixteen);
    }
    else{
        console.log(belowSixteen);
    }
}

checkAge(0, "K");
checkAge(18);
checkAge(18, "Kam");
checkAge(12, "Kam");

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");
function coordPlane(x, y){
    if(x == 0 && y == 0){
        console.log(`${x},${y} is in the center.`);
    }
    else if(x > 0 && y > 0){
        console.log(`(${x},${y}) is in Quadrant 1.`);
    }else if(x < 0 && y > 0){
        console.log(`(${x},${y}) is in Quadrant 2.`);
    }else if(x < 0 && y < 0){
        console.log(`(${x},${y}) is in Quadrant 3.`);
    }if(x > 0 && y < 0){
        console.log(`(${x},${y}) is in Quadrant 4.`);
    }
}

coordPlane(0,0);
coordPlane(1,5);
coordPlane(-1,5);
coordPlane(-1,-5);
coordPlane(1, -5);

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");
function formsTriangle(a,b,c){
    if( a == b && a == c && b == c){
        console.log(`Sides ${a},${b},${c} make an Equilateral triangle.`);
    }
    else if(a == b || a ==c || b == c ){
        console.log(`Sides ${a},${b},${c} makes an Isosceles triangle.`);
    }
    else{
        console.log(`Sides ${a},${b},${c} makes a Scalene triangle.`);
    }
}

formsTriangle(1, 1, 2);
formsTriangle(2, 2, 2);
formsTriangle(1, 2, 2);
formsTriangle(2, 4, 3);

// Exercise 5 Section
console.log("EXERCISE 5:\n==========\n");
function dataPlan(planLimit, day, usage){

    let dailyUseLimit = (planLimit / 30).toFixed(2);
    let currentDailyUsage = (usage / day).toFixed(2);
    let daysRemaining = 30 - day;
    let overage = ((30 * currentDailyUsage) - planLimit).toFixed(2);
    let dataRemaining = ((planLimit - usage) / daysRemaining).toFixed(2);

    console.log(`${day} days used, ${daysRemaining} days remaining.`);
    console.log(`Average daily use: ${dailyUseLimit} GB/day.`);

    if(currentDailyUsage > dailyUseLimit){
        console.log(`You are EXCEEDING your average daily use (${currentDailyUsage} GB/day,) 
        continuing this high usage, you'll exceed your data plan by ${overage} GBs.`);
    }
    else if(currentDailyUsage < dailyUseLimit){
        console.log(`You are UNDER your average daily use (${currentDailyUsage} GB/day,) 
        continuing this lower usage, you'll have excess in your data plan by ${overage * -1} GBs.`);

        console.log(`To stay below your data plan, use no more than ${dataRemaining} GBs/day.`);
    }
    else{
        console.log(`You are BREAKING EVEN in your average daily use (${currentDailyUsage} GB/day,) 
        continuing this lower usage, you'll have excess in your data plan by ${overage * -1} GBs.`);

        console.log(`To stay below your data plan, use no more than ${dataRemaining} GBs/day.`);
    }
}

console.log("Data Over");
dataPlan(100, 15, 56);
console.log();

console.log("Data Even");
dataPlan(100, 15, 50);
console.log();

console.log("Data Under");
dataPlan(100, 15, 40);
console.log();
