const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user) {
        this.userProfile.innerHTML = `<div class="info">
                                            <img src="${user.avatarUrl}" alt="Foto do perfil do usuário" />
                                        <div class="data">
                                            <h1>${user.name ?? 'Não possui nome cadastrado 😥'}</h1>
                                            <p>${user.bio ?? 'Não possui Bio cadastrada 😥'}</p><br>
                                            <p>Followers: ${user.followers}</p>
                                            <p>Following: ${user.following}</p>
                                        </div>
                                    </div>`

        let repositoriesItens = ''
        user.repositories.forEach(repo => repositoriesItens += `<li><a href="${repo.html_url}" target="_blank">${repo.name}</a>🍴${repo.forks} ⭐${repo.stargazers_count} 👀${repo.watchers} 👩‍💻${repo.language}</p>`)       

        if(user.repositories.length > 0) {
            this.userProfile.innerHTML += `<div class="repositories section">
                                                <h2>Repositórios</h2>
                                                <ul>${repositoriesItens}</ul>
                                            </div>`
        };

        let eventItens = ''
        user.events.forEach(events => eventItens += `<li>${events.repo.name}  -  ${events.type}</li>`)

        if(user.events.length > 0) {
            this.userProfile.innerHTML += `<div class="events section">
                                                <h2>Eventos</h2>
                                                <ul>${eventItens}</ul>
                                            </div>`
        }

    }, 
    renderNotFound(){
        this.userProfile.innerHTML = "<h3>Usuário não encontrado.</h3>"
    }
}

export { screen }