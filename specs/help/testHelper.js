import LikeButtonInitiator from '../../src/scripts/utils/button-like-initiator';
import FavRestoIdb from '../../src/scripts/data/resto-fav-idb';

const createLikeButtonPresenterWithResto = async (restaurant) => {
  await LikeButtonInitiator.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    favRestoIdb: FavRestoIdb,
    data: {
      restaurant,
    },
  });
};

// eslint-disable-next-line import/prefer-default-export
export { createLikeButtonPresenterWithResto };
