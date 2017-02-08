<template>

	<div>
		<ul class="list-unstyled">
			<li class="well" v-for="section in sections">
				<h4><router-link :to="{ name: 'section', params: { sectionId: section.id }}"> {{ section.title }} </router-link></h4>
				<p>{{ section.description }}</p>
			</li>
		</ul>
  	</div>
</template>


<script>

import store from '../store'

export default {
  
	data () {
	    return {
	    	sections: [],

	      	loading: false,
	      	post: null,
	      	error: null
	    }
	},

	created () {    
	    store.getSections().then(sections => {
	    	 this.sections = sections
	    	//this.sections = sections
	    	//console.log(sections)
	    })

	//   store.getSections1(this)
	  


	}

}

</script>