function checkMe() {

 var target = document.querySelector('#radio1');
    if( target.checked == true) {
        var element = document.querySelector("#selected1");
        element.classList.add("first");
    } else if( target.checked != true) {
        var element = document.querySelector("#selected1");
        element.classList.remove("first");
    }

    var target = document.querySelector('#radio2');
    if( target.checked == true) {
        var element = document.querySelector("#selected2");
        element.classList.add("second");
        } else if( target.checked != true) {
        var element = document.querySelector("#selected2");
        element.classList.remove("second");
    }

    var target = document.querySelector('#radio3');
    if( target.checked == true) {
        var element = document.querySelector('#selected3');
        element.classList.add("third");
    } else if( target.checked != true) {
        var element = document.querySelector("#selected3");
        element.classList.remove("third");
    }
  
}


