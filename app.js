const accordion_container = document.querySelectorAll('.accordion-item');
accordion_container.forEach((item) => {
   const header = item.querySelector('.accordion-heading');
   const content = item.querySelector('.accordion-content');
   const icon = item.querySelector('.open_accordion');
  
   header.addEventListener('click', () => {
      accordion_container.forEach((otherAccordion) => {
        const openAccordion = otherAccordion.querySelector('.accordion-content');
        const openIcon = otherAccordion.querySelector('.open_accordion');
        if(otherAccordion !== item && otherAccordion.classList.contains('active')){
            openAccordion.style.display = 'none';
            otherAccordion.classList.remove('active')
        }
        if(openIcon.innerText === 'keyboard_arrow_up'){{
            openIcon.innerText = 'keyboard_arrow_down'
        }
        }
      });

      if(content.style.display === 'none' || content.style.display === ''){
        content.style.display = 'block';
        content.parentElement.classList.add('active');
        icon.innerText = 'keyboard_arrow_up';
      }else{
        content.style.display = 'none';
        content.parentElement.classList.remove('active')
        icon.innerText = 'keyboard_arrow_down';
      }
   });

})
















// // function showAccordion(){
// //     for(let x = 0; x < openAccordion.length; x++){
// //       openAccordion[x].addEventListener('click', function(event){
// //        if(!event.target.parentNode.parentNode.classList.contains('fit__content')){
// //         event.target.parentNode.parentNode.classList.add('fit__content')
// //         event.target.innerText = 'keyboard_arrow_up';
// //        }else{
// //         event.target.parentNode.parentNode.classList.remove('fit__content')
// //         event.target.innerText = 'keyboard_arrow_down'
// //        }
// //       })
// //     }
// // }

// // showAccordion();



// // function charCoode(){
// //     let str = 'abcdef';
// // const C_CHAR_CODE = 'c'.charCodeAt(0);
// // console.log(C_CHAR_CODE);

// // for(let i = 0; i < str.length; i++){
// //     if(str.charCodeAt(i) > C_CHAR_CODE){
// //        x[str] = str[i].toUpperCase();
// //     }
    
// // }

// // // console.log(str);
// // }

// // charCoode();