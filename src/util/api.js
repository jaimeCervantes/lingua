import qs from "qs"

export function getStrapiURL(path) {
  return `${
    process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337"
  }${path}`
}

export async function fetchAPI(path, urlParamsObject = {}, options = {}) {
  // Merge default and user options
  const mergedOptions = {
    headers: {
      "Content-Type": "application/json",
    },
    ...options,
  }

  const queryString = qs.stringify(urlParamsObject);
  const requestUrl = `${getStrapiURL(
    `/api${path}${queryString ? `?${queryString}` : ""}`
  )}`
  
  let response;
  try {
    response = await fetch(requestUrl, mergedOptions);
  } catch(err) {
    console.error(err);
    throw err;
  }

  if (!response.ok) {
    console.error(response.statusText)
    throw new Error('An error ocurred, please try again', response);
  }
  
  return await response.json();
}

export async function fetchGraphqlAPI(query, options = {}) {
  const mergedOptions = {
    headers: {
      "Content-Type": "application/json"
    },
    method: 'POST',
    body: JSON.stringify(query),
    ...options
  };

  const requestUrl = getStrapiURL('/graphql');
  let response;
  try {
    response = await fetch(requestUrl, mergedOptions);
  } catch(err) {
    console.error(err);
    throw err;
  }
  
  if (!response.ok) {
    console.error(JSON.stringify(response));
    throw new Error('An error ocurred, please try again');
  }

  return await response.json();
}
