import sendRequest from './send-request';
// This is the base path of the Express route we'll define
const BASE_URL = '/api/notes';


// to send user registration data to a server for registration
export async function getAll() {
    return sendRequest(BASE_URL);
}

export async function createNote(str) {
  return sendRequest(BASE_URL, "POST", { text: str });
}

// Log in func - Before refactoring
// export async function login(credentials) {
//     const res = await fetch(`${BASE_URL}/login`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json"},
//         body: JSON.stringify(credentials)
//     })
    
//     if(res.ok) {
//         return res.json()
//     } else {
//         throw new Error("Something went wrong with login")
//     }
// }

// export function checkToken() {
//     return sendRequest(`${BASE_URL}/check-token`);
//   }