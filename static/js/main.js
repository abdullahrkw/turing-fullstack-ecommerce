function isHover(e) {
    return (e.parentElement.querySelector(':hover') === e);
    }


    let myDiv = document.getElementById('single-prod');;
    document.addEventListener('mousemove', () => {
    let hovered = isHover(myDiv);
     if (hovered) {
         document.getElementById('buy-now').style.display='block';
    }
    if (!hovered){
        document.getElementById('buy-now').style.display='none';

    }
    });