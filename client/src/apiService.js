const BASE_URL = 'http://localhost:3000';

//Endpoints
// router.get('/', getPhoneData);
export const fetchAllPhoneData = async () => {
  const endpoint = '/';
  return fetch(BASE_URL+endpoint, {
    method: 'GET',

  })
  .then(res => res.json())
  .then(data => {
    return data;
  });
}

// router.post('/mobile/create', addPhoneData);
export const createPhoneInstance = async (phoneData) => {
  const endpoint = '/mobile/create';
  return fetch(BASE_URL+endpoint, {
    method: 'POST',
    mode: 'cors',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(phoneData)
  })
  .then(res => res.json())
  .then(data => {
    return data;
  });
}


// router.delete('/mobile/delete/:id', deletePhoneData);
export const deletePhoneInstance = async (id) => {
  const strId = id + '';
  const endpoint = `/mobile/delete/${strId}`; 
  return fetch(BASE_URL+endpoint, {
    method: 'DELETE',
    mode: 'cors',
    credentials: 'include',
  })
  .then(res => res.json())
  .then(data => {
    return data;
  });
}

// router.put('/mobile/update/:id', updatePhoneData);