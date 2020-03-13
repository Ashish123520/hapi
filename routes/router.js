var UserController = require('../controler/controler.js');
var Joi=require('joi')

module.exports = function(){
	return [
		{
			method: 'post',
			path: '/users',
			options: {
				handler: UserController.getAllUsers,
				description: 'Get todo',
				notes: 'Returns a todo item by the id passed in the path',
				tags: ['api'] ,// ADD THIS TAG
				plugins: {
					
						'hapi-swagger': {
							payloadType: 'form'
						}
				},
				validate: {
					payload: Joi.object({
						name: Joi.string(),
						email: Joi.string()
					})
				}
			  
				
			}
			
			
		},
		{
			method: 'GET',
			path: '/posts',
		   handler: UserController.getAllPosts
			
				
		}
	]
}

   
    // options: {
	// 	handler: UserController.getAllUsers
    //     description: 'Get todo',
    //     notes: 'Returns a todo item by the id passed in the path',
    //     tags: ['api'] // ADD THIS TAG
      
        
    // },
