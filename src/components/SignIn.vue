<template>
<div>
	<div class="alert alert-danger" v-if="error">
		<p>Could not sign you up</p>
	</div>
	<div class="alert alert-success" v-if="success">
		<p>You're done! You sign in</p>
	</div>

	<form autocomplite="off"  v-if="!success" v-on:submit="signin">
		<div class="form-group" v-bind:class="{'has-error': error && response.email}">
			<label for="email">Email</label>
			<input type="email" id="email" class="form-control" placeholder="you@samewhare.com"  v-model="email">
			<span class="help-block" v-if="error && response.email">{{response.email}}</span>

		</div>
		<div class="form-group" v-bind:class="{'has-error': error && response.password}">
			<label for="password">Password</label>
			<input type="password" id="password" class="form-control"  v-model="password">
			<span class="help-block" v-if="error && response.password">{{response.password}}</span>

		</div>

		<button type="submit" class="btn btn-default" >Sign in</button>
	</form>
</div>
</template>

<script>
	import auth from '../auth'
	export default {
		data(){
			return{
				email:null,
				password: null,

				success: false,
				error: false,
				
				response: null
			}
		},

		methods: {
			signin(e){
				e.preventDefault()
				console.log(this)
				auth.signin(this, this.email, this.password)
			}
		}
	}
</script>