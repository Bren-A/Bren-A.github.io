var path = window.location.pathname;
var page = path.split("/").pop();
console.log( page );

var button = document.getElementsByClassName("nav_button");
button = button[0];

//var div_bar = document.getElementsByClassName('bar');
//div_bar = div_bar[0];
//div_bar = div_bar.getBoundingClientRect().height;

var links = document.getElementsByClassName("overlay");
links = links[0];

//var home = document.getElementsByClassName("home_body");
//home = home[0];

//i = window.innerHeight;
//home.style.height = (i - div_bar) + "px";


button.onclick = function()
{
	var isOpen = this.classList.contains('active');
	console.log(isOpen);

    // If it contains active remove active and close it
    if (isOpen) 
    {
    	console.log("Closing div");
        this.classList.remove('active');
        links.style.minHeight = null;
    }

    // Otherwise add active and open links
    else
    {
    	console.log("Opening div");
    	this.classList.toggle('active');
    	links.style.minHeight = "100%";
    }
}