/**
 * @typedef LoginResponse
 * @property {string} access_token
 * @property {string} first_name
 * @property {string} last_name
 * @property {string} username 
 */
export default async (/** @type {string | Blob} */ username,/** @type {string | Blob} */ passkey)=>{
    const data = new FormData();
    data.set('username',username);
    data.set('passkey',passkey);
    const res = await fetch(import.meta.env.VITE_API_URL+"/login",{
        method:"post",
        body:data
    });
    /** @type {LoginResponse} */
    const result = await res.json()
    return result;
}