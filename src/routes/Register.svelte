<script>
    import {Card,CardBody,FormGroup,Input,Button,Spinner,Toast,ToastBody,ToastHeader} from "sveltestrap";
    import { useNavigate } from "svelte-navigator";
    import register from "../modules/register";
    import { depts } from "../modules";
    const navigate = useNavigate();

    let isBusy = false;
    let apiMessage = null;
    let hasMessage = apiMessage?true:false;
    
    const phone_pattern ="^[0-9]{10}$";
    let user = {
        username:'',
        first_name:'',
        last_name:'',
        phone_no:'',
        password:'',
        dept:depts.LEVEL_1
    };

    function handleSubmit(){
        isBusy = true;
        register(user).then(message=>{
            apiMessage = message;
            isBusy=false;
            setTimeout(()=>{
                navigate('/login');
            },5000);
        });
    
    }
</script>
<main class="d-flex justify-content-center flex-column align-items-center main-h">
    <div class="app-w">
        <Card>
            <h4 class="text-center mt-2 mb-0">Register</h4>
            <CardBody>
                <form on:submit|preventDefault="{handleSubmit}">
                    <div class="row">
                        <FormGroup class="col-6">
                            <label for="fname">First Name</label>
                            <Input type="text" bind:value="{user.first_name}" required/>
                        </FormGroup>
                        <FormGroup class="col-6">
                            <label for="lname">Last Name</label>
                            <Input type="text" bind:value="{user.last_name}" required/>
                        </FormGroup>
                    </div>
                    <div class="row">
                        <FormGroup class="col-6">
                            <label for="phone_no">Phone No.</label>
                            <Input type="tel" bind:value="{user.phone_no}" required pattern={phone_pattern}/>
                        </FormGroup>
                        <FormGroup class="col-6">
                            <label for="depts">Departments</label>
                            <Input type="select" name="select" id="exampleSelect" bind:value="{user.dept}">
                                <option>{depts.LEVEL_1}</option>
                                <option>{depts.LEVEL_2}</option>
                                <option>{depts.LEVEL_3}</option>
                              </Input>
                        </FormGroup>
                    </div>
                    <FormGroup>
                        <label for="username">Username</label>
                        <Input type="text" bind:value="{user.username}" required/>
                    </FormGroup>
                    <FormGroup>
                        <label for="passkey">Password</label>
                        <Input type="password" bind:value="{user.password}" required/>
                    </FormGroup>
                    <Button color="primary" type="submit" class="w-100">
                        {#if isBusy}
                        <Spinner size="sm"/>
                        {/if}
                        REGISTER
                    </Button>
                </form>
            </CardBody>
        </Card>
        <Toast isOpen={hasMessage}>
            <ToastHeader>Registration Operation</ToastHeader>
            <ToastBody>
                {apiMessage}
            </ToastBody>
        </Toast>
    </div>
</main>