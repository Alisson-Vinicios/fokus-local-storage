const btnAdcionarTarefa = document.querySelector('.app__button--add-task');
const formAdcionarTarefa = document.querySelector('.app__form-add-task');

btnAdcionarTarefa.addEventListener('click', () => {
    formAdcionarTarefa.classList.toggle('hidden');
})