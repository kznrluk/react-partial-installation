const currentFoxes = [];

const getNewFox = () => fetch('https://randomfox.ca/floof').then(e => e.json());

const render = () => {
    const result = currentFoxes.map(fox => `<div><img src="${fox.image}" alt="fox_image"></div>`);
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = result.join('');
}

window.addEventListener('DOMContentLoaded', () => {
    document.getElementById('increment').addEventListener('click', async () => {
        const floof = await getNewFox();
        currentFoxes.push(floof);
        render();
    })
})
