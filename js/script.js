const asideImg = document.querySelector('.aside__img');

asideImg.addEventListener('click', () => {
   asideImg.classList.toggle('aside__img-animation');
});


function scrollToElement(element) {
   element.scrollIntoView({ behavior: 'smooth' });
}

function handleKeyDown(event) {
   const key = event.key.toLowerCase();
   const headings = document.querySelectorAll('h2[data-nav]');

   for (let i = 0; i < headings.length; i++) {
      const heading = headings[i];
      const headerLetter = heading.getAttribute('data-nav').toLowerCase();

      if (headerLetter === key) {
         scrollToElement(heading);
         break;
      }
   }
}

window.addEventListener('keydown', handleKeyDown);

