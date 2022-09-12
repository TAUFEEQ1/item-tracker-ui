import QrScanner from "qr-scanner";
import { statuses } from ".";

export default (
  /** @type {boolean} */ isOk,
  /** @type {string} */ errorMsg,
  /** @type {(arg0: string) => void} */ setStatus,
    /** @type {string} */ apiKey,
) => {
  /**
 * @param {string | Blob} qcode
 * Sends code to server for verification.
 */
  async function validateCode(qcode) {
    let form = new FormData();
    form.set("product-code", qcode);

    const res = await fetch(import.meta.env.VITE_API_URL + "/validate", {
      body: form,
      method: "post",
      headers: {
        'Authorization': 'Bearer ' + apiKey
      }
    });
    if (res.ok) {
      isOk = true;
      return 0;
    }
    errorMsg = await res.text();
  }
  /**
   * @param {File} image
   */
  function readCode(image) {
    setStatus(statuses.VERIFYING);
    //scan image
    QrScanner.scanImage(image).then((result) => validateCode(result));
  }

  return [readCode]
}