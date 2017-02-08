import  Vue from '../main'
//import  {router} from '../main'
//import Vue from 'vue'



export default {

	user: {
		authenticated: false,
		profile: null
	},

	signup(context, email, username, password){
		Vue.http.post('auth/signup',
			{
				email: email,
				username: username,
				password: password
			}
		).then((response) => {
		context.error = false
	    context.success = true
	  	}, (response) => {
	    // error callback
	    context.response = response.data
	    context.error = true
	    	console.log('error')
	  	})	

	},

	signin(context, email, password){
		Vue.http.post('auth/signin',
			{
				email: email,
				password: password
			}
		).then((response) => {
		context.error = false
	    context.success = true
	    localStorage.setItem('id_token', response.data.meta.token)
	    this.user.authenticated = true,
	    this.user.profile = response.data.data
	    this.router.push('/')

	   

	   // console.log(response)
	  	}, (response) => {
	    // error callback
	    context.response = response.data
	    context.error = true
	  //  	console.log('error')
	  	})	

	}
}

