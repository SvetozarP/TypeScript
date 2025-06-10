import './style.css'
import { Router } from './utils/router'
import { postsTemplate } from './views/postView'
import { usersTemplate } from './views/usersView'


const router = new Router({
    '/posts': postsTemplate,
    '/users': usersTemplate,
});

function setupLinks() {
  const postsLinkEl = document.getElementById('posts-link');
  const usersLinkEl = document.getElementById('users-link');

  if (postsLinkEl) {
    postsLinkEl.addEventListener('click', e => {
      e.preventDefault();
      router.navigate('/posts');
    });
  }

  if (usersLinkEl) {
    usersLinkEl.addEventListener('click', e => {
      e.preventDefault();
      router.navigate('/users');
    });
  }
}

setupLinks();