var player = 'X';
var comp = 'O';
var curPlayer = player;

var gameOver = false;
var lockIcon = false;
var moves = 1;

//when field clicked, run mark position
$('.field').on('click', MarkPosition);
//when icon clicked, run choose team
$('.icon').on('click', ChooseTeam);

//pick your team
function ChooseTeam() {
  if ($(this).attr('id') === 'X' && !lockIcon) {
    player = 'X';
    comp = 'O';
    lockIcon = true;
  } else if ($(this).attr('id') === 'O' && !lockIcon) {
    player = 'O';
    comp = 'X';
    lockIcon = true;
  }

  curPlayer = player;

  //remove team options then add the chosen team
  $('.player').removeClass('X');
  $('.comp').removeClass('O');
  $('.player').removeClass('O');
  $('.comp').removeClass('X');
  $('.player').addClass(player);
  $('.comp').addClass(comp);

};

//toggle between comp and player
function PToggler(cplayer) {
  //condition ? value if true : value if false
  cplayer === player ? curPlayer = comp : curPlayer = player;
};

//if field is full(draw), clear it
function DrawCheck() {
  if (moves === 9) {
    setTimeout(Clear, 1000);
  }
};

//check for a win
function WinCheck() {
  switch (true) {
    case $('#r1s1').text() === curPlayer && $('#r1s2').text() === curPlayer && $('#r1s3').text() === curPlayer:
    DrawLine('#r1s1', '#r1s2', '#r1s3');
    gameOver = true;
    setTimeout (Clear, 1000);
    break;
    case $('#r2s1').text() === curPlayer && $('#r2s2').text() === curPlayer && $('#r2s3').text() === curPlayer:
    DrawLine('#r2s1', '#r2s2', '#r2s3');
    gameOver = true;
    setTimeout (Clear, 1000);
    break;
    case $('#r3s1').text() === curPlayer && $('#r3s2').text() === curPlayer && $('#r3s3').text() === curPlayer:
    DrawLine('#r3s1', '#r3s2', '#r3s3');
    gameOver = true;
    setTimeout (Clear, 1000);
    break;
    case $('#r1s1').text() === curPlayer && $('#r2s1').text() === curPlayer && $('#r3s1').text() === curPlayer:
    DrawLine('#r1s1', '#r2s1', '#r3s1');
    gameOver = true;
    setTimeout (Clear, 1000);
    break;
    case $('#r1s2').text() === curPlayer && $('#r2s2').text() === curPlayer && $('#r3s2').text() === curPlayer:
    DrawLine('#r1s2', '#r2s2', '#r3s2');
    gameOver = true;
    setTimeout (Clear, 1000);
    break;
    case $('#r1s3').text() === curPlayer && $('#r2s3').text() === curPlayer && $('#r3s3').text() === curPlayer:
    DrawLine('#r1s3', '#r2s3', '#r3s3');
    gameOver = true;
    setTimeout (Clear, 1000);
    break;
    case $('#r1s1').text() === curPlayer && $('#r2s2').text() === curPlayer && $('#r3s3').text() === curPlayer:
    DrawLine('#r1s1', '#r2s2', '#r3s3');
    gameOver = true;
    setTimeout (Clear, 1000);
    break;
    case $('#r1s3').text() === curPlayer && $('#r2s2').text() === curPlayer && $('#r3s1').text() === curPlayer:
    DrawLine('#r1s3', '#r2s2', '#r3s1');
    gameOver = true;
    setTimeout (Clear, 1000);
    break;
    default:

    DrawCheck();
  }
};

//draw a line by adding class of winner through css
function DrawLine(pos1,pos2,pos3) {
  var $pos1 = $(pos1);
  var $pos2 = $(pos2);
  var $pos3 = $(pos3);
  $pos1.addClass('winner');
  $pos2.addClass('winner');
  $pos3.addClass('winner');

PToggler(curPlayer);
}

//reset everything for another game
function Clear() {
  $('.field').empty();

  $('.field').removeClass('clicked');

  $('div').removeClass('winner');

  moves = 1;

  gameOver = false;

  ChooseTeam();
};

//type the icon into the field
function DrawIcon(id) {
  $('#' + id).html('<p class="icons">' + curPlayer + '</p>');
}

//mark the position that was clicked
function MarkPosition() {
  lockIcon = true;
  var id = $(this).attr('id');

  if (!$('#' + id).hasClass('clicked')) {
    $('#' + id).addClass('clicked');

    DrawIcon(id);

    WinCheck();

    moves += 1;

    PToggler(curPlayer);

    if (gameOver === false && moves % 2 === 0) {
      CompAI();
      WinCheck();
      moves += 1;
      PToggler(curPlayer);
    }
  }
};

//computer moves
function CompAI() {
  switch (true) {
    case $('#r1s1').text() !== player && $('#r1s1').text() !== comp:
      DrawIcon('r1s1');
      break;
    case $('#r1s2').text() !== player && $('#r1s2').text() !== comp:
      DrawIcon('r1s2');
      break;
    case $('#r1s3').text() !== player && $('#r1s3').text() !== comp:
      DrawIcon('r1s3');
      break;
    case $('#r2s1').text() !== player && $('#r2s1').text() !== comp:
      DrawIcon('r2s1');
      break;
    case $('#r2s2').text() !== player && $('#r2s2').text() !== comp:
      DrawIcon('r2s2');
      break;
    case $('#r2s3').text() !== player && $('#r2s3').text() !== comp:
      DrawIcon('r2s3');
      break;
    case $('#r3s1').text() !== player && $('#r3s1').text() !== comp:
      DrawIcon('r3s1');
      break;
    case $('#r3s2').text() !== player && $('#r3s2').text() !== comp:
      DrawIcon('r3s2');
      break;
    case $('r3s3').text() !== player && $('#r2s3').text() !== comp:
      DrawIcon('r3s3');
      break;
  }
};
