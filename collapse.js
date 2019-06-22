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