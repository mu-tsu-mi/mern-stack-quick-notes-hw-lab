import { getToken } from './users-service';

export default async function sendRequest(url, method = 'GET', payload = null) {
  //Creating an object. {method}:shorthand (same as {method:method}) 
  const options = { method };
    if (payload) {
      options.headers = { 'Content-Type': 'application/json' };
      options.body = JSON.stringify(payload);
    }
    const token = getToken();
    if(token) {
      // Ensure the headers object exists
      options.headers = options.headers || {};
      // Add token to an Authorization header
      // Prefacing with 'Bearer' is recommended in the HTTP specification
      options.headers.Authorization = `Bearer ${token}`;
    }
    // Fetch accepts an options object as the 2nd argument
    // used to include a data payload, set headers, etc. 
    const res = await fetch(url, options);
    // res.ok will be false if the status code set to 4xx in the controller action
    if (res.ok) return res.json();
    throw new Error('Bad Request');
  }

//   notes from users-api before refactoring
    // N) to send user registration data to a server for registration
// export async function signUp(userData) {
    // N) Fetch API call BASE_URL(user related API endpoint):URL for the HTTP POST request
    // N) headers: http req headers (JSON formatted this case)
    // N) userData > user registration details
    // N) await is used to wait for fetch request is resolved, storing response in 'res'.

    // N) Fetch uses an options object as a second arg to make requests
    // N) other than basic GET requests, include data, headers, etc. 
    // const res = await fetch(`${BASE_URL}/signup`, {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json"},
    //     // Fetch requires data payloads to be stringified
    //     // and assigned to a body property on the options object
    //     body: JSON.stringify(userData)
    // })
    // N) Check if request was successful
    // if(res.ok) {
    // N) res.json() will resolve to the JWT(JSON Web Token)
//         return res.json();
//     } else {
//         throw new Error("Invalid Sign Up");
//     }
// }

// N) IMPORTANT: The fetch method will not raise an error unless there's a network failure. 
// N) This is why we need to check the res.ok property to see if 
// N) the server returned a successful response (status code in the 200s).