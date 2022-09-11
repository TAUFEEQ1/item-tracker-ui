export default async (/** @type {string | Blob} */ username,/** @type {string | Blob} */ passkey)=>{
    const data = new FormData();
    data.set('username',username);
    data.set('passkey',passkey);
    const res = await fetch(import.meta.env.VITE_API_URL+"/login",{
        method:"post",
        body:data
    });
    const apiKey = await res.text();
    return apiKey;
}