//import Vue from '../main'
import Vue from 'vue'

const store = {}

export default store

store.state = {
	topic: null
}



store.getTopicsBySection = (id) => {
	return new Promise((resolve, reject) => {
		Vue.http.get('topic', {params: {section_id : id}} ).then((response) => {
	    // success callback
	    resolve(response.data.data)
	  //  console.log(response.data.data)
	  	}, (response) => {
	    // error callback
	    	console.log('error')
	  	})
	})
}

store.getSections = () => {
	return new Promise((resolve, reject) => {
		Vue.http.get('sections').then((response) => {
	    // success callback
	    resolve(response.data.data)
	    //console.log(response.data.data)
	  	}, (response) => {
	    // error callback
	    	console.log('error')
	  	})
	})
}


store.getSections1 = (context) => {
		Vue.http.get('sections').then((response) => {
	    context.sections = response.data.data
	  	}, (response) => {
	    // error callback
	    	console.log('error')
	  	})	
}





