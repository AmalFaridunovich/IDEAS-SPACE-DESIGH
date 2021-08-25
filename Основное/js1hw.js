let computerBrand = prompt('Samsung, HP, Acer')

if(computerBrand === 'Samsung'){
    console.log('Samsung');
} else if(computerBrand === 'HP'){
    console.log('HP');
} else if(computerBrand === 'Acer'){
    console.log('Acer');
} else {
    console.log('We Dont Have this kind of thing');
}

let computerCOREI = prompt('Core i5, Core i4, Core i6')

if(computerCOREI === 'Core i5'){
    console.log('Core i5');
} else if(computerCOREI === 'Core i4'){
    console.log('Core i4');
} else if(computerCOREI === 'Core i6'){
    console.log('Core i6');
} else {
    console.log('We Dont Have this kind of thing');
}

let computerAccessMemory = prompt('AccessMemory8, AccessMemory12, AccessMemory16 ')

if(computerAccessMemory === 'AccessMemory8'){
    console.log('AccessMemory8');
} else if(computerAccessMemory === 'AccessMemory12'){
    console.log('AccessMemory12');
} else if(computerAccessMemory === 'AccessMemory16'){
    console.log('AccessMemory16');
} else {
    console.log('We Dont Have this kind of thing');
}

let computerMemory = prompt('Memory800, Memory1000, Memory650')

if(computerMemory === 'Memory800'){
    console.log('Memory800');
} else if(computerMemory === 'Memory1000'){
    console.log('Memory1000');
} else if(computerMemory === 'Memory650'){
    console.log('Memory650');
} else {
    console.log('We Dont Have this kind of thing');
}

let computerScreen = prompt('FullHD, Medium, Mini')

if(computerScreen === 'FullHD'){
    console.log('FullHD');
} else if(computerScreen === 'Medium'){
    console.log('Medium');
} else if(computerScreen === 'Mini'){
    console.log('Mini');
} else {
    console.log('We Dont Have this kind of thing');
}

let computerColor = prompt('Black, Silver, Platinum')

if(computerColor === 'Black'){
    console.log('Black');
} else if(computerColor === 'Silver'){
    console.log('Silver');
} else if(computerColor === 'Platinum'){
    console.log('Platinum');
} else {
    console.log('We Dont Have this kind of thing');
}


let market = {
    Brand: computerBrand,
    COREI: computerCOREI,
    AccessMemory: computerAccessMemory,
    Memory: computerMemory,
    Screen: computerScreen,
    Color: computerColor
}

console.log(market);



