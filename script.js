// option explicit?


// use . to request a class
const panels = document.querySelectorAll('.panel');

// very common pattern to assign click handler to 
// all the elements of a specifi class
panels.forEach(panel => {  
  panel.addEventListener('click', ()=>{
    clearActiveClass();
    panel.classList.add('active')})
})


function clearActiveClass() {
  panels.forEach(panel => panel.classList.remove('active'))
}
  


