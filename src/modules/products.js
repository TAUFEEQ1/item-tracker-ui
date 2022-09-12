/**
 * @typedef Product
 * @property {string} notes
 * @property {string[]} verifier_depts 
 */

export default (token)=>{
    const BASE_URL =import.meta.env.VITE_API_URL+"/products";
    return {
        /**
         * @param {Product} product
         */
        async add(product){
            console.log(product);
            const res = await fetch(
                BASE_URL+"/",
                {
                    method:'post',
                    body:JSON.stringify(product),
                    headers:{
                        Authorization:'Bearer '+token
                    }
                }
            );

            const blob = await res.blob();
            return blob;
        }
    }
}