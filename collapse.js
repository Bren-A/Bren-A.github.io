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

window.addEventListener("scroll", function() {
    var elem = document.querySelector('#entrance');
    var bounding = elem.getBoundingClientRect();
    console.log(bounding);
    console.log(window.innerHeight);
    if (bounding.bottom < 0) 
    {
        elem.style.display = 'none';
        console.log("outside!!");
    }
});
// Animation for entrance to site.
/* Mainpage banner is clicked then scrolls down to actual page.
 * Once scrolled down to actual page, banner is closed.
 */
// Scrolls down to link instead of immediately going to it.
jQuery('.scroll').click(function(e){
    var jump = $(this).attr('href');
    var new_position = $(jump).offset();
    $('html, body').stop().animate({ scrollTop: new_position.top }, 800);
    e.preventDefault();
    // Wait until after scrolled down then hide entrance page
    setTimeout(function() {$('#entrance').hide();}, 900);
    

});
