// @ts-nocheck
export default ()=>{
    localStorage.clear();
    window.location = import.meta.env.BASE_URL+"/login";
}