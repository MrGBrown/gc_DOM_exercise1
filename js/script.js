function main(){
    let AddClass = document.getElementById("grow-me");
    let RemoveClass = document.getElementById("shrink-me");
    AddClass.classList.add("big");
    RemoveClass.classList.remove("big");
    document.querySelectorAll('li');
    document.getElementsByClassName('link')[0].innerHTML = 'somewhere<a href="https://www.example.com>';
    document.getElementById("show-me").style.display = "block";
    let removeHideMe = document.getElementById("hide-me");
    removeHideMe.style.display = "none";
    let NameInput = document.getElementById('name').value;
    document.querySelector('h1').innerText = NameInput;
}