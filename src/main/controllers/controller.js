const controller = {
	get: (req, res) => {
		res.status(200).json({
			status: "SUCCESS",
			message: "Hello from controller",
		});
	},
};

module.exports = controller;
