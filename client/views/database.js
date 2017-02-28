import './database.html'

function getKeys(coll) {
	doc = global[coll].findOne()
	i = 0
	docKey = []
	for (key in doc) {
		docKey[i] = key
		i++
	};
	return docKey
}

ReactiveTabs.createInterface({
  template: 'basicTabs'
});

Template.database.helpers({
  	tabs: function () {
	    return [
			{ name: 'Events', slug: 'events', onRender: function(slug, template) {
				var docKey = getKeys("Events")
			}},
			{ name: 'Corners', slug: 'corners' },
			{ name: 'Freekicks', slug: 'freekicks' },
			{ name: 'Penalties', slug: 'penalties'}
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

Template.database_Corners.helpers({
    Corners: function () {
        return Corners;
    },
    docKey: function () {
    	doc = Corners.findOne()
		i = 0
		docKey = []
		for (key in doc) {
			docKey[i] = key
			i++
		};
		return docKey
    }
});

Template.database_Freekicks.helpers({
    Freekicks: function () {
        return Freekicks;
    },
    docKey: function () {
    	doc = Freekicks.findOne()
		i = 0
		docKey = []
		for (key in doc) {
			docKey[i] = key
			i++
		};
		return docKey
    }
});

Template.database_Penalties.helpers({
    Penalties: function () {
        return Penalties;
    },
    docKey: function () {
    	doc = Penalties.findOne()
		i = 0
		docKey = []
		for (key in doc) {
			docKey[i] = key
			i++
		};
		return docKey
    }
});