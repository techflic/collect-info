
const UserForms 			= require('./userForm.model');

const userFormsController = {
	addUserData: (request, response, next) => {
		let userForm = new UserForms({
            companyName: request.body.companyName,
            experience: request.body.experience,
            projects: request.body.projects
        })
        userForm.save((saveErr, savedUserForm) => {
            if(saveErr){
                return next(saveErr)
            }else{
                return response.status(200).json({
                    'success': true,
                    'message': 'user form added successfully',
                    'data': savedUserForm
                })
            }
        })
	},
	getUserData: (request, response, next) => {
		UserForms.find({}, (err, _userForms) => {
			if(err){
				return next(err)
			}else{
				return response.status(200).json({
					'success': true,
					'message': 'all users forms',
					'data': _userForms
				})
			}
		})
	}
}

module.exports = userFormsController;
