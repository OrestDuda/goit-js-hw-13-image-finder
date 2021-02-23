import './styles.css';
import API from './js/apiService';
import imageCard from './imageCard.hbs';

const listRef = document.querySelector('.gallery');
const searchInput = document.querySelector('.input');
const searchBtn = document.querySelector('.search-button');
const loadMoreBtn = document.querySelector('.load-more-button');

let currentPage;

searchBtn.addEventListener('click', () => {
  listRef.innerHTML = '';
  (async () => {
    currentPage = 1;
    const data = await API.imageFinder(searchInput.value, currentPage);
    listRef.insertAdjacentHTML('beforeend', imageCard(data));
    loadMoreBtn.classList.remove('hidden');
  })();
});

loadMoreBtn.addEventListener('click', () => {
  (async () => {
    currentPage += 1;
    const data = await API.imageFinder(searchInput.value, currentPage);
    listRef.insertAdjacentHTML('beforeend', imageCard(data));
    window.scrollTo({
      top: document.documentElement.offsetHeight,
      behavior: 'smooth',
    });
  })();
});
