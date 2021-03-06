window.onload=function() {
	canv=document.getElementById("gc");
	ctx=canv.getContext("2d");
	document.addEventListener("keydown",keyPush);
	setInterval(game,1000/12);
}
myScore = 0;
gridSize=tileCount=20;
tailCount=2;
xPlayer=yPlayer=10;
xApple=yApple=15;
xSpeed=ySpeed=0;
trail=[];
tail = tailCount;
function game() {
	xPlayer+=xSpeed;
	yPlayer+=ySpeed;
	if(xPlayer<0) 
    {
		xPlayer= tileCount-1;
	}
	if(xPlayer>tileCount-1) 
    {
		xPlayer= 0;
	}
	if(yPlayer<0) 
    {
		yPlayer= tileCount-1;
	}
	if(yPlayer>tileCount-1) 
    {
		yPlayer= 0;
	}
	ctx.fillStyle="black";
	ctx.fillRect(0,0,canv.width,canv.height);

	ctx.fillStyle="lime";
	for(var i=0;i<trail.length;i++) {
		ctx.fillRect(trail[i].x*gridSize,trail[i].y*gridSize,gridSize-2,gridSize-2);
		if(trail[i].x==xPlayer && trail[i].y==yPlayer) {
			tail = tailCount;
			myScore = 0;
		}
	}
	trail.push({x:xPlayer,y:yPlayer});
	while(trail.length>tail) {
	trail.shift();
	}

	if(xApple==xPlayer && yApple==yPlayer) {
		tail++;
		myScore++;
		xApple=Math.floor(Math.random()*tileCount);
		yApple=Math.floor(Math.random()*tileCount);
	}
	ctx.fillStyle="red";
	ctx.fillRect(xApple*gridSize,yApple*gridSize,gridSize-2,gridSize-2);

	document.getElementById('score').innerHTML = "Score: " + myScore;
}
function keyPush(evt) 
{
	switch(evt.keyCode) 
    {
		case 37:
			if(xSpeed != 1)
			{
				xSpeed=-1;
				ySpeed=0;
			}
			break;
		case 38:
			if(ySpeed != 1)
			{
				xSpeed=0;
				ySpeed=-1;
			}
			break;
		case 39:
			if(xSpeed != -1)
			{
				xSpeed=1;
				ySpeed=0;
			}
			break;
		case 40:
			if(ySpeed != -1)
			{
				xSpeed=0;
				ySpeed=1;
			}
			break;
	}
}