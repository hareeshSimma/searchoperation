import { SearchOperationsPage } from './app.po';

describe('search-operations App', () => {
  let page: SearchOperationsPage;

  beforeEach(() => {
    page = new SearchOperationsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
