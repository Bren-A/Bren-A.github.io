var button = document.getElementsByClassName("nav_button");
button = button[0];

var links = document.getElementsByClassName("overlay");
links = links[0];

var path = window.location.pathname;
var page = path.split("/").pop();
console.log( page );

var div_about = document.getElementById('about');
var t_div = div_about.getBoundingClientRect().top;

// Set margin of top to bar size to prevent covering
var div_bar = document.getElementsByClassName('bar');
div_bar = div_bar[0];
var t_bar = div_bar.getBoundingClientRect().height;
div_about.style.marginTop = t_bar + "px";

var div_about_body = document.getElementsByClassName('about_body');
div_about_body = div_about_body[0];
var t_body = div_about_body.getBoundingClientRect().height;
div_about.style.minHeight = t_body + "px";
console.log(t_body);


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
        div_about.style.minHeight = t_body + "px";
        div_about.style.marginTop = t_bar + "px";
    }

    // Otherwise add active and open links
    else
    {
    	console.log("Opening div");
    	this.classList.toggle('active');
    	links.style.minHeight = "100%";
    	div_about.style.minHeight = null;
    	div_about.style.marginTop = t_body + t_bar + "px";
    }
}

console.log(t_bar);
console.log(t_div);
window.onscroll = function(e) {
    // print "false" if direction is down and "true" if up
    console.log(this.oldScroll > this.scrollY);

    var scroll = this.scrollY;
    div_about.style.top = (t_div - scroll) + "px";
    console.log(this.scrollY);
    
    this.oldScroll = this.scrollY;
}