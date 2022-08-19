import { fetchAPI } from '../../util/api';

export async function getLanguages() {
  return fetchAPI('/languages/', {
    fields: ['name', 'countryFlagCode', 'link'],
    populate: {
      Image: {
        fields: ['url']
      }
    },
    sort: ['order', 'name']
  });
}

export async function getEvents() {
  return fetchAPI('/events/', {
    populate: {
      Image: {
        fields: ['formats', 'url']
      }
    },
    fields: ['title', 'shortDescription', 'link'],
    sort: ['order', 'id']
  });
}