const RegsiterModel = require("../models/register.model.js");

// how to handle form submissions
const post_register = (req, res) => {
	const incomingData = req.body;
	const newAppointment = new AppointmentModel(incomingData);

	newAppointment.save((err, doc) => {
		if (err) {
			res.status(500).send({
				err: err,
				message: "Error Occured. Could not create appointment sorry ;-;",
			});
		}

		res.status(200).send({
			message: "Appointment successfully made!",
			document: doc,
		});
	});
};

const get_appointments = (req, res) => {
	AppointmentModel.find({}, (err, appointments) => {
		if (err) {
			res.status(500).send({
				status: 500,
				msg: "No Appointments found : /",
			});
		}
		res.status(200).send(appointments);
	});
};

module.exports = { post_appointment, get_appointments };
