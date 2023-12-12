const text = document.getElementById('role');
const textLoad = () => {
    setTimeout(() => {
        text.innerText = "Web3 Researcher"
    }, 0);
    setTimeout(() => {
        text.innerText = "Web Developer"
    }, 4000);
    setTimeout(() => {
        text.innerText = "Product Manager"
    }, 8000);

}

textLoad();
setInterval(textLoad, 12000)