const mongoose 			= require('mongoose');
const Schema 			= mongoose.Schema;

let UserFormSchema = new Schema({
    companyName: {
    	type: String,
    	trim: true,
    	required: true
    },
    experience: {
    	type: String,
    	required: true
    },
    projects: {
    	type: String,
    	required: true
    },
    desc:  {
    	type: String,
    	required: false
    }
});


module.exports = mongoose.model('UserForms', UserFormSchema);