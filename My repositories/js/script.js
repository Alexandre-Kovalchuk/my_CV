const row = document.querySelector('.row');
class GithubAPI {
   constructor(token, username) {
      this.token = token;
      this.username = username;
   }

   async getRepos() {
      const response = await fetch(`https://api.github.com/users/${this.username}/repos`, {
         headers: {
            'Authorization': `token ${this.token}`
         }
      });
      const repos = await response.json();
      return repos;

   }
}

async function result() {
   const github = new GithubAPI('my token', 'Alexandre-Kovalchuk');
   const repos = await github.getRepos();
   console.log(repos);

   for (let elem of repos) {
      let html = `
   <div class="row__item">
      <div class="row__name">${elem.full_name}</div>
      <div class="row__html"><a href="${elem.html_url}">${elem.html_url}</a></div>
      <div class="row__description"></div>
   </div>`;
      row.innerHTML += html;
   }
}

result();
