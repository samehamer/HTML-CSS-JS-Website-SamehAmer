


// Footer Date 
function getCurrentYear() {
    return new Date().getFullYear();
    }
    
    const currentYear = getCurrentYear();

let htmlYear = document.getElementById("year");

htmlYear.innerHTML = currentYear;



//  hide scrollTop button from js 
document.addEventListener('DOMContentLoaded', function () {
    var scrollPosition = window.scrollY;
    var stickyBtn = document.querySelector('.sticky-btn');
    window.addEventListener('scroll', function() {

        scrollPosition = window.scrollY;
    
        if (scrollPosition >= 30) {
            stickyBtn.classList.add('sticky');
        } else {
            stickyBtn.classList.remove('sticky');
        }
    });

});


// Animate box

const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll',
    checkBoxes);

checkBoxes();

function checkBoxes() {
    const triggerBottom =  window.innerHeight / 5
        * 4;
    
    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;

        if (boxTop < triggerBottom) {
            box.classList.add('show');
        } else {
            box.classList.remove('show');
        }
    })
}
