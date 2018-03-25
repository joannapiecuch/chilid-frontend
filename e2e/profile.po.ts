import {browser, by, element} from 'protractor';

export class ProfilePage {
  navigateTo() {
    return browser.get('/');
  }

  getUserName() {
    return element(by.css('.user-details .name')).getText();
  }

  getLikeButton() {
    return element(by.css('.like-button'));
  }

  getLikes() {
    return element(by.css('.social .likes')).getText();
  }

  getFollowers() {
    return element(by.css('.social .followers')).getText();
  }

  getFollowerButton() {
    return element(by.css('.follow-button'));
  }

  getComments() {
    return element.all(by.css('.list-comments .single-comment'));
  }

  getCommentField() {
    return element(by.css('.form-group #content'));
  }

  getCommentForm() {
    return element(by.css('.add-comment form'));
  }
}
