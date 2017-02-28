FlowRouter.route('/', {
  action: function() {
    BlazeLayout.render("mainLayout", {content: ""});
  }
});

FlowRouter.route('/database', {
	action: function() {
		BlazeLayout.render("mainLayout", {content: "database"})
	}
})

FlowRouter.route('/database/upload', {
	action: function() {
		BlazeLayout.render("mainLayout", {content: "upload"})
	}
})

FlowRouter.route('/team/:teamId', {
	action: function(params, queryParams) {
		BlazeLayout.render("mainLayout", {content: params.teamId})
	}
})

FlowRouter.route('/player/:playerName', {
	action: function(params, queryParams) {
		BlazeLayout.render("mainLayout", {content: params.teamId})
	}
})