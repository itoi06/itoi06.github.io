var reloadPage = () => {
  location.reload()
}

var bombLoc = Math.floor(Math.random() * 25)
var treasureLoc = Math.floor(Math.random() * 25)
var counter = 15
while (bombLoc === treasureLoc) {
    var treasureLoc = Math.floor(Math.random() * 25)
  }
var treasure = (loc) => {
  counter--;
  if (counter == 0) {
    setTimeout(function () {
        alert("Indiana Jones has had too many glasses of whiskey. He passes out drunk, unable to win or lose.");
    }, 250);
    for (let i = 0; i < 25; i++)    {
        document.getElementById(i).style.pointerEvents = 'none';
    }
  }
  document.getElementById("count").innerHTML = counter;
  if (loc === bombLoc) {
    document.getElementById(loc).innerHTML = "<img src='http://pngimg.com/uploads/poison/poison_PNG60.png' height='50px'>" //skull
    setTimeout(function () {
        alert("Indiana Jones raises a glass to his lips. As the liquid flows over his tongue, he feels it burning. It acts quickly, killing him where he stands. You lose.");
    }, 250);
    for (let i = 0; i < 25; i++)    {
        document.getElementById(i).style.pointerEvents = 'none';
    }
  }
  else if (loc === treasureLoc) {
    document.getElementById(loc).innerHTML = "<img src='https://freesvg.org/img/alchemy-potion-chris.png' height='50px'>" //firework or "elixer of life"
    setTimeout(function () {
        alert("Indiana Jones raises the glass to his lips. As the liquid flows over his tongue, he feels it tingling. His body is refreshed and he knows he will live forever. Congratulations! You've won!");
    }, 250);
    for (let i = 0; i < 25; i++)    {
        document.getElementById(i).style.pointerEvents = 'none';
    }
  }

else {
    document.getElementById(loc).innerHTML = "<img src='https://pngimg.com/uploads/whisky/whisky_PNG104.png' height='50px'>" //whiskey
    document.getElementById(loc).style.pointerEvents = 'none';
  }
}

// wine &#127863;
// firework &#127879;


//poison url - http://pngimg.com/uploads/poison/poison_PNG60.png
//elixir of life url - https://freesvg.org/img/alchemy-potion-chris.png
// whiskey url - https://pngimg.com/uploads/whisky/whisky_PNG104.png