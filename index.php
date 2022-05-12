<!doctype html>
<html lang="fr">
<head>
  <meta charset="utf-8">
  <title>Jeu du dé</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&display=swap" rel="stylesheet">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css">
<link rel="stylesheet" href="style.css">
<script type="text/javascript" src="script.js"></script>
</head>
<body class="grid">

  <div id="p1-redblock" class="red-block"></div>
  <div id="p2-redblock" class="red-block"></div>
  <div id="txtPlayer1" class="txtPlayer1">Player 1</div>
  <div id="txtPlayer2" class="txtPlayer2">Player 2</div>
  <div id="current-p1" class="current-p1">CURRENT</div>
  <div id="current-p2" class="current-p2">CURRENT</div>
  <div id="dice-pic" class="dice-pic">

  <img id="dice"
     src="assets/dice_6.png">

  </div>

  <div onclick="newGame()" id="new-game" class="new-game"><i class="bi bi-plus-circle-fill"></i> NEW GAME</div>
  <div onclick="RollDice()" id="roll-dice" class="roll-dice"><i class="bi bi-arrow-clockwise"></i> ROLL DICE</div>
  <div onclick="Hold()" id="hold" class="hold"><i class="bi bi-box-arrow-in-down"></i> HOLD</div>
  <div id="number-p1" class="number-p1">0</div>
  <div id="number-p2" class="number-p2">0</div>
  <div id="score-p1" class="score-p1">0</div>
  <div id="score-p2" class="score-p2">0</div>



</body>
</html>
