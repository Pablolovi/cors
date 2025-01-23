document.getElementById('search-button').addEventListener('click', async () => {
    const name = document.getElementById('search-input').value;
    const response = await fetch(`http://localhost:3000/characters/${name}`);
    const characters = await response.json();
    
    const characterInfoDiv = document.getElementById('character-info');
    characterInfoDiv.innerHTML = '';

    if (response.status === 404) {
        characterInfoDiv.innerHTML = '<p>Character not found</p>';
        return;
    }

    characters.forEach(character => {
        const characterDiv = document.createElement('div');
        characterDiv.className = 'character';
        characterDiv.innerHTML = `
            <img src="${character.image}" alt="${character.name}" width="100">
            <div>
                <h2>${character.name}</h2>
                <p>Status: ${character.status}</p>
                <p>Species: ${character.species}</p>
                <p>Gender: ${character.gender}</p>
                <p>Origin: ${character.origin.name}</p>
            </div>
        `;
        characterInfoDiv.appendChild(characterDiv);
    });
});