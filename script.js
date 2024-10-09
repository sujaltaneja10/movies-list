const xhr = new XMLHttpRequest();
xhr.open("get", "https://feecq.github.io/api/movies.json", false);
xhr.send();
const movies = JSON.parse(xhr.response);
console.log(movies);

movies.forEach((element) => {
    const section = document.createElement('section');
    section.classList.add('section');
    document.querySelector('main').appendChild(section);

    const img = document.createElement('img')
    img.classList.add('img');
    img.src = element.image;
    section.appendChild(img);

    const nameDiv = document.createElement('div');
    nameDiv.classList.add('name-div');
    const nameLink = document.createElement('a');
    nameLink.href = element.imdb_url;
    nameLink.innerText = element.movie;
    nameDiv.appendChild(nameLink);
    section.appendChild(nameDiv);

    const ratingDiv = document.createElement('div');
    ratingDiv.classList.add('rating-div');

    for (let i=0; i<5; i++) {
        const starDiv = document.createElement('span');
        starDiv.classList.add('star-div');
        starDiv.innerText = '★';
        ratingDiv.appendChild(starDiv);
    }

    const ratingValue = element.rating/ 2;

    document.querySelectorAll('.star-div').forEach((star, i) => {
        if (ratingValue >= i + 1)
            star.classList.add('full-star');
    })

    document.querySelectorAll('.star-div').forEach((star) => {
        star.classList.toggle('star-div');
    })

    section.appendChild(ratingDiv);
})