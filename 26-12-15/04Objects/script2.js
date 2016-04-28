function Player(n,s,r)
	{
		this.name = n;
		this.score = s;
		this.rank = r;
		this.natioanlity = "Indian";
		
	}
	var nadaf = new Player("Nadaf",1000,1);
	//nadaf.prize = "1st";
	
		console.log(nadaf.name);
		console.log(nadaf.score);
		console.log(nadaf.rank);
		console.log(nadaf.prize);
		
		
	nadaf.tellName = function()
	{
		console.log("My surName is "+this.name);
	}
	nadaf.tellName();
Player.position = "2nd";
console.log("Nadaf position is "+nadaf.position);
console.log("Nadaf Nationality is "+this.natioanlity);
console.log("Nadaf Nationality is "+nadaf.natioanlity);
Player.prototype.logInfo = function()
	{
		console.log("I am :  "+this.name);
	}
	
Player.prototype.promote = function()
	{
		this.rank++;
		console.log("I My new rank is  :  "+this.rank);
	}
	
	
	var nadaf = new Player("Nadaf",1000,1);
	nadaf.logInfo();
	nadaf.promote();
	
	var kadir = new Player("Khadhir",2222,7);
	kadir.logInfo();
	kadir.promote();
	
	var Sabiya = new Player("Konnur",7777,420);
	Sabiya.logInfo();
	Sabiya.promote();