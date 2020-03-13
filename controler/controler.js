module.exports = {
	 getAllUsers:function(request,h){
       var data =request.payload
       var response=h.response(data)
       return response
	},
	getAllPosts: function(request,h){
		return "all post"
	}
}