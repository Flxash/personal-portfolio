const API_REPOS_URL = 'https://api.github.com/users/Flxash/repos'

async function getRepos() {
    const resp = await fetch(API_REPOS_URL);
    const respData = await resp.json();

    renderRepos(respData);
}


function renderRepos(repos) {
    const cards = document.getElementById('cards');

    repos.sort((a, b) => b.created_at - a.created_at).slice(0,6).forEach((repo) => {
        const cardHTML = `
            <a class="card" href="${repo.html_url}" target="blank">
                <div class="card-content">
                    <div class="card-image">
                        <img>
                    </div>
                    <div class="card-info-wrapper">
                        <div class="card-info">
                            <div class="card-info-title">
                                <h3>${repo.name}</h3>  
                                <h4>${repo.description}</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </a>
        `;

        cards.innerHTML += cardHTML;
    });
}

getRepos();