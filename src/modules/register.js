/**
 * @typedef User
 * @property {string} first_name
 * @property {string} last_name
 * @property {string} phone_no
 * @property {string} username
 * @property {string} password
 * @property {string} dept
 */
export default async (/** @type {User} */ user) =>{
    const res = await fetch(import.meta.env.VITE_API_URL+"/users",{
        method:'post',
        body:JSON.stringify(user),
        headers:{
            'Content-type':'application/json'
        }
    });
    const message = await res.text();
    return message;
}