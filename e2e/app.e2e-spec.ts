import { ReactivePatternsExamplePage } from './app.po';

describe('reactive-patterns-example App', () => {
  let page: ReactivePatternsExamplePage;

  beforeEach(() => {
    page = new ReactivePatternsExamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
