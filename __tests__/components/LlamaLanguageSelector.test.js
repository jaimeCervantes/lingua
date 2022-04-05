import { fireEvent, render, screen, findByText } from "@testing-library/react";
import LlamaLanguageSelector from 'components/LlamaLanguageSelector/LlamaLanguageSelector';

describe('Given the LlamaLanguageSelector', () => {
  it('Then the language selector should be displayed', () => {
    const languageSelector = render(<LlamaLanguageSelector
      languages={[
        {
          label: 'English',
          img: 'https://english-image-url',
          flagCode: 'en'
        }, 
        {
          label: 'Spanish',
          img: 'https://spanish-image-url',
          flagCode: 'es'
        }
      ]}
    />);
    
    const container = languageSelector.getByTestId('LlamaLanguageSelector');

    expect(container).toBeVisible();
  });
});