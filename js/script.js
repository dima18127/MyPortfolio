let hamburger = document.querySelector('.hamburger')
let menu  = document.querySelector('.menu')
let closer  = document.querySelector('.menu__close ')

hamburger.addEventListener('click', () => {
    menu.classList.toggle("active")
})
closer.addEventListener("click", () => {
    menu.classList.remove("active")
})
// ____________________ счетчик процентов/ метрика скиллов ____________________
let scoreSkill = document.querySelectorAll(".skills__metric_procent"),
    lines = document.querySelectorAll(".skills__metric-line span")
// let procent = scoreSkill.innerText
scoreSkill.forEach((item,i)=>{
    lines[i].style.width = item.innerHTML
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

