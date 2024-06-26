export default function handleResponseFromAPI(promise) {
  promise.then(() => {
    console.log('Got a response from the API');
    return { status: 200, body: 'success' };
  })
    .catch(() => new Error());
  /* if (promise.then()){
    console.log('Got a response from the API')
    return {status: 200, body: 'success'}
  } else {
    return {}
  } */
}
