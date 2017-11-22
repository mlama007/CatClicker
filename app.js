//model
//Cats
let cats = [
    {
        name: 'Sammy', 
        pic: 'images/cat.jpg',
        counter: 0
    },
    {
        name: 'Roger',
        pic: 'images/cat2.jpg',
        counter: 0
    },
    {
        name: 'Tom',
        pic: 'images/cat3.jpg',
        counter: 0
    },
    {
        name: 'Sandy',
        pic: 'images/cat4.jpg',
        counter: 0
    },
    {
        name: 'Billy',
        pic: 'images/cat5.jpg',
        counter: 0
    }
];


//view
//loop over cats
for (let i = 0; i <cats.length; i++) {
    //cat we are on
    let catName = cats[i].name;

    //Create DOM element for cat
    let elem = document.createElement('div');
    elem.textContent = catName;

    //change view when name is clicked
    elem.addEventListener('click', (function(catNameCopy) {
        return function() {        
            //add Cat info when cat's name is clicked
            document.getElementById("demo").innerHTML = '<h1>' + catNameCopy + '</h1>' + "<p>" + '<img class="catPic" src="' + cats[i].pic + '" alt="kitten">' + "<br> <span id='count'>" + cats[i].counter + ' </span> </p>'; 
            
            //increment counter when img is clicked
            document.getElementsByClassName('catPic')[0].addEventListener('click', (function(catNameCopy) {
                return function() {
                    document.getElementById('count').innerHTML = cats[i].counter += 1;            
                };
            })(catName)); 
        };
    })(catName));

    document.getElementById("display").appendChild(elem);
}