var currentPosition = 0;
var intervalHandle;

function beginAnimate()
	{
		document.getElementById("divId").style.color="red"
		document.getElementById("divId").style.position = "absolute";
		document.getElementById("divId").style.left = "0px";
		document.getElementById("divId").style.top = "100px";
		intervalHandle = setInterval(animataBox,50);
	}
function animataBox()
{

	currentPosition+=5;	
	document.getElementById("divId").style.left = currentPosition+"px";
	console.log(px.length);
	if (currentPosition >900)
	{
		clearInterval(intervalHandle);
		
		document.getElementById("divId").style.position = " ";
		document.getElementById("divId").style.left = " ";
		document.getElementById("divId").style.top = " ";
	}
}
window.onload = function()
{
	setTimeout(beginAnimate,500);
};