let bars = document.querySelector('.fa-bars');
let listGroup = document.querySelector('.list-group');
let listItem = document.querySelectorAll('.list-item');
let container = document.querySelectorAll('.container')
let section = document.querySelector('#section')
let openClose = true;



bars.addEventListener('click', function () {



    if (openClose === true) {
        listGroup.style.display = 'block';
        section.style.padding = "0 0 0 10.5rem"
        section.style.animation = 'section 1s '

        openClose = false;

    } else {

        section.style.padding = "0 0 0 0"
        section.style.animation = 'sectiontoggle 1s '
        listGroup.style.display = 'none';
        openClose = true;

    }

})




// listItem.forEach(function(item){
//     item.addEventListener('click',function(){
// listGroup.style.display='none';

//     })
// })



