import 'doubles/util/fetch.mock';
import { fetchGraphqlAPI } from 'util/api';
import tours from 'doubles/util/dummies/tours';

describe.only('fetchGraphqlAPI', () => {
  it('fetch from /graphql/ a list of tours', async () => {
    fetch.mockResolvedValueOnce({
      json () {
        return Promise.resolve(tours);
      },
      ok: true
    });

    const data = await fetchGraphqlAPI(`{
      tours(sort: ["order", "id"]) {
        data {
          id,
          attributes {
            title
          }
        }
      }`);
  
    expect(data).toHaveProperty('data[0].attributes.title')
  });
});