import { AngularRXJSPage } from './app.po';

describe('angular-rxjs App', () => {
  let page: AngularRXJSPage;

  beforeEach(() => {
    page = new AngularRXJSPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
