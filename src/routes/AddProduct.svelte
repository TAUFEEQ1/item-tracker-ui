<script>
  import { Card, CardBody, FormGroup, Input, Button } from "sveltestrap";
  import { depts } from "../modules";
  import Api from "../modules/products";
  import { user } from "../stores";
  let product = { notes: "", verifier_depts:[] };
  const api = Api($user.apiKey);
  function handleSubmit() {
    api.add(product).then((blob) => {
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = (Math.random() + 1).toString(36).substring(7);
      document.body.appendChild(a); // we need to append the element to the dom -> otherwise it will not work in firefox
      a.click();
      a.remove();
    });
  }
</script>

<main
  class="d-flex justify-content-center flex-column align-items-center main-h"
>
  <div class="app-w">
    <Card>
      <h4 class="text-center mt-2 mb-0">Register Product</h4>
      <CardBody>
        <form on:submit|preventDefault={handleSubmit} id="add_product">
          <FormGroup>
            <label for="notes">Product Description</label>
            <Input type="textarea" bind:value={product.notes} required />
          </FormGroup>
          <FormGroup>
            <h6>Departments</h6>
            <Input
              type="checkbox"
              name="depts"
              label={depts.LEVEL_1}
              value={depts.LEVEL_1}
            />
            <Input
              type="checkbox"
              name="depts"
              label={depts.LEVEL_2}
              value={depts.LEVEL_2}
            />
            <Input
              type="checkbox"
              name="depts"
              label={depts.LEVEL_3}
              value={depts.LEVEL_3}
            />
          </FormGroup>
          <Button type="submit" class="w-100" color="primary"
            >Add Product</Button
          >
        </form>
      </CardBody>
    </Card>
  </div>
</main>
