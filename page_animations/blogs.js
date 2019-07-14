var path = window.location.pathname;
var page = path.split("/").pop();
console.log( page );

var button = document.getElementsByClassName("nav_button");
button = button[0];

var div_bar = document.getElementsByClassName('bar');
div_bar = div_bar[0];
div_bar = div_bar.getBoundingClientRect().height;

var links = document.getElementsByClassName("overlay");
links = links[0];

i = window.innerHeight;
// How high each blog window should be
var window_height = (i - div_bar) + "px";
console.log(window_height);

var topics = document.getElementsByClassName("topics");
topics = topics[0];
//console.log(topics);
topics.style.height = (i-div_bar) + "px";
//console.log(topics.style.height);

// get all the article topics into one array
var windows = document.getElementsByClassName("articles");

// Set timeout so that won't be done until after whole page is loaded
setTimeout(function(){
    // Set articles to be below bar
    for(var j = 0; j < windows.length; j++)
    {
        windows[j].style.top = div_bar + "px";
    }

    // Add click event listener to open
    var article_button = document.getElementsByClassName("topic");
    for(var j = 0; j < article_button.length; j++)
    {
        article_button[j].addEventListener('click', function(){
            // Get topic of article
            article_class = this.className.split(" ")[1];
            console.log(article_class);
            for(var k = 0; k < windows.length; k++)
            {
                var article = windows[k].className.split(" ")[1];
                if(article == article_class)
                {
                    windows[k].style.height = window_height;
                    windows[k].style.opacity = ".85";
                }

            }
        });
    }

    // Add click event listener to close
    var close = document.getElementsByClassName("close");
    for(var j = 0; j < close.length; j++)
    {
        close[j].addEventListener('click', function(){
            for(var k = 0; k < windows.length; k++)
            {
                windows[k].style.height = "0px";
                windows[k].style.opacity = "0";
            }
        });
    }
}, 0);
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
        for(var j = 0; j < windows.length; j++)
        {
            windows[j].style.top = div_bar + "px";
            
        }
    }

    // Otherwise add active and open links
    else
    {
    	console.log("Opening div");
    	this.classList.toggle('active');
    	links.style.minHeight = "100%";
        for(var j = 0; j < windows.length; j++)
        {
            windows[j].style.top = i + "px";
            windows[j].style.height = "0px";
            windows[j].style.opacity = "0";
        }
    }

}
