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

  it('should clear text from an input field', () => {
    basicInteractionPage
      .visitHomePage()
      .verifyBrandText()
      .clickClearInputLink()
      .verifyClearInputValue('#clearInput', 'Initial Text Value')
      .clearInput('#clearInput')
      .verifyClearInputEmpty('#clearInput')
      .verifyClearInputValue('#clearTextarea', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, libero eget bibendum.')
      .clearInput('#clearTextarea')
      .verifyClearInputEmpty('#clearTextarea')
      .verifyClearInputValue('#clearPassword', 'MySecretPassword')
      .clearInput('#clearPassword')
      .verifyClearInputEmpty('#clearPassword')
      .verifyClearInputValue('#clearEmail', 'user@example.com')
      .clearInput('#clearEmail')
      .verifyClearInputEmpty('#clearEmail')
      .verifyClearInputValue('#clearNumber', '42')
      .clearInput('#clearNumber')
      .verifyClearInputEmpty('#clearNumber')
      .verifyClearInputValue('#clearSearch', 'Search query')
      .clearInput('#clearSearch')
      .verifyClearInputEmpty('#clearSearch')
      .verifyClearInputValue('#clearUrl', 'https://www.example.com')
      .clearInput('#clearUrl')
      .verifyClearInputEmpty('#clearUrl')
      .verifyClearInputValue('#clearTel', '+1 (555) 123-4567')
      .clearInput('#clearTel')
      .verifyClearInputEmpty('#clearTel')
      .verifyClearContentEditableValue('This is an editable div element. It behaves differently from standard input fields.')
      .clearContentEditable()
      .verifyClearContentEditableEmpty()
      .verifyClearStatusMessage();
    });

  it('should select various options and validate', () => {
    basicInteractionPage
      .visitHomePage()
      .verifyBrandText()
      .clickSelectLink()
      .selectLanguage('JavaScript')
      .verifyLanguageStatus('JavaScript')
      .selectCity('New&nbsp;York')
      .verifyCityStatus('nyc')
      .selectProduct('Release 2.0')
      .verifyProductStatus('Release 2.0')
      .selectColors(['Red', 'Green', 'Blue'])
      .verifyColorsStatus('Red, Green, Blue')
      .selectFruits(['Elderberry', 'Fig'])
      .verifyFruitsStatus('Elderberry, Fig');
  });
});
