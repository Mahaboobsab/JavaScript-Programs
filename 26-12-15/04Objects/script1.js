var playarNadaf = { name:"Meheboob",score:10000,rank:1 };
//console.log(playarNadaf);

console.log(playarNadaf.name);
console.log(playarNadaf.score);
console.log(playarNadaf.rank);

playarNadaf.gameType="Cricket";
//console.log(playarNadaf);

console.log(playarNadaf.gameType);
playarNadaf.longScore = function()
	{
		console.log(this.score);
	}
playarNadaf.longScore();

var playerMeheboob = {name:"Nadaf",highscore:50,level="b"};	