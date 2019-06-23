// Save var as list of elements with class "collapsible"
var collapsibles = document.getElementsByClassName("collapsible");
// Iterate through all elements with collapsible term
for (var i = 0; i < collapsibles.length; i++) {
    // Add property to each div that will make it keep track of click on div
  collapsibles[i].addEventListener("click", function() {
    this.classList.toggle("active");
    // On next element
    var content = this.nextElementSibling;
    // If already max height, remove max height
    if (content.style.maxHeight)
        content.style.maxHeight = null;
    // Otherwise set maxHeight to height of box.
    else
        content.style.maxHeight = content.scrollHeight + "px";
  });
}

// Create function remove_home to use in add/remove event listener functions
/* remove_home gets the homepage div box and gets the coordinates 
 * If the coordinates end up being outside the screen then the div gets
 * removed so that it doesn't get scrolled up to again. */
var remove_home = 
    function() {
        // Save the first div with id 'entrance'
        var elem = document.querySelector('#entrance');
        // Get the bounds for the elemement
        var bounding = elem.getBoundingClientRect();
        //console.log(bounding);
        //console.log(window.innerHeight);
        // If the bounds have gone up past the top of the screen
        // i.e. the index of the bottom is negative
        if (bounding.bottom < 0) 
        {
            // Change the div to not display
            elem.style.display = 'none';
            // console.log("outside!!");
            // No need to check for scroll anymore so remove
            window.removeEventListener("scroll", remove_home);
        }
    };

// Check the window every time it is scrolled to see if the homepage
// is off the screen.
window.addEventListener("scroll", remove_home);

// Animation for entrance to site.
/* Mainpage banner is clicked then scrolls down to actual page.
 * Once scrolled down to actual page, banner is closed.
 */
// Scrolls down to link instead of immediately going to it.
jQuery('.scroll').click(function(e){
    var jump = $(this).attr('href');
    var new_position = $(jump).offset();
    $('html, body').stop().animate({ scrollTop: new_position.top }, 600);
    e.preventDefault();
    // Wait until after scrolled down then hide entrance page
    //setTimeout(function() {$('#entrance').hide();}, 1200);
    

});
