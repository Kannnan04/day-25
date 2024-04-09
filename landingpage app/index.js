function displayMemes() {
    fetch('https://api.imgflip.com/get_memes')
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch memes');
            }
            return response.json();
        })
        .then(data => {
            const memesContainer = document.getElementById('memesContainer');
            data.data.memes.forEach(meme => {
                const card = document.createElement('div');
                card.classList.add('card', 'mb-3');

                const img = document.createElement('img');
                img.classList.add('card-img-top');
                img.src = meme.url;
                img.alt = meme.name;

                const cardBody = document.createElement('div');
                cardBody.classList.add('card-body');

                const p = document.createElement('p');
                p.classList.add('card-text');
                p.textContent = meme.name;

                cardBody.appendChild(p);
                card.appendChild(img);
                card.appendChild(cardBody);

                memesContainer.appendChild(card);
            });
        })
        .catch(error => {
            console.error('Error:', error);
            // Handle error (e.g., display a message to the user)
        });
}

displayMemes();