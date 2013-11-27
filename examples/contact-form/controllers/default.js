exports.install = function(framework) {
	framework.route('/', view_form);
	framework.route('/', json_form, ['xhr', 'post']);
};

function view_form() {
	this.view('form', builders.defaults('contactform'));
}

function json_form() {

	var self = this;	
	var model = self.post;

	// Documentation: http://docs.partialjs.com/FrameworkController/#controller.validation
	var error = self.validation(model, 'contactform');

	if (error.hasError()) {
		self.json(error);
		return;
	}

	// Documentatation: http://docs.partialjs.com/Builders.SchemaBuilder/#builders.prepare
	model = builders.prepare('contactform', model);
	model.Ip = self.ip;

	// save to database
	var db = self.database('forms');
	db.insert(model);

	// send mail
	// look to example: [email-templating]
	self.json({ r: true });
}
