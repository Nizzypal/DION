var mongoose = require('mongoose');

var CareGiverSchema = new mongoose.Schema({
	firstName: String,
	middleName: String,
	lastName: String,
	Address: String,
	zipCode: Number,
	contactNo: Number,
	birthDate: Date,
	age: Number,
	gender: String,
	status: String,
	email: String,
	password: String,

 //    agreeTerms:  { type: Boolean, default: false },
	// city: String,

	//Transaction Info
	college: String,
	collegeGrad: Date,
	hischool: String,
	hischoolGrad: Date,
	elem: String,
	elemGrad: Date,
	certNurse: Boolean,
	certSocial: Boolean,
	certTeacher: Boolean,
	certCare: Boolean,
	certOther: Boolean
});

module.exports = mongoose.model('CareGiver', CareGiverSchema);