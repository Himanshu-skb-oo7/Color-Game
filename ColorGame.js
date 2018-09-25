var colorDiv= document.querySelectorAll(".colorDiv");
var limit= 6;
setColorDiv(colorDiv.length);
setHeading(colorDiv.length);

var headingColor= document.querySelector("h1").textContent.trim();


for (var i=0; i<colorDiv.length; i++) {
	
	colorDiv[i].addEventListener("click",function(){

		if(this.style.background.toUpperCase().trim()==document.querySelector("h1").textContent.trim())
		{
			

		for (var i=0; i<limit; i++) 
		{
			colorDiv[i].style.background= document.querySelector("h1").textContent.trim();
		}

		document.querySelector(".span").textContent="Correct";
		document.querySelector("#header").style.background= document.querySelector("h1").textContent.trim();
		document.querySelector("#NewColors").value="Play Again ?";
		}
		else
		{
			
			//alert("*"+document.querySelector("h1").textContent.trim()+"* *"+this.style.background.toUpperCase().trim()+"*");
			this.style.background="black";
			document.querySelector(".span").textContent="Try Again";
		
		}
	});
}

document.querySelector("#Hard").classList.add("active");

document.querySelector("#Easy").addEventListener("click", function(){

	if(limit==6)
	{

	limit=3;

	for (var i=3; i<colorDiv.length; i++) {
		colorDiv[i].classList.remove("colorDiv");
	}

	setColorDiv(limit);
	setHeading(limit);
	document.querySelector(".span").textContent="";
		


	document.querySelector("#Easy").classList.add("active");
	document.querySelector("#Hard").classList.remove("active");
	
	document.querySelector("#header").style.background="steelblue";

	}
	

});

document.querySelector("#Hard").addEventListener("click", function(){

   if(limit==3)
   {
   	limit=6;
	setColorDiv(limit);
	setHeading(limit);

	document.querySelector(".span").textContent="";
	document.querySelector("#Hard").classList.add("active");
	document.querySelector("#Easy").classList.remove("active");
	document.querySelector("#header").style.background="steelblue";
   }
	
});

document.querySelector("#NewColors").addEventListener("click", function(){

	setColorDiv(limit);
	setHeading(limit);
	this.value="New Colors";
	document.querySelector(".span").textContent="";
	document.querySelector("#header").style.background="steelblue";

});


function setHeading(limit)
{
	document.querySelector("h1").textContent= colorDiv[Math.floor(Math.random()*limit)].style.background.toUpperCase();

}

function setColorDiv(limit)
{
for (var i=0; i<limit; i++) 
	{
		colorDiv[i].classList.add("colorDiv");
		colorDiv[i].style.background= "rgb("+(Math.floor(Math.random()*255))+" ,"+(Math.random()*255)+" ,"+(Math.random()*255)+" )";
	}

}

