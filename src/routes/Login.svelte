<script>
  import { Button, Card, CardBody, FormGroup, Input } from "sveltestrap";
  import { useNavigate } from "svelte-navigator";
  import { user } from "../stores";
  import login from "../modules/login";
  const navigate = useNavigate();
  let username = "";
  let passkey = "";

  function handleSubmit() {
    login(username, passkey).then((result) => {
      const { first_name, last_name, access_token } = result;
      let tmp = { username, first_name, last_name, apiKey: access_token };
      localStorage.setItem("user", JSON.stringify(tmp));
      $user = tmp;
      navigate("/", { replace: true });
    });
  }
  function onRegister() {
    navigate("/register", { replace: true });
  }
</script>

<main
  class="d-flex justify-content-center flex-column align-items-center main-h"
>
  <div class="app-w">
    <Card>
      <h4 class="text-center mt-2 mb-0">Login</h4>
      <CardBody>
        <form on:submit|preventDefault={handleSubmit}>
          <FormGroup>
            <label for="username">Username</label>
            <Input type="text" bind:value={username} required />
          </FormGroup>
          <FormGroup>
            <label for="passkey">Password</label>
            <Input type="password" bind:value={passkey} required />
          </FormGroup>
          <div class="d-flex">
            <div class="col-5">
              <Button color="primary" type="submit" class="w-100"
                >SIGN IN</Button
              >
            </div>
            <div class="col-2 text-center align-self-center">
              &nbsp; Or &nbsp;
            </div>
            <div class="col-5">
              <Button color="success" class="w-100" on:click={onRegister}
                >&plus; REGISTER</Button
              >
            </div>
          </div>
        </form>
      </CardBody>
    </Card>
  </div>
</main>
