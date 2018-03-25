import {ProfilePage} from './profile.po';

describe('chilid-frontend App', () => {
  let page: ProfilePage;

  beforeEach(() => {
    page = new ProfilePage();
  });

  it('should see user user-profile', () => {
    page.navigateTo();
    expect(page.getUserName()).toEqual('Harvey Specter');
  });

  it('should increase number of likes', () => {
    page.getLikes().then((likes) => {
      page.getLikeButton().click();
      const incrementedLikes = parseInt(likes, 0) + 1;
      expect(page.getLikes()).toBe(incrementedLikes.toString());
    });
  });

  it('should increase number of followers', () => {
    page.getFollowers().then((followers) => {
      page.getFollowerButton().click();
      const incrementedFollowers = parseInt(followers, 0) + 1;
      expect(page.getFollowers()).toBe(incrementedFollowers.toString());
    });
  });

  it('should add new comment', () => {
    page.getComments().count().then((commentsAmount) => {
      page.getCommentField().sendKeys('Test comment');
      page.getCommentForm().submit();
      expect(page.getComments().count()).toBe(commentsAmount + 1);
    });
  });
});
