let data;
const row = document.querySelector('.row');

fetch('https://api.github.com/users/Alexandre-Kovalchuk/repos')
   .then(response => response.json())
   .then(data => {
      data.slice(1, 5).forEach(function (elem) {
         let html = `
            <div class="row__item">
               <div class="row__name">${elem.full_name}</div>
               <div class="row__html"><a href="${elem.html_url}">${elem.html_url}</a></div>
               <div class="row__description"></div>
            </div>`;
         row.innerHTML += html;
      });
   });

