import { render } from "@testing-library/react";
import LlamaLanguageSelector from 'components/LlamaLanguageSelector/LlamaLanguageSelector'

describe('When user opens language selector', () => {
  it('Then a list of languages should be displayed', () => {
    const languageSelector = render(<LlamaLanguageSelector></LlamaLanguageSelector>)

    expect(languageSelector).toBeVisible();
  });
});