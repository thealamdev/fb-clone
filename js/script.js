var down_arrow = document.querySelectorAll('.public_down_arrow i')
var edit_box = document.querySelectorAll('.post_edit_box')
var public_post_box = document.querySelectorAll('.public_post_box ');

// down_arrow.forEach(function(value){
//   value.addEventListener("click",function(){
//     document.querySelector('.post_edit_box').classList.toggle('editbox_active')
//   })
// })


down_arrow[0].addEventListener("click", function () {
  edit_box[0].classList.toggle('editbox_active')
})

down_arrow[1].addEventListener("click", function () {
  edit_box[1].classList.toggle('editbox_active')
})

down_arrow[2].addEventListener("click", function () {
  edit_box[2].classList.toggle('editbox_active')
})

down_arrow[3].addEventListener("click", function () {
  edit_box[3].classList.toggle('editbox_active')
})

down_arrow[4].addEventListener("click", function () {
  edit_box[4].classList.toggle('editbox_active')
})

down_arrow[5].addEventListener("click", function () {
  edit_box[5].classList.toggle('editbox_active')
})
down_arrow[6].addEventListener("click", function () {
  edit_box[6].classList.toggle('editbox_active')
})

down_arrow[7].addEventListener("click", function () {
  edit_box[7].classList.toggle('editbox_active')
})

down_arrow[8].addEventListener("click", function () {
  edit_box[8].classList.toggle('editbox_active')
})
down_arrow[9].addEventListener("click", function () {
  edit_box[9].classList.toggle('editbox_active')
})

down_arrow[10].addEventListener("click", function () {
  edit_box[10].classList.toggle('editbox_active')
})

down_arrow[11].addEventListener("click", function () {
  edit_box[11].classList.toggle('editbox_active')
})
down_arrow[12].addEventListener("click", function () {
  edit_box[12].classList.toggle('editbox_active')
})

down_arrow[13].addEventListener("click", function () {
  edit_box[13].classList.toggle('editbox_active')
})

// window eventlistener:
window.addEventListener("scroll", function () {
  edit_box[0].classList.remove('editbox_active')
})

window.addEventListener("scroll", function () {
  edit_box[1].classList.remove('editbox_active')
})
window.addEventListener("scroll", function () {
  edit_box[2].classList.remove('editbox_active')
})

window.addEventListener("scroll", function () {
  edit_box[3].classList.remove('editbox_active')
})
window.addEventListener("scroll", function () {
  edit_box[4].classList.remove('editbox_active')
})

window.addEventListener("scroll", function () {
  edit_box[5].classList.remove('editbox_active')
})
window.addEventListener("scroll", function () {
  edit_box[6].classList.remove('editbox_active')
})

window.addEventListener("scroll", function () {
  edit_box[7].classList.remove('editbox_active')
})
window.addEventListener("scroll", function () {
  edit_box[8].classList.remove('editbox_active')
})
window.addEventListener("scroll", function () {
  edit_box[9].classList.remove('editbox_active')
})

window.addEventListener("scroll", function () {
  edit_box[10].classList.remove('editbox_active')
})
window.addEventListener("scroll", function () {
  edit_box[11].classList.remove('editbox_active')
})

window.addEventListener("scroll", function () {
  edit_box[12].classList.remove('editbox_active')
})
window.addEventListener("scroll", function () {
  edit_box[13].classList.remove('editbox_active')
})

 



//edit box show and hide here:
// down_arrow.forEach(function(value){
//   value.addEventListener('click', function(){
//     var edit_box = document.querySelectorAll('.post_edit_box').forEach(function(divval){
//         divval.classList.toggle('editbox_active')
//     })

//     })
//   })





//  Stykey Header  
$(window).scroll(function () {
  var scrolling = $(this).scrollTop();

  if (scrolling > 500) {
    $('#header').addClass('my_stick_bg');
  } else {
    $('#header').removeClass('my_stick_bg');
  }
});