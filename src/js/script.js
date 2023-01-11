//                              Гамбургер

let hamburger = document.querySelector('.hamburger')
let menu  = document.querySelector('.menu__block')
let closer  = document.querySelector('.menu__close ')

hamburger.addEventListener('click', () => {
    menu.classList.toggle("active")
})
closer.addEventListener("click", () => {
    menu.classList.remove("active")
})
//                              счетчик процентов/ метрика скиллов

let scoreSkill = document.querySelectorAll(".skills__metric_procent"),
    lines = document.querySelectorAll(".skills__metric-line span")
scoreSkill.forEach((item,i)=>{
    lines[i].style.width = item.innerHTML
})


//                              Плавный скролл
function scrollTo(element) {
    window.scroll({
      left: 0, 
      top: element.offsetTop, 
      behavior: 'smooth'
    })
  }

  let triggers = document.querySelectorAll('.menu__link')
  triggers.forEach((item) => {
      item.addEventListener('click',() => {
      let scrollPage = document.querySelector(item.getAttribute("data"))
      window.scrollTo(scrollPage)
      console.log(scrollPage.offsetParent);
    })
  })


  //                        скрытие sidepanel

  let element = document.querySelector('#resume')
  console.log(element);
  let sidepanel = document.querySelector('.sidepanel')
  console.log(sidepanel);

  window.addEventListener("scroll", function(){
    let Y1 = window.scrollY
    let Y = window.pageYOffset
    let h = document.documentElement.clientHeight
    if (Y > '713') {
      sidepanel.style.display = 'none'
    }
    if (Y < '713' && document.documentElement.clientWidth > '1439') {
      sidepanel.style.display = 'flex'
    }
})


// ________________________ scroll intersection api
// function onEntry(entry) {
//     entry.forEach(change => {
//       if (change.isIntersecting) {
//        change.target.classList.add('element-change');
//       }
//     });
//   }
  
//   let options = {
//     threshold: [1] };
//   let observer = new IntersectionObserver(onEntry, options);
//   let elements = document.querySelectorAll('.element-animation');
  
//   for (let elm of elements) {
//     observer.observe(elm);
//   }

