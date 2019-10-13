let dot = [];
let count = 0
let sphereRadius = 0;

function setup()
{
	createCanvas(800, 800);

	backColor = color(0, 20);
	dotColor = color(0, 127, 255);

	sphereRadius = width/3;

	background(backColor);
}

function draw()
{
	//background(0);
	fill(backColor, 45);
	rect(0, 0, width, height);

	translate(width/2, height/2);

	newDot(2);

	clearCache();

	showDots();

	count++;

	console.log(dot);
}

function newDot(qtde)
{
	for(let n=0; n<qtde; n++)
	{
		let x = random(-width/2, width/2);
		let y = -height/2;
		let z = random(-sphereRadius, sphereRadius);
		
		dot.push(new Dot(x, y, z));
	}
}

function clearCache()
{
	for(let i=dot.length-1; i>=0; i--)
	{
		if(dot[i].y > height/2)
		{
			dot.splice(i, 1);
		}
	}
}

function showDots()
{
	for(let i=0; i<dot.length; i++)
	{
		dot[i].update();
		dot[i].show();
	}
}