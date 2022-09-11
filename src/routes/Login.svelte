<script>
import {Button, Card,CardBody,Form, FormGroup, Input} from "sveltestrap";
import {useNavigate} from "svelte-navigator";
import { user } from "../stores";
import login from "../modules/login";
const navigate = useNavigate();
let username="";
let passkey = "";

function handleSubmit(){
    login(username,passkey).then((apiKey)=>{
        $user = {username,apiKey};
        navigate('/',{replace:true});
    });
}
</script>
<main
class="d-flex justify-content-center flex-column align-items-center main-h"
>
    <div class="app-w">
        <Card>
            <h4 class="text-center mt-2 mb-0">Login</h4>
            <CardBody>
                <Form on:submit="{handleSubmit}">
                    <FormGroup>
                        <label for="username">Username</label>
                        <Input type="text" bind:value="{username}" required/>
                    </FormGroup>
                    <FormGroup>
                        <label for="passkey">Password</label>
                        <Input type="password" bind:value="{passkey}" required/>
                    </FormGroup>
                    <Button color="primary" type="submit" class="w-100">SIGN IN</Button>
                </Form>
            </CardBody>
        </Card>
    </div>
</main>
