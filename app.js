let model = {
    currentCat: null,    
    cats : [
        {
            name: 'Sammy', 
            imgSrc: 'images/cat.jpg',
            clickCount : 0
        },
        {
            name: 'Roger',
            imgSrc: 'images/cat2.jpg',
            clickCount : 0
        },
        {
            name: 'Tom',
            imgSrc: 'images/cat3.jpg',
            clickCount : 0
        },
        {
            name: 'Sandy',
            imgSrc: 'images/cat4.jpg',
            clickCount : 0
        },
        {
            name: 'Billy',
            imgSrc: 'images/cat5.jpg',
            clickCount : 0
        }
    ]
}

/* ======= Octopus ======= */
let octopus = {
    
    init: function() {
        // set our current cat to the first one in the list
        model.currentCat = model.cats[0];
        
        // tell our views to initialize
        catListView.init();
        catView.init();
    },

    getCurrentCat: function() {
        return model.currentCat;
    },

    //get cats from model
    getCats: function() {
        return model.cats;
    },

    // set the currently-selected cat to the object passed in
    setCurrentCat: function(cat) {
        model.currentCat = cat;
    },

    // increments the counter for the currently-selected cat
    incrementCounter: function() {
        model.currentCat.clickCount ++;
        catView.render();
    }
};


/* ======= View ======= */

var catView = {

    init: function() {
        //match to DOM elements
        this.catElem = document.getElementById('cat');
        this.nameElem = document.getElementById('name');
        this.imgElem = document.getElementById('pic');
        this.countElem = document.getElementById('count');

        //Increment counter
        this.imgElem.addEventListener('click', function(){
            octopus.incrementCounter();
        });

        //update view
        this.render();
    },

    render: function() {
       //Reload view with current values
       let currentCat = octopus.getCurrentCat();
       this.nameElem.textContent = currentCat.name;
       this.imgElem.src = currentCat.imgSrc;
       this.countElem.textContent = currentCat.clickCount;
    }
};

var catListView = {

    init: function() {
        //match list to DOM element
        this.listElem = document.getElementById('cat-list');
        
        //update view
        this.render();
    },

    render: function() {
        //get cats from octopus
        let cats = octopus.getCats();

        //empty list
        this.listElem.innerHTML = '';

        //loop cats
        for (let i = 0; i <cats.length; i ++){            
            //cat we are on
            let cat = cats[i];
        
            //Create DOM element for cat
            let elem = document.createElement('li');
            elem.textContent = cat.name;

            //when clicked, open cat info
            elem.addEventListener('click', (function(catCopy) {
                return function() {        
                    octopus.setCurrentCat(catCopy);
                    catView.render();    
                };
            })(cat));

            //add to list
            this.listElem.appendChild(elem);
        }
    }
};

// make it go!
octopus.init();