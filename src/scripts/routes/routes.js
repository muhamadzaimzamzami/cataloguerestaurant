import Home from '../views/pages/home';
import Favorite from '../views/pages/favorites';
import Detail from '../views/pages/detail';

const routes = {
  '/': Home,
  '/favorite': Favorite,
  '/resto/:id': Detail,
};

export default routes;
