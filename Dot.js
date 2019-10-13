class Dot
{
	constructor(x, y, z)
	{
		this.x = x;
		this.y = y;
		this.z = z;

		this.diameter = 3;
		this.refArcRadius = 0;
		this.newX = 0;
		this.velocity = random(2, 3);
	}

	update()
	{
		if(dist(0, 0, 0, this.x, this.y, this.z) < sphereRadius
		//&& this.y < 0
		)
		{
			if(this.refArcRadius == 0)
			{
				// (hip)²  = (ca)² + (co)²
				// ca = sqrt( (hip)²-(co)² );

				let hip = sphereRadius;
				let co = this.y;
				let ca = sqrt(abs(hip*hip - co*co));

				this.refArcRadius = ca;
				this.currentArcRadius = 0;
			}
			else
			{
				let hip = sphereRadius;
				let co = abs(this.y);
				let ca = sqrt(abs(hip*hip - co*co));

				this.currentArcRadius = ca;
			}

			this.newX = map(this.x, 
				-this.refArcRadius, this.refArcRadius, 
				-this.currentArcRadius, this.currentArcRadius);

			if(this.y < 0)
			{
				this.y += map(this.y, 
				-sphereRadius, 0,
				this.velocity*0.4, this.velocity);
			}
			else
			{
				this.y += map(this.y, 
				0, sphereRadius,
				this.velocity, this.velocity*0.4);
			}
		}
		else
		{
			this.refArcRadius = 0;
			this.refArcPosition = 0;
			
			this.y += this.velocity;
		}

	}

	show()
	{
		noStroke();
		fill(dotColor);

		if(this.newX == 0)
		{
			ellipse(this.x, this.y, this.diameter, this.diameter);
		}
		else
		{
			ellipse(this.newX, this.y, this.diameter, this.diameter);
		}		
	}
}