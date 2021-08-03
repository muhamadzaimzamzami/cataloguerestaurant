/* eslint-disable no-undef */
const assert = require('assert');

Feature('Liking Resto');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

const emptyFavoriteRestoText = 'Empty favorite Resto';

Scenario('showing empty like resto', ({ I }) => {
  I.seeElement('#fav-resto');
  I.see(emptyFavoriteRestoText, '#fav-resto');
});

Scenario('Liking One Resto', async ({ I }) => {
  I.see(emptyFavoriteRestoText, '#fav-resto');

  I.amOnPage('/');
  I.seeElement('.card a');
  const firstRestoCard = locate('.card-content-title').first();
  const firstRestoCardTitle = await I.grabTextFrom(firstRestoCard);
  I.click(firstRestoCard);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.card');
  const likedCardTitle = await I.grabTextFrom('.card-content-title');
  assert.strictEqual(firstRestoCardTitle, likedCardTitle);
});

Scenario('unliking one restaurant', async ({ I }) => {
  I.see(emptyFavoriteRestoText, '#fav-resto');

  I.amOnPage('/');
  I.seeElement('.card a');
  const firstRestoCard = locate('.card-content-title').first();
  const firstRestoCardTitle = await I.grabTextFrom(firstRestoCard);
  I.click(firstRestoCard);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.card');
  const likedCardTitle = await I.grabTextFrom('.card-content-title');
  I.click(likedCardTitle);

  // URL: /resto/:id
  I.seeElement('#likeButton');
  I.click('#likeButton');

  // URL: /#/favorite
  I.amOnPage('/#/favorite');
  I.seeElement('#fav-resto');
  I.dontSeeElement('.card');
  I.dontSeeElement('.card-content-title');
  assert.strictEqual(firstRestoCardTitle, likedCardTitle);
});
