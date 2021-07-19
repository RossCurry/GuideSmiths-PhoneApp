const BASE_URL = 'http://localhost:3000';

//Endpoints
// router.get('/', getPhoneData);
// router.post('/mobile/create', addPhoneData);
// router.put('/mobile/update/:id', updatePhoneData);
// router.delete('/mobile/delete/:id', deletePhoneData);

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