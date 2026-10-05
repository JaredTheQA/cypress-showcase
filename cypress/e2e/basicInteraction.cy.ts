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

  it('should enter text into an input field', () => {
    basicInteractionPage
      .visitHomePage()
      .verifyBrandText()
      .clickUpdatingButtonLink()
      .verifyUpdatingButtonDefaultValue()
      .typeNewButtonName('Test text input')
      .clickUpdatingButton()
      .verifyUpdatingButtonValue('Test text input');
  });
});
