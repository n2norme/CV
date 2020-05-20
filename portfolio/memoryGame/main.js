var cardsArray = [
  {    'name': 'CSS',    'img': 'https://github.com/robgmerrill/img/blob/master/css3-logo.png?raw=true',  },
  {    'name': 'HTML',    'img': 'https://github.com/robgmerrill/img/blob/master/html5-logo.png?raw=true',  },
  {    'name': 'jQuery',    'img': 'https://github.com/robgmerrill/img/blob/master/jquery-logo.png?raw=true',  },
  {    'name': 'JS',    'img': 'https://github.com/robgmerrill/img/blob/master/js-logo.png?raw=true',  },
  {    'name': 'Node',    'img': 'https://github.com/robgmerrill/img/blob/master/nodejs-logo.png?raw=true',  },
  {    'name': 'Photo Shop',    'img': 'https://github.com/robgmerrill/img/blob/master/photoshop-logo.png?raw=true',  },
  {    'name': 'PHP',    'img': 'https://github.com/robgmerrill/img/blob/master/php-logo_1.png?raw=true',  },
  {    'name': 'Python',    'img': 'https://github.com/robgmerrill/img/blob/master/python-logo.png?raw=true',  },
  {    'name': 'Ruby',    'img': 'https://github.com/robgmerrill/img/blob/master/rails-logo.png?raw=true',  },
  {    'name': 'Sass',    'img': 'https://github.com/robgmerrill/img/blob/master/sass-logo.png?raw=true',  },
  {    'name': 'Sublime',    'img': 'https://github.com/robgmerrill/img/blob/master/sublime-logo.png?raw=true',  },
  {    'name': 'Wordpress',    'img': 'https://github.com/robgmerrill/img/blob/master/wordpress-logo.png?raw=true',  },
];

var gameGrid = cardsArray.concat(cardsArray); //double les cartes

gameGrid.sort(function(){
  return 0.5 - Math.random();
})

var game = document.getElementById('game-board');


var grid = document.createElement('section');

grid.setAttribute('class', 'grid');

game.appendChild(grid);


for (i = 0; i < gameGrid.length; i++){
  var card = document.createElement('div');
  card.classList.add('card');
  card.dataset.name = gameGrid[i].name;

  // create front of the card

  var front = document.createElement('div');
  front.classList.add('front');

  // create back of the card

  var back = document.createElement('div');
  back.classList.add('back');
  back.style.backgroundImage = `url(${gameGrid[i].img})`;

  // Append card to grid

  grid.appendChild(card);
  card.appendChild(front);
  card.appendChild(back);

};
var firstGuess = '';
var secondGuess = '';

// set count to zero

var count = 0;
var previousTarget = null;
var delay = 1200;


// Add match CSS

var match = function(){
  var selected = document.querySelectorAll('.selected');
  for (i = 0; i < selected.length; i++){
    selected[i].classList.add('match');
  }

};

// Reset guesses after two attempts

var resetGuesses = function(){
  firstGuess = '';
  secondGuess = '';
  count = 0;
  previousTarget = null;

  var selected = document.querySelectorAll('.selected');
  for (i = 0; i < selected.length; i++){
    selected[i].classList.remove('selected');
  }
};


// Add event listener to grid

grid.addEventListener('click', function(event){
  // Declare variable to target our clicked item

  var clicked = event.target;
  // Do not allow the grid section itself to be selected
  //only selected divs inside the grid

  if (clicked.nodeName == 'SECTION' || clicked == previousTarget || clicked.parentNode.classList.contains('match') || clicked.parentNode.classList.contains('selected')){
    return;
  }

  if (count < 2){
    count++;
    if (count == 1){
      //Assings first guess
      firstGuess = clicked.parentNode.dataset.name;
      clicked.parentNode.classList.add('selected');
    }else{
        secondGuess = clicked.parentNode.dataset.name;
        clicked.parentNode.classList.add('selected');
      }

      if (firstGuess !== '' && secondGuess !== ''){
        if (firstGuess == secondGuess){
          setTimeout(match, delay);
          setTimeout(resetGuesses, delay);
        } else {
          setTimeout(resetGuesses, delay);
        }
      }

      previousTarget = clicked
  }





})
