/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
    var x = document.getElementById("myLinks");
    var y = document.getElementById("nav");
    var name = document.getElementById("name");
    if (x.style.display === "flex") {
        x.style.display = "none";
        y.style.height = "50px"
        name.style.display = "block"
    } else {
        x.style.display = "flex";
        x.style.flexDirection = "column";
        y.style.height = "300px";
        name.style.display = "none";
        name.style.color = "black";
        y.style.gap = "3rem"
        name.style.alignSelf = "center";
    }
}