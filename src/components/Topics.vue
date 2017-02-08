<template>
<div>

	<div class="media" v-for="topic in topics">
		<div class="media-left">
			<img v-bind:src="topic.user.data.avatar">
		</div>
		<div class="media-body">
			<h4 class="media-heading">
				<router-link :to="{ name: 'topic', params: { topicId: topic.id }}"> {{topic.title}} </router-link>
			</h4>
			<p class="text-muted">Posted by {{topic.user.data.username}} {{topic.diffForHumans}}</p>
		</div>
	</div>
</div>
</template>


<script>

import store from '../store'

export default {
  
	data () {
	    return {
	    	topics: [],
	    }
	},

	created () { 
	  //	console.log(this.$route.params.sectionId)   
	    store.getTopicsBySection(this.$route.params.sectionId).then(topics => {
	    	this.topics = topics
	    })
	}
}

</script>