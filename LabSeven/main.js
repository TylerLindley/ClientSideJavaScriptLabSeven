//Selecting the organized list element.
let ol = document.querySelector('ol');
let secondList = document.querySelectorAll('ol')[1];

//creating the constructor function.
//Has 3 properties, and two functions (to display info two different places)

//1.) Think of something that we can represent as an object in JavaScript
// 2.) Use a constructor function to create a template or class for this object. Include a least 3 properties (movies could be name of movie, year, actors, director etc.) and one method that will display all the information about the object. (music, coffee, video games, cars, movies etc.) 
function VideoGameUser(name, favouriteGame, purchaseDate) {
    this.name = name;
    this.favouriteGame = favouriteGame;
    this.purchaseDate = purchaseDate;
    this.informationDisplayOnWebpage = function() {
        let newLi = document.createElement('li');
        newLi.textContent = name + "'s favourite game is: " + favouriteGame + ' when they bought it on: ' + purchaseDate;
        ol.appendChild(newLi);
    };
    this.information = function () {
        console.log(name + "'s favourite game is: " + favouriteGame + ' when they bought it on: ' + purchaseDate);
    };
}

//3.) Conduct a survey of at least 5 people to gather information about your object (i.e. what is their favourite movie? ) 
//5.) Instantiate a new instance of your object to represent the information you gathered (i.e 5 peeps = 5 object instances) 
//instantiating the object and creating users with information
let tyler = new VideoGameUser('Tyler', 'Cat of Duty: Meowzone!', 'July 6th 2020');
let jessica = new VideoGameUser('Jessica', 'Catz', 'January 1st, 2020');
let nickiMinaj = new VideoGameUser('Nicki Minaj', 'Nicki Minaj: The Empire for IOS Devices', 'December 8th 2014');
let katelyn = new VideoGameUser('Katelyn', 'NBA2k20', 'October 1st, 2019');
let hailey = new VideoGameUser('Hailey', 'Fortnite', 'September 9th, 2018');

//Displaying the information in the console.
//6.) Find a fun way to display this info in the browser. 

tyler.information();
jessica.information();
nickiMinaj.information();
katelyn.information();
hailey.information();

//6.) Find a fun way to display this info in the browser. 

tyler.informationDisplayOnWebpage();
jessica.informationDisplayOnWebpage();
nickiMinaj.informationDisplayOnWebpage();
katelyn.informationDisplayOnWebpage();
hailey.informationDisplayOnWebpage();


//* BONUS * completed using class syntax

class VideoGameUsers {
    constructor(name, favouriteGame, purchaseDate){
    this.name = name;
    this.favouriteGame = favouriteGame;
    this.purchaseDate = purchaseDate;
    this.informationDisplayOnWebpage = function() {
        let newLi = document.createElement('li');
        newLi.textContent = name + "'s favourite game is: " + favouriteGame + ' when they bought it on: ' + purchaseDate;
        secondList.appendChild(newLi);
    };
    this.information = function () {
        console.log(name + "'s favourite game is: " + favouriteGame + ' when they bought it on: ' + purchaseDate + ' Created using class syntax!');
    };
}
}

let tyler2 = new VideoGameUsers('Tyler', 'Cat of Duty: Meowzone!', 'July 6th 2020');
let jessica2 = new VideoGameUsers('Jessica', 'Catz', 'January 1st, 2020');
let nickiMinaj2 = new VideoGameUsers('Nicki Minaj', 'Nicki Minaj: The Empire for IOS Devices', 'December 8th 2014');
let katelyn2 = new VideoGameUsers('Katelyn', 'NBA2k20', 'October 1st, 2019');
let hailey2 = new VideoGameUsers('Hailey', 'Fortnite', 'September 9th, 2018');


tyler2.information();
jessica2.information();
nickiMinaj2.information();
katelyn2.information();
hailey2.information();

tyler2.informationDisplayOnWebpage();
jessica2.informationDisplayOnWebpage();
nickiMinaj2.informationDisplayOnWebpage();
katelyn2.informationDisplayOnWebpage();
hailey2.informationDisplayOnWebpage();