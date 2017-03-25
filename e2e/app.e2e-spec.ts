import { MEAN2Page } from './app.po';

describe('mean2 App', () => {
  let page: MEAN2Page;

  beforeEach(() => {
    page = new MEAN2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
