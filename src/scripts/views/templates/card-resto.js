import CONFIG from '../../globals/config';

const restoCard = (resto) => `
    <div tabindex="0" class="card">
      <a href="#/resto/${resto.id}" class="card-a-tag">
        <div class="img-container">
          <img tabindex="0" class="card-image lazyload" crossorigin="anonymous" alt="${resto.name}" data-src="${CONFIG.BASE_IMAGE_URL + resto.pictureId}"/>
          
        </div>

        <div tabindex="0" class="card-content">
          <h2 class="card-content-title">${resto.name} - ${resto.city}</h2>
          <p class="truncate">${resto.description}</p>
          <span class="rating">
            <i title="ratings" class="fa fa-star"></i>
            <span>${resto.rating}</span>
          </span>
        </div>
      </a>
    </div>
  `;
export default restoCard;
