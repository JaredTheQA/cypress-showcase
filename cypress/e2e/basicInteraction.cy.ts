import { BasicInteractionPage } from '../page-objects/basicInteractionpages';

describe('Basic interaction', () => {
  const basicInteractionPage = new BasicInteractionPage();

  it('should click a button', () => {
    basicInteractionPage
      .visitHomePage()
      .verifyBrandText()
      .clickButtonLink()
      .verifyButtonIsPrimary()
      .triggerRealButtonClick()
      .verifyButtonIsSuccess();
  });
});
