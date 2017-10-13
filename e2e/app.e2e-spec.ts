import { NeuPage } from './app.po';

describe('neu App', () => {
  let page: NeuPage;

  beforeEach(() => {
    page = new NeuPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
