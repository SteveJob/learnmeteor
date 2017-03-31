import { Meteor } from 'meteor/meteor'
import { Providers } from '../providers'

Meteor.publish('providers', function() {
	return Providers.find()
})