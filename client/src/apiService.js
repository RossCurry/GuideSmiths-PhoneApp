const BASE_URL = 'http://localhost:3000';

export const fetchAllPhoneData = async () => {
  const endpoint = '/';
  return fetch(BASE_URL+endpoint, {
    method: 'GET',

  })
  .then(res => res.json())
  .then(data => {
    console.log('fetched data', data);
    return data;
  });
}