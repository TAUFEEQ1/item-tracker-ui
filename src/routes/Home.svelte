<script>
    import {
      Card,
      Button,
      CardBody,
      Spinner,
      Toast,
      ToastBody,
      ToastHeader,
    } from "sveltestrap";
    import {user} from "../stores";
    import Qcode from "../modules/qcode";
    import { statuses, statusTexts } from "../modules";
  
    let status = statuses.INIT;
    let avatar = null;
    let error = null;
    let hasError = error ? true : false;
    let isOk = false;
    let changeStatus = (/** @type {string} */ state) => (status = state);
    let [validateCode] = Qcode(isOk, error, changeStatus,$user.apiKey);
    let isBusy = (/** @type {string} */ state) =>
      [statuses.SCANNING, statuses.VERIFYING].includes(state);
  
    function openFiles() {
      // @ts-ignore
      document.querySelector("#input_file").click();
    }
  
    /**
     * @param {Blob} image
     */
    function displayImage(image) {
      let reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onload = (e) => {
        avatar = e.target.result;
      };
    }
    function onFileSelected(event) {
      /** @var {File} */
      let image = event.target.files[0];
      changeStatus(statuses.SCANNING);
      displayImage(image);
      validateCode(image);
    }
  </script>
  
  <main
    class="d-flex justify-content-center flex-column align-items-center main-h"
  >
    <div class="app-w">
      <Card>
        <CardBody>
          <div class="py-2 bg-light px-3 rounded-1 mt-3">
            <h5 class="text-center">Instructions</h5>
            <div class="text-justify">
              <ol>
                <li>Use cli to register product</li>
                <li>Scan registered product</li>
              </ol>
            </div>
          </div>
          <div class="mt-3">
            {#if avatar}
              <img src={avatar} alt="dummy" class="img-fluid rounded-1" />
            {:else}
              <img
                src="https://dummyimage.com/640x360/eaeaea/aaa"
                alt="dummy"
                class="img-fluid rounded-1"
              />
            {/if}
          </div>
          <input
            type="file"
            name="qrcode"
            id="input_file"
            hidden
            on:change={onFileSelected}
            accept="image/gif, image/jpeg, image/png"
          />
          <Button
            class="mx-auto w-100 mt-3 mb-3"
            color="primary"
            on:click={openFiles}
          >
            {#if isBusy(status)}
              <Spinner size="sm" />
            {/if}
            {statusTexts[status]}
          </Button>
        </CardBody>
      </Card>
      <Toast isOpen={hasError}>
        <ToastHeader icon="danger">Invalid Code</ToastHeader>
        <ToastBody>
          {error}
        </ToastBody>
      </Toast>
      <Toast isOpen={isOk}>
        <ToastHeader icon="success">Product Code Valid</ToastHeader>
        <ToastBody>Product in store is valid</ToastBody>
      </Toast>
    </div>
  </main>
  
  <style>
    .text-justify {
      text-align: justify;
    }
  </style>
  