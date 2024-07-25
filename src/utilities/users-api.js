// This is the base path of the Express route we'll define
const BASE_URL = '/api/users';

// to send user registration data to a server for registration
export async function signUp(userData) {
    // Fetch API call BASE_URL(user related API endpoint):URL for the HTTP POST request
    // headers: http req headers (JSON formatted this case)
    // userData > user registration details
    // await is used to wait for fetch request is resolved, storing response in 'res'.

    // Fetch uses an options object as a second arg to make requests
    // other than basic GET requests, include data, headers, etc. 
    const res = await fetch(`${BASE_URL}/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json"},
        // Fetch requires data payloads to be stringified
        // and assigned to a body property on the options object
        body: JSON.stringify(userData)
    })
    // Check if request was successful
    if(res.ok) {
    // res.json() will resolve to the JWT(JSON Web Token)
        return res.json();
    } else {
        throw new Error("Invalid Sign Up");
    }
}
// IMPORTANT: The fetch method will not raise an error unless there's a network failure. 
// This is why we need to check the res.ok property to see if 
// the server returned a successful response (status code in the 200s).

export async function login(userData) {
    const res = await fetch(`${BASE_URL}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify(userData)
    })
    if(res.ok) {
        return res.json()
    } else {
        throw new Error("Something went wrong with login")
    }
}