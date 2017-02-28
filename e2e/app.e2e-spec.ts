import { ToytronPage } from './app.po';

describe('toytron App', () => {
  let page: ToytronPage;

  beforeEach(() => {
    page = new ToytronPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
