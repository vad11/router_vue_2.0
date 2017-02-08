<template>

<div class="panel panel-default">
	<div class="panel-heading">	
		<nav>
			<ul class="list-inline">
				
				<li><router-link :to="{ name: 'home' }">Home</router-link></li>
				<li><router-link :to="{ name: 'topic.new' }">Post a topic</router-link></li>
				
				<li class="pull-right"><router-link :to="{ name: 'auth.signup' }">SignUp</router-link></li>
				<li class="pull-right"><router-link :to="{ name: 'auth.signin' }">SignIn</router-link></li>
				<li class="pull-right">Hi, alex!</li>
				
			</ul>
		</nav>
	</div>
	<div class="panel-body">

		<p>Header</p>
		<hr>
	    <router-view ></router-view>
		<hr>
		<p>Footer</p>

	</div>
</div>

</template>



