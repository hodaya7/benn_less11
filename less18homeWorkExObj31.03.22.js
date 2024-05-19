//hw
//1
function displayName(person) {
    console.log(person.firstName+" "+person.lastName);//hodaya co
}

var person = {
    firstName: "hodaya",
    lastName: "co"
}

displayName(person)

//2
function sleep(cat) {
    cat.tiredness--;
}

function feed(cat) {
    cat.hunger--;
}

function play(cat) {
    cat.happines++;
}

function pet(cat) {
    cat.loneliness--;
}

var cat = {
    tiredness:4,
    hunger:5,
    loneliness:3,
    happines: 9
}

pet(cat);
console.log(cat);//{ tiredness: 4, hunger: 5, loneliness: 2, happines: 9 }

//3
var favRecipe = {
    title: "tommatoSauce",
    numOfOrders: 3,
    isVegan: true,
    ingredients: ["tommato","carrot","basil", "oregano", "oliveOil"]
}

console.log(favRecipe);
// {
//     title: 'tommatoSauce',
//     numOfOrders: 3,
//     isVegan: true,
//     ingredients: [ 'tommato', 'carrot', 'basil', 'oregano', 'oliveOil' ]
//   }

function increaseOrders(recipe) {
    recipe.numOfOrders++;
}

increaseOrders(favRecipe);
console.log(favRecipe);
// {
//     title: 'tommatoSauce',
//     numOfOrders: 4,
//     isVegan: true,
//     ingredients: [ 'tommato', 'carrot', 'basil', 'oregano', 'oliveOil' ]
//   }

function addNewIngredient(recipe, ingredient) {
    recipe.ingredients[recipe.ingredients.length]=ingredient;
    console.log(recipe);
}

addNewIngredient(favRecipe, "cheese")

// {
//     title: 'tommatoSauce',
//     numOfOrders: 4,
//     isVegan: true,
//     ingredients: [ 'tommato', 'carrot', 'basil', 'oregano', 'oliveOil', 'cheese' ]
//   }

function removeIngredient(recipe, ingredient) {
    var res = recipe.ingredients.indexOf(ingredient);
    if(res>-1)
    delete recipe.ingredients[res];
    console.log(recipe);
}


removeIngredient(favRecipe,"oliveOil")
// {
//     title: 'tommatoSauce',
//     numOfOrders: 4,
//     isVegan: true,
//     ingredients: [ 'tommato', 'carrot', 'basil', 'oregano', <1 empty item>, 'cheese' ]
//   }

function print(favRecipe) {
    console.log(favRecipe.title);
    console.log(favRecipe.numOfOrders);
    console.log(favRecipe.isVegan);
    console.log(favRecipe.ingredients[0]);
    console.log(favRecipe.ingredients[1]);
}

function isVegan(favRecipe) {
    return favRecipe.isVegan;
}

console.log(isVegan(favRecipe));//true

//4
var booksArr = [
    {
        title: "poo hadov",
        author: "moshe",
        alreadyRead: false
    },
    {
        title: "dardasim",
        author: "aharon",
        alreadyRead: true
    },
    {
        title: "muminim",
        author: "david",
        alreadyRead: false
    },
]

function printBook(element, index) {
    if(element.alreadyRead)
    console.log("you already read ");
    else
    console.log("you still need to read ");
    console.log('the "'+element.title+'" by '+element.author);
}

booksArr.forEach(printBook)
// you still need to read 
// the "poo hadov" by moshe
// you already read
// the "dardasim" by aharon
// you still need to read
// the "muminim" by david



  