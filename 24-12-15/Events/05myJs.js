function prepareEventHandler()
	{
		var myParagraph = document.getElementById("p1id");
		myParagraph.onclick = function()
			{
					alert("You clicked on paragraph");
			}
	
	}
	
	window.onload = function()
	{
		prepareEventHandler();
	}