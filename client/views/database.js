import './database.html'
import './upload.html'

ReactiveTabs.createInterface({
  template: 'basicTabs'
});

Template.database.helpers({
  	tabs: function () {
	    return [
			{ name: 'Events', slug: 'events' },
			{ name: 'Upload', slug: 'upload' }
	    ];
	},
	activeTab: function () {
		return Session.get('activeTab'); // Returns "people", "places", or "things".
	}
});

Template.database_Events.helpers({
    Events: function () {
        return Events;
    },
    docKey: function () {
    	doc = Events.findOne()
		i = 0
		docKey = []
		for (key in doc) {
			docKey[i] = key
			i++
		};
		return docKey
    }
});
