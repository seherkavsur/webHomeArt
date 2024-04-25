const searchIcon = document.getElementById('searchIcon')
const searchEngine = document.getElementById('searchEngine')

 if (searchIcon) {
    searchIcon.addEventListener('click', () => {
        console.log('hello')
        searchEngine.classList.toggle('active')
    });
} else {
    console.error('Element with ID "searchIcon" not found');
}