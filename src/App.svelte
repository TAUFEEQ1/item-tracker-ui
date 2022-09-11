<!-- App.svelte -->
<script>
	import { Router, Link, Route } from "svelte-navigator";
	import Login from "./routes/Login.svelte";
	import Home from "./routes/Home.svelte";
	import PrivateRoute from "./routes/PrivateRoute.svelte";

</script>

<Router>
	<div>
		<Route path="login">
			<Login />
		</Route>

		<PrivateRoute path="/">
			<Home />
		</PrivateRoute>
	</div>
</Router>