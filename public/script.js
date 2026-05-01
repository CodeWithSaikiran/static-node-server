const movies = [
    { title: "Dune: Part Two", genre: "Sci-Fi", img: "https://m.media-amazon.com/images/M/MV5BN2QyZGU4ZDctOWMzMy00NTc5LThlOGQtODhmNDI1NmY5YzAwXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg", rate: "9.2" },
    { title: "The Batman", genre: "Action", img: "https://m.media-amazon.com/images/M/MV5BMDdmMTBiNTYtMDIzNi00NGVlLWIzMDYtNWUyNjAyMjgxNjUyXkEyXkFqcGdeQXVyMTMzNDE5NDMx._V1_.jpg", rate: "8.5" },
    { title: "Oppenheimer", genre: "Drama", img: "https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzhmODc2ODc3N2YzXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg", rate: "8.8" },
    { title: "Spiderman", genre: "Animation", img: "https://m.media-amazon.com/images/M/MV5BMzI0NmVkMjEtYmY4MS00ZDMxLTlkZmEtMzU4MDQxYTMzMjU2XkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_.jpg", rate: "9.0" }
];

const grid = document.getElementById('movie-grid');

function init() {
    movies.forEach((m, index) => {
        const div = document.createElement('div');
        div.className = 'card';
        div.style.animation = `fadeIn 0.5s ease forwards ${index * 0.1}s`;
        div.style.opacity = '0';

        div.innerHTML = `
            <img src="${m.img}" alt="${m.title}">
            <div class="card-info">
                <h3>${m.title}</h3>
                <span class="rating">★ ${m.rate} • ${m.genre}</span>
            </div>
        `;
        grid.appendChild(div);
    });
}

// Keyframe Animation injected via JS
const style = document.createElement('style');
style.innerHTML = `@keyframes fadeIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }`;
document.head.appendChild(style);

init();