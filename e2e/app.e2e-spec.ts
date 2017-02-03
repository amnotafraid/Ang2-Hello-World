import { Ang2HelloWorldPage } from './app.po';

describe('ang2-hello-world App', function() {
  let page: Ang2HelloWorldPage;

  beforeEach(() => {
    page = new Ang2HelloWorldPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
