var bcrypt = require('bcrypt-nodejs');
var mongoose = require('mongoose');

var careSeekerSchema = new mongoose.Schema({
	firstName: String,
	middleName: String,
	lastName: String,
	location: String,
	zipCode: Number,
	contactNo: Number,
	birthDate: Date,
	age: Number,
	gender: String,
	status: String,
	email: String,
    password: String,


	//Transaction Info
	serviceNeeded: String,
	noNeedService: [Number],
	specialCondition: Boolean,
	conditions: [String],
	careFrequency: String,
	schedule: String,
	startDate: { type: Date, default: Date.now },
	endDate: { type: Date, default: Date.now },
	dateFlexible: String,

	serviceSchedule: [
    	Sunday: { 
    		type: Schema.Types.Mixed, 
    		{ earlyAM: Boolean, nannyID: Schema.Types.ObjectId },
    		{ midAM: Boolean, nannyID: Schema.Types.ObjectId },
    		{ lateAM: Boolean, nannyID: Schema.Types.ObjectId },
    		{ earlyPM: Boolean, nannyID: Schema.Types.ObjectId },
    		{ midPM: Boolean, nannyID: Schema.Types.ObjectId },
    		{ latePM: Boolean, nannyID: Schema.Types.ObjectId },
    		{ overnight: Boolean, nannyID: Schema.Types.ObjectId },
    	},
    	Monday: { 
    		type: Schema.Types.Mixed, 
    		{ earlyAM: Boolean, nannyID: Schema.Types.ObjectId },
    		{ midAM: Boolean, nannyID: Schema.Types.ObjectId },
    		{ lateAM: Boolean, nannyID: Schema.Types.ObjectId },
    		{ earlyPM: Boolean, nannyID: Schema.Types.ObjectId },
    		{ midPM: Boolean, nannyID: Schema.Types.ObjectId },
    		{ latePM: Boolean, nannyID: Schema.Types.ObjectId },
    		{ overnight: Boolean, nannyID: Schema.Types.ObjectId },
    	},
    	Tuesday: { 
    		type: Schema.Types.Mixed, 
    		{ earlyAM: Boolean, nannyID: Schema.Types.ObjectId },
    		{ midAM: Boolean, nannyID: Schema.Types.ObjectId },
    		{ lateAM: Boolean, nannyID: Schema.Types.ObjectId },
    		{ earlyPM: Boolean, nannyID: Schema.Types.ObjectId },
    		{ midPM: Boolean, nannyID: Schema.Types.ObjectId },
    		{ latePM: Boolean, nannyID: Schema.Types.ObjectId },
    		{ overnight: Boolean, nannyID: Schema.Types.ObjectId },
    	},
    	Wednesday: { 
    		type: Schema.Types.Mixed, 
    		{ earlyAM: Boolean, nannyID: Schema.Types.ObjectId },
    		{ midAM: Boolean, nannyID: Schema.Types.ObjectId },
    		{ lateAM: Boolean, nannyID: Schema.Types.ObjectId },
    		{ earlyPM: Boolean, nannyID: Schema.Types.ObjectId },
    		{ midPM: Boolean, nannyID: Schema.Types.ObjectId },
    		{ latePM: Boolean, nannyID: Schema.Types.ObjectId },
    		{ overnight: Boolean, nannyID: Schema.Types.ObjectId },
    	},
    	Thursday: { 
    		type: Schema.Types.Mixed, 
    		{ earlyAM: Boolean, nannyID: Schema.Types.ObjectId },
    		{ midAM: Boolean, nannyID: Schema.Types.ObjectId },
    		{ lateAM: Boolean, nannyID: Schema.Types.ObjectId },
    		{ earlyPM: Boolean, nannyID: Schema.Types.ObjectId },
    		{ midPM: Boolean, nannyID: Schema.Types.ObjectId },
    		{ latePM: Boolean, nannyID: Schema.Types.ObjectId },
    		{ overnight: Boolean, nannyID: Schema.Types.ObjectId },
    	},
    	Friday: { 
    		type: Schema.Types.Mixed, 
    		{ earlyAM: Boolean, nannyID: Schema.Types.ObjectId },
    		{ midAM: Boolean, nannyID: Schema.Types.ObjectId },
    		{ lateAM: Boolean, nannyID: Schema.Types.ObjectId },
    		{ earlyPM: Boolean, nannyID: Schema.Types.ObjectId },
    		{ midPM: Boolean, nannyID: Schema.Types.ObjectId },
    		{ latePM: Boolean, nannyID: Schema.Types.ObjectId },
    		{ overnight: Boolean, nannyID: Schema.Types.ObjectId },
    	},
      	Satday: { 
    		type: Schema.Types.Mixed, 
    		{ earlyAM: Boolean, nannyID: Schema.Types.ObjectId },
    		{ midAM: Boolean, nannyID: Schema.Types.ObjectId },
    		{ lateAM: Boolean, nannyID: Schema.Types.ObjectId },
    		{ earlyPM: Boolean, nannyID: Schema.Types.ObjectId },
    		{ midPM: Boolean, nannyID: Schema.Types.ObjectId },
    		{ latePM: Boolean, nannyID: Schema.Types.ObjectId },
    		{ overnight: Boolean, nannyID: Schema.Types.ObjectId },
    	}  		    	    	    	    	    	
  	],

  	Rate: Number,
  	Per: String

});

module.exports = mongoose.model('CareSeeker', careSeekerSchema);