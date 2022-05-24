let list = document.querySelectorAll('.list');
for (let i = 0; i < list.length; i++) {
  list[i].onclick = function() {
    let j = 0;
    while(j < list.length) {
      list[j++].className = 'list';
    }
    list[i].className = 'list active';
  }
}

let menuToggle = document.querySelector('.toggle');
let navigation = document.querySelector('.navigation')
menuToggle.onclick = function(){
  menuToggle.classList.toggle('active');
  navigation.classList.toggle('active');
}
function changebackground1() {
  const changebackground = new XMLHttpRequest();
  changebackground.onload = function() {
    document.getElementById("background").src = this.responseURL;
    }
  changebackground.open("GET", "Img/tbilisi.jpg", true);
  changebackground.send();
}
function changebackground3() {
  const changebackground = new XMLHttpRequest();
  changebackground.onload = function() {
    document.getElementById("background").src = this.responseURL;
    }
  changebackground.open("GET", "Img/batumi.png", true);
  changebackground.send();
}
function changebackground2() {
  const changebackground = new XMLHttpRequest();
  changebackground.onload = function() {
    document.getElementById("background").src = this.responseURL;
    }
  changebackground.open("GET", "Img/telavi.jpg", true);
  changebackground.send();
}