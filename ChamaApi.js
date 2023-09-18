const button = document.getElementById('get-joke-button');
const jokeText = document.getElementById('joke-text');
const piadaTema = document.getElementById('piada-tema');
const piadaCorpo = document.getElementById('piada-corpo');

document.addEventListener('DOMContentLoaded', getJoke);

button.addEventListener('click', getJoke);
button.addEventListener('click', getImage);

function getJoke(){
    axios.get('https://v2.jokeapi.dev/joke/Any?lang=en')
        .then(response =>{
            const joke = response.data.joke;
            const setup = response.data.setup;
            const delivery = response.data.delivery;

            if (setup) {
                piadaTema.innerHTML = setup;
            } else {
                piadaTema.innerHTML = '';
            }

            if (delivery) {
                piadaCorpo.innerHTML = delivery;
            } else {
                piadaCorpo.innerHTML = '';
            }
        })
        .catch(error => {
            console.error('Erro ao obter piada:', error);
            jokeText.innerHTML = 'Ocorreu um erro ao buscar a piada.';
        });
}

function getImage() {
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(response =>{
        return response.json();
    })
    .then (function(data){
        display_image(data.message);
        console.log(data.message);

    })
    .catch(function(error){
        console.log("ERROR" + error);
    })

    function display_image(image_url){
        document.getElementById("reacao").src = image_url
    }

}


