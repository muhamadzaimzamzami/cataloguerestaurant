import Spinner from '../templates/spinner';
import RestoSource from '../../data/resto-source';
import cardResto from '../templates/card-resto';
import { initSwalError } from '../../utils/swal-initiator';

const Home = {
  async render() {
    return `
      <div class="content-container">
        <div id="loading"></div>

        <div id="main-container">
          <h1 tabindex="0" class="content-title">CATALOGUE</h1>

          <section id="catalogue"></section>
        </div>
      </div>
    `;
  },

  // Fungsi ini akan dipanggil setelah render()
  async afterRender() {
    const loading = document.querySelector('#loading');
    const mainContainer = document.querySelector('#main-container');
    const listContainer = document.querySelector('#catalogue');

    // change main display to spinner
    mainContainer.style.display = 'none';
    loading.innerHTML = Spinner();

    try {
      const data = await RestoSource.getRestoList(); // fetch restaurant list

      // loop restaurants data
      data.restaurants.forEach((restaurant) => {
        listContainer.innerHTML += cardResto(restaurant);
      });

      // change spinner display to main
      loading.style.display = 'none';
      mainContainer.style.display = 'block';
    } catch (err) {
      console.error(err);

      mainContainer.style.display = 'block';
      loading.style.display = 'none';
      listContainer.innerHTML = `Error: ${err.message}`;
      initSwalError(err.message);
    }
  },
};

export default Home;
