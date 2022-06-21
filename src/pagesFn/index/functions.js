import { fetchAPI, fetchGraphqlAPI } from 'util/api';
import { getLanguages } from 'pagesFn/shared/functions';
import { mapHomeImagesToUI, mapToursToUI } from './mappers';
import { mapLanguagesToUI } from 'pagesFn/shared/mappers';
import LlamaPlacementTestButton from 'components/Buttons/LlamaPlacementTestButton';
import LLamaHeader from 'components/LlamaHeader/LlamaHeader';

export function getLayout(page) {
  return (
    <>
      <LLamaHeader></LLamaHeader>
      {page}
      <LlamaPlacementTestButton></LlamaPlacementTestButton>
    </>
  );
}

export async function getStaticProps(ctx) {
  const result = await fetchGraphqlAPI({
    query: `query {
      homeImages(sort: ["order", "id"]) {
        data {
          attributes {
            title,
            size,
            Image {
              data {
                attributes {
                  formats
                }
              }
            }
          }
        }
      },
      tours(sort: ["order", "id"]) {
        data {
          id,
          attributes {
            title
          }
        }
      },
      index {
        data {
          attributes {
            title,
            bookText,
            enterText
          }
        }
      },
      languages(sort: ["order", "name"]) {
        data {
          attributes {
            name,
            countryFlagCode,
            link,
            Image {
              data {
                attributes {
                  url
                }
              }
            }
          }
        }
      }
    }`
  });
  
  const { homeImages: images, tours, index, languages } = result.data;

  return {
    props: {
      homeImages: mapHomeImagesToUI(images.data),
      tours: mapToursToUI(tours.data),
      index: index.data.attributes,
      languages: mapLanguagesToUI(languages.data)
    }
  }
}