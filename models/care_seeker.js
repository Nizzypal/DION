//var bcrypt = require('bcrypt-nodejs');
var mongoose = require('mongoose');

var CareSeekerSchema = new mongoose.Schema({
	firstName: String,
	middleName: String,
	lastName: String,
	city: String,
	zipCode: Number,
	contactNo: Number,
	birthDate: Date,
	age: Number,
	gender: String,
	status: String,
	email: String,
    password: String,
    agree: Boolean,


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

	serviceSchedule: {
    	Sunday: { 
    		//type: Schema.Types.Mixed, 
    		earlyAM: { earlyAM: Boolean, nannyID: mongoose.Schema.Types.ObjectId },
    		midAM: { midAM: Boolean, nannyID: mongoose.Schema.Types.ObjectId },
    		lateAM: { lateAM: Boolean, nannyID: mongoose.Schema.Types.ObjectId },
    		earlyPM: { earlyPM: Boolean, nannyID: mongoose.Schema.Types.ObjectId },
    		midPM: { midPM: Boolean, nannyID: mongoose.Schema.Types.ObjectId },
    		latePM: { latePM: Boolean, nannyID: mongoose.Schema.Types.ObjectId },
    		overnight: { overnight: Boolean, nannyID: mongoose.Schema.Types.ObjectId },
    	},
    	Monday: { 
    		//type: Schema.Types.Mixed, 
            earlyAM: { earlyAM: Boolean, nannyID: mongoose.Schema.Types.ObjectId },
            midAM: { midAM: Boolean, nannyID: mongoose.Schema.Types.ObjectId },
            lateAM: { lateAM: Boolean, nannyID: mongoose.Schema.Types.ObjectId },
            earlyPM: { earlyPM: Boolean, nannyID: mongoose.Schema.Types.ObjectId },
            midPM: { midPM: Boolean, nannyID: mongoose.Schema.Types.ObjectId },
            latePM: { latePM: Boolean, nannyID: mongoose.Schema.Types.ObjectId },
            overnight: { overnight: Boolean, nannyID: mongoose.Schema.Types.ObjectId },
    	},
    	Tuesday: { 
    		//type: Schema.Types.Mixed, 
            earlyAM: { earlyAM: Boolean, nannyID: mongoose.Schema.Types.ObjectId },
            midAM: { midAM: Boolean, nannyID: mongoose.Schema.Types.ObjectId },
            lateAM: { lateAM: Boolean, nannyID: mongoose.Schema.Types.ObjectId },
            earlyPM: { earlyPM: Boolean, nannyID: mongoose.Schema.Types.ObjectId },
            midPM: { midPM: Boolean, nannyID: mongoose.Schema.Types.ObjectId },
            latePM: { latePM: Boolean, nannyID: mongoose.Schema.Types.ObjectId },
            overnight: { overnight: Boolean, nannyID: mongoose.Schema.Types.ObjectId },
    	},
    	Wednesday: { 
    		//type: Schema.Types.Mixed, 
            earlyAM: { earlyAM: Boolean, nannyID: mongoose.Schema.Types.ObjectId },
            midAM: { midAM: Boolean, nannyID: mongoose.Schema.Types.ObjectId },
            lateAM: { lateAM: Boolean, nannyID: mongoose.Schema.Types.ObjectId },
            earlyPM: { earlyPM: Boolean, nannyID: mongoose.Schema.Types.ObjectId },
            midPM: { midPM: Boolean, nannyID: mongoose.Schema.Types.ObjectId },
            latePM: { latePM: Boolean, nannyID: mongoose.Schema.Types.ObjectId },
            overnight: { overnight: Boolean, nannyID: mongoose.Schema.Types.ObjectId },
    	},
    	Thursday: { 
    		//type: Schema.Types.Mixed, 
            earlyAM: { earlyAM: Boolean, nannyID: mongoose.Schema.Types.ObjectId },
            midAM: { midAM: Boolean, nannyID: mongoose.Schema.Types.ObjectId },
            lateAM: { lateAM: Boolean, nannyID: mongoose.Schema.Types.ObjectId },
            earlyPM: { earlyPM: Boolean, nannyID: mongoose.Schema.Types.ObjectId },
            midPM: { midPM: Boolean, nannyID: mongoose.Schema.Types.ObjectId },
            latePM: { latePM: Boolean, nannyID: mongoose.Schema.Types.ObjectId },
            overnight: { overnight: Boolean, nannyID: mongoose.Schema.Types.ObjectId },
    	},
    	Friday: { 
    		//type: Schema.Types.Mixed, 
            earlyAM: { earlyAM: Boolean, nannyID: mongoose.Schema.Types.ObjectId },
            midAM: { midAM: Boolean, nannyID: mongoose.Schema.Types.ObjectId },
            lateAM: { lateAM: Boolean, nannyID: mongoose.Schema.Types.ObjectId },
            earlyPM: { earlyPM: Boolean, nannyID: mongoose.Schema.Types.ObjectId },
            midPM: { midPM: Boolean, nannyID: mongoose.Schema.Types.ObjectId },
            latePM: { latePM: Boolean, nannyID: mongoose.Schema.Types.ObjectId },
            overnight: { overnight: Boolean, nannyID: mongoose.Schema.Types.ObjectId },
    	},
      	Satday: { 
    		//type: Schema.Types.Mixed, 
            earlyAM: { earlyAM: Boolean, nannyID: mongoose.Schema.Types.ObjectId },
            midAM: { midAM: Boolean, nannyID: mongoose.Schema.Types.ObjectId },
            lateAM: { lateAM: Boolean, nannyID: mongoose.Schema.Types.ObjectId },
            earlyPM: { earlyPM: Boolean, nannyID: mongoose.Schema.Types.ObjectId },
            midPM: { midPM: Boolean, nannyID: mongoose.Schema.Types.ObjectId },
            latePM: { latePM: Boolean, nannyID: mongoose.Schema.Types.ObjectId },
            overnight: { overnight: Boolean, nannyID: mongoose.Schema.Types.ObjectId },
        }  		    	    	    	    	    	
  	},

  	Rate: Number,
  	Per: String

});

module.exports = mongoose.model('CareSeeker', CareSeekerSchema);