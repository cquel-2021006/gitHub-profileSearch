$(document).ready(function () {
    $("#search-button").click(function () {
        const username = $("#search-input").val();
        if (username) {
            searchGitHubProfiles(username);
        }
    });

    function searchGitHubProfiles(username) {
        const apiUrl = `https://api.github.com/users/${username}`;
        $.ajax({
            url: apiUrl,
            method: "GET",
            success: function (data) {
                displayProfile(data);
            },
            error: function () {
                alert("No se encontró el perfil de GitHub.");
            },
        });
    }

    function displayProfile(profile) {
        const profilesList = $("#profiles-list");
        profilesList.empty();
        const profileItem = `
            <li style="background-color: #375F8B;">
            </br>
                <img src="${profile.avatar_url}" alt="Avatar de ${profile.login}" width="100">
                <h3>${profile.login}</h3>
                <p>${profile.name}</p>
                <p>Seguidores: ${profile.followers}</p>
                <p>Repositorios públicos: ${profile.public_repos}</p>
                <a href="${profile.html_url}" target="_blank" style="text-decoration: none; color: white">Ver perfil en GitHub</a>
                </br>
            </li>
            
        `;
        profilesList.append(profileItem);
    }
});